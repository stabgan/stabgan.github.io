import { describe, it, expect } from "vitest";
import * as fc from "fast-check";

/**
 * Property 2: Featured certifications always visible
 *
 * **Validates: Requirements 1.1, 1.2**
 *
 * For any certifications array where some entries have `featured: true`,
 * all featured certifications must appear in the visible set
 * (up to the visible count limit).
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

// Arbitrary: generate a certification object with random featured flag
const certArbitrary = fc.record({
  name: fc.string({ minLength: 1, maxLength: 50 }),
  issuer: fc.string({ minLength: 1, maxLength: 50 }),
  year: fc.stringMatching(/^20[0-9]{2}$/),
  featured: fc.boolean(),
});

// Generate arrays of certifications with unique _id for identity tracking
const certificationsArbitrary = fc
  .array(certArbitrary, { minLength: 0, maxLength: 40 })
  .map((certs) => certs.map((c, i) => ({ ...c, _id: i })));

describe("Property 2: Featured certifications always visible", () => {
  it("all featured certs appear in visible set when featured count <= VISIBLE_COUNT", () => {
    fc.assert(
      fc.property(certificationsArbitrary, (certifications) => {
        const { visible } = splitCertifications(certifications);
        const featuredCerts = certifications.filter((c) => c.featured);

        if (featuredCerts.length <= VISIBLE_COUNT) {
          // Every featured cert must be in the visible set
          for (const cert of featuredCerts) {
            expect(visible).toContain(cert);
          }
        }
      })
    );
  });

  it("visible set contains VISIBLE_COUNT featured certs when featured count > VISIBLE_COUNT", () => {
    fc.assert(
      fc.property(certificationsArbitrary, (certifications) => {
        const { visible } = splitCertifications(certifications);
        const featuredCerts = certifications.filter((c) => c.featured);

        if (featuredCerts.length > VISIBLE_COUNT) {
          // Visible set should contain exactly VISIBLE_COUNT items, all featured
          const visibleFeatured = visible.filter((c) => c.featured);
          expect(visibleFeatured.length).toBe(VISIBLE_COUNT);
        }
      })
    );
  });

  it("no featured cert is placed in the hidden set when featured count <= VISIBLE_COUNT", () => {
    fc.assert(
      fc.property(certificationsArbitrary, (certifications) => {
        const { hidden } = splitCertifications(certifications);
        const featuredCerts = certifications.filter((c) => c.featured);

        if (featuredCerts.length <= VISIBLE_COUNT) {
          for (const cert of featuredCerts) {
            expect(hidden).not.toContain(cert);
          }
        }
      })
    );
  });
});
