import { describe, it, expect } from "vitest";
import * as fc from "fast-check";

/**
 * Active section membership
 *
 * **Validates: Requirements 5.1, 5.2, 5.3**
 *
 * For any list of section IDs, the returned active section value
 * must always be a member of that list or null — never an ID
 * outside the input set.
 *
 * We extract the core selection logic from useActiveSection's
 * IntersectionObserver callback and test it as a pure function.
 */

/**
 * Pure extraction of the observer callback logic from useActiveSection.
 *
 * Given a list of intersection entries (each with isIntersecting,
 * intersectionRatio, and targetId), returns the ID of the most-visible
 * intersecting entry, or null if none are intersecting.
 */
function determineActiveSection(entries) {
  const visible = entries
    .filter((entry) => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

  if (visible.length > 0) {
    return visible[0].targetId;
  }
  return null;
}

// Arbitrary: generate a non-empty array of unique section ID strings
const sectionIdsArbitrary = fc
  .uniqueArray(fc.string({ minLength: 1, maxLength: 20 }), {
    minLength: 1,
    maxLength: 15,
  });

// Arbitrary: generate an intersection entry whose targetId is drawn from the provided sectionIds
function entryArbitrary(sectionIds) {
  return fc.record({
    targetId: fc.constantFrom(...sectionIds),
    isIntersecting: fc.boolean(),
    intersectionRatio: fc.double({ min: 0, max: 1, noNaN: true }),
  });
}

// Arbitrary: generate a list of entries for the given sectionIds
function entriesArbitrary(sectionIds) {
  return fc.array(entryArbitrary(sectionIds), { minLength: 0, maxLength: 20 });
}

describe("Property 3: Active section membership", () => {
  it("determineActiveSection always returns a member of sectionIds or null", () => {
    fc.assert(
      fc.property(
        sectionIdsArbitrary.chain((sectionIds) =>
          entriesArbitrary(sectionIds).map((entries) => ({
            sectionIds,
            entries,
          }))
        ),
        ({ sectionIds, entries }) => {
          const result = determineActiveSection(entries);
          if (result !== null) {
            expect(sectionIds).toContain(result);
          } else {
            expect(result).toBeNull();
          }
        }
      )
    );
  });

  it("returns null when no entries are intersecting", () => {
    fc.assert(
      fc.property(
        sectionIdsArbitrary.chain((sectionIds) =>
          fc
            .array(
              fc.record({
                targetId: fc.constantFrom(...sectionIds),
                isIntersecting: fc.constant(false),
                intersectionRatio: fc.double({ min: 0, max: 1, noNaN: true }),
              }),
              { minLength: 0, maxLength: 20 }
            )
            .map((entries) => ({ sectionIds, entries }))
        ),
        ({ entries }) => {
          const result = determineActiveSection(entries);
          expect(result).toBeNull();
        }
      )
    );
  });

  it("when at least one entry is intersecting, the result is a valid section ID (not null)", () => {
    fc.assert(
      fc.property(
        sectionIdsArbitrary.chain((sectionIds) =>
          fc
            .array(
              fc.record({
                targetId: fc.constantFrom(...sectionIds),
                isIntersecting: fc.constant(true),
                intersectionRatio: fc.double({ min: 0, max: 1, noNaN: true }),
              }),
              { minLength: 1, maxLength: 20 }
            )
            .map((entries) => ({ sectionIds, entries }))
        ),
        ({ sectionIds, entries }) => {
          const result = determineActiveSection(entries);
          // Must not be null when there are intersecting entries
          expect(result).not.toBeNull();
          // Must be a member of sectionIds
          expect(sectionIds).toContain(result);
        }
      )
    );
  });
});
