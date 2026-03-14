import { describe, it, expect } from "vitest";
import * as fc from "fast-check";

/**
 * Certification partition — no data loss
 *
 * **Validates: Requirements 1.1, 1.3, 1.6**
 *
 * For any certifications array split into visible/hidden,
 * visible.length + hidden.length === total and every cert
 * appears in exactly one set.
 */

const VISIBLE_COUNT = 6;

/**
 * Split certifications into visible and hidden sets.
 * Featured certs get priority in the visible set.
 */
function splitCertifications(certifications) {
  const featuredCerts = certifications.filter((c) => c.featured);
  const remainingCerts = certifications.filter((c) => !c.featured);

  const visibleCerts =
    featuredCerts.length >= VISIBLE_COUNT
      ? featuredCerts.slice(0, VISIBLE_COUNT)
      : [
          ...featuredCerts,
          ...remainingCerts.slice(0, VISIBLE_COUNT - featuredCerts.length),
        ];

  const hiddenCerts = certifications.filter((c) => !visibleCerts.includes(c));

  return { visible: visibleCerts, hidden: hiddenCerts };
}

// Arbitrary: generate a certification object with a unique id, random name/issuer/year, and random featured flag
const certArbitrary = fc.record({
  name: fc.string({ minLength: 1, maxLength: 50 }),
  issuer: fc.string({ minLength: 1, maxLength: 50 }),
  year: fc.stringMatching(/^20[0-9]{2}$/),
  featured: fc.boolean(),
});

// Generate arrays of certifications where each has a unique id to track identity
const certificationsArbitrary = fc
  .array(certArbitrary, { minLength: 0, maxLength: 40 })
  .map((certs) =>
    certs.map((c, i) => ({ ...c, _id: i }))
  );

describe("Property 1: Certification partition — no data loss", () => {
  it("visible.length + hidden.length === total for any certifications array", () => {
    fc.assert(
      fc.property(certificationsArbitrary, (certifications) => {
        const { visible, hidden } = splitCertifications(certifications);
        expect(visible.length + hidden.length).toBe(certifications.length);
      })
    );
  });

  it("every certification appears in exactly one of visible or hidden", () => {
    fc.assert(
      fc.property(certificationsArbitrary, (certifications) => {
        const { visible, hidden } = splitCertifications(certifications);

        // Build sets of _id for each partition
        const visibleIds = new Set(visible.map((c) => c._id));
        const hiddenIds = new Set(hidden.map((c) => c._id));

        // No overlap between visible and hidden
        for (const id of visibleIds) {
          expect(hiddenIds.has(id)).toBe(false);
        }

        // Every cert from the original array is in exactly one set
        for (const cert of certifications) {
          const inVisible = visibleIds.has(cert._id);
          const inHidden = hiddenIds.has(cert._id);
          expect(inVisible || inHidden).toBe(true);
          expect(inVisible && inHidden).toBe(false);
        }
      })
    );
  });
});
