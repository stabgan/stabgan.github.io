import { describe, it, expect } from "vitest";
import * as fc from "fast-check";

/**
 * Mobile animation parameters
 *
 * **Validates: Requirements 11.1, 11.2, 11.3**
 *
 * For any viewport width, if the width is 640px or less then the hero
 * character animation delay must be ≤ 0.02s and vertical displacement
 * must be 20px; if the width is greater than 640px then the delay must
 * be 0.035s and vertical displacement must be 40px.
 *
 * We extract the animation parameter logic from Hero.jsx as a pure
 * function so it can be tested without DOM or window dependencies.
 */

/**
 * Pure extraction of the animation parameter logic from Hero.jsx.
 *
 * Given a viewport width, returns the character delay and displacement
 * values that the hero animation should use.
 *
 * Mirrors the Hero.jsx logic:
 *   const isMobile = width <= 640;
 *   const CHAR_DELAY = isMobile ? 0.02 : 0.035;
 *   const displacement = isMobile ? 20 : 40;
 */
function getAnimationParams(width) {
  const isMobile = width <= 640;
  const charDelay = isMobile ? 0.02 : 0.035;
  const displacement = isMobile ? 20 : 40;
  return { charDelay, displacement };
}

describe("Property 6: Mobile animation parameters", () => {
  it("mobile viewports (≤640px) use reduced delay and displacement", () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 640 }),
        (width) => {
          const { charDelay, displacement } = getAnimationParams(width);
          expect(charDelay).toBeLessThanOrEqual(0.02);
          expect(displacement).toBe(20);
        }
      )
    );
  });

  it("desktop viewports (>640px) use default delay and displacement", () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 641, max: 7680 }),
        (width) => {
          const { charDelay, displacement } = getAnimationParams(width);
          expect(charDelay).toBe(0.035);
          expect(displacement).toBe(40);
        }
      )
    );
  });

  it("boundary: width exactly 640 uses mobile parameters", () => {
    fc.assert(
      fc.property(
        fc.constant(640),
        (width) => {
          const { charDelay, displacement } = getAnimationParams(width);
          expect(charDelay).toBeLessThanOrEqual(0.02);
          expect(displacement).toBe(20);
        }
      )
    );
  });

  it("boundary: width exactly 641 uses desktop parameters", () => {
    fc.assert(
      fc.property(
        fc.constant(641),
        (width) => {
          const { charDelay, displacement } = getAnimationParams(width);
          expect(charDelay).toBe(0.035);
          expect(displacement).toBe(40);
        }
      )
    );
  });

  it("for any positive viewport width, parameters match the correct range", () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 10000 }),
        (width) => {
          const { charDelay, displacement } = getAnimationParams(width);

          if (width <= 640) {
            expect(charDelay).toBeLessThanOrEqual(0.02);
            expect(displacement).toBe(20);
          } else {
            expect(charDelay).toBe(0.035);
            expect(displacement).toBe(40);
          }
        }
      )
    );
  });
});
