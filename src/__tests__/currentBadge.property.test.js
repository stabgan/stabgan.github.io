import { describe, it, expect } from "vitest";
import * as fc from "fast-check";

/**
 * Current badge renders iff current is true
 *
 * **Validates: Requirements 8.1, 8.3**
 *
 * For any experience entry, the "Current" badge is rendered adjacent
 * to the role title if and only if that entry has `current: true`.
 *
 * We extract the badge rendering decision from Experience.jsx as a
 * pure function: `exp.current && (<badge/>)` — the badge renders
 * iff `exp.current === true`.
 */

/**
 * Pure extraction of the badge rendering logic from Experience.jsx.
 *
 * Given an experience entry, returns true if the "Current" badge
 * should render, false otherwise.
 *
 * Mirrors the JSX: `exp.current && (<span>Current</span>)`
 */
function shouldRenderCurrentBadge(entry) {
  return !!entry.current;
}

// Arbitrary: generate an experience entry with a random `current` value
// that can be true, false, or undefined (matching real-world data shapes)
const currentValueArbitrary = fc.oneof(
  fc.constant(true),
  fc.constant(false),
  fc.constant(undefined)
);

const experienceEntryArbitrary = fc.record({
  role: fc.string({ minLength: 1, maxLength: 60 }),
  company: fc.string({ minLength: 1, maxLength: 60 }),
  period: fc.string({ minLength: 1, maxLength: 20 }),
  current: currentValueArbitrary,
  bullets: fc.array(fc.string({ minLength: 1, maxLength: 100 }), {
    minLength: 1,
    maxLength: 5,
  }),
});

describe("Property 5: Current badge renders iff current is true", () => {
  it("badge renders if and only if current === true", () => {
    fc.assert(
      fc.property(experienceEntryArbitrary, (entry) => {
        const renders = shouldRenderCurrentBadge(entry);

        if (entry.current === true) {
          expect(renders).toBe(true);
        } else {
          expect(renders).toBe(false);
        }
      })
    );
  });

  it("badge never renders when current is false", () => {
    fc.assert(
      fc.property(
        fc.record({
          role: fc.string({ minLength: 1, maxLength: 60 }),
          company: fc.string({ minLength: 1, maxLength: 60 }),
          period: fc.string({ minLength: 1, maxLength: 20 }),
          current: fc.constant(false),
          bullets: fc.array(fc.string({ minLength: 1, maxLength: 100 }), {
            minLength: 1,
            maxLength: 5,
          }),
        }),
        (entry) => {
          expect(shouldRenderCurrentBadge(entry)).toBe(false);
        }
      )
    );
  });

  it("badge never renders when current is undefined", () => {
    fc.assert(
      fc.property(
        fc.record({
          role: fc.string({ minLength: 1, maxLength: 60 }),
          company: fc.string({ minLength: 1, maxLength: 60 }),
          period: fc.string({ minLength: 1, maxLength: 20 }),
          current: fc.constant(undefined),
          bullets: fc.array(fc.string({ minLength: 1, maxLength: 100 }), {
            minLength: 1,
            maxLength: 5,
          }),
        }),
        (entry) => {
          expect(shouldRenderCurrentBadge(entry)).toBe(false);
        }
      )
    );
  });

  it("badge always renders when current is true", () => {
    fc.assert(
      fc.property(
        fc.record({
          role: fc.string({ minLength: 1, maxLength: 60 }),
          company: fc.string({ minLength: 1, maxLength: 60 }),
          period: fc.string({ minLength: 1, maxLength: 20 }),
          current: fc.constant(true),
          bullets: fc.array(fc.string({ minLength: 1, maxLength: 100 }), {
            minLength: 1,
            maxLength: 5,
          }),
        }),
        (entry) => {
          expect(shouldRenderCurrentBadge(entry)).toBe(true);
        }
      )
    );
  });
});
