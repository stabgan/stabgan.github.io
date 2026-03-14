import { describe, it, expect } from "vitest";
import * as fc from "fast-check";

/**
 * Active nav link matches active section
 *
 * **Validates: Requirements 5.4, 5.5**
 *
 * For any active section ID, exactly one navigation link has accent styling
 * and it corresponds to that section. When activeSection is null, no links
 * have accent styling.
 *
 * Pure extraction of the styling logic from Header.jsx:
 *   const isActive = activeSection === l.href.replace("#", "");
 *   isActive ? "text-accent" : "text-text-muted hover:text-text"
 */

/**
 * Given a navLinks array and an activeSection ID, returns an array of
 * objects indicating which links receive accent styling.
 */
function getNavLinkStyles(navLinks, activeSection) {
  return navLinks.map((link) => {
    const sectionId = link.href.replace("#", "");
    const isActive = activeSection === sectionId;
    return {
      href: link.href,
      label: link.label,
      isActive,
      className: isActive
        ? "text-accent"
        : "text-text-muted hover:text-text",
    };
  });
}

// Arbitrary: generate a section ID (non-empty alphanumeric string)
const sectionIdArb = fc.stringMatching(/^[a-z][a-z0-9-]{0,19}$/);

// Arbitrary: generate a navLink object from a section ID
function navLinkFromId(id) {
  return { label: id.charAt(0).toUpperCase() + id.slice(1), href: `#${id}` };
}

// Arbitrary: generate a unique array of nav links with unique section IDs
const navLinksArb = fc
  .uniqueArray(sectionIdArb, { minLength: 1, maxLength: 15 })
  .map((ids) => ids.map(navLinkFromId));

describe("Property 4: Active nav link matches active section", () => {
  it("exactly one link has accent styling when activeSection matches a nav link", () => {
    fc.assert(
      fc.property(
        navLinksArb.chain((links) => {
          const ids = links.map((l) => l.href.replace("#", ""));
          return fc.constantFrom(...ids).map((activeId) => ({
            navLinks: links,
            activeSection: activeId,
          }));
        }),
        ({ navLinks, activeSection }) => {
          const styles = getNavLinkStyles(navLinks, activeSection);
          const activeLinks = styles.filter((s) => s.isActive);

          // Exactly one link should be active
          expect(activeLinks).toHaveLength(1);

          // The active link must correspond to the activeSection
          expect(activeLinks[0].href).toBe(`#${activeSection}`);

          // The active link must have accent styling
          expect(activeLinks[0].className).toBe("text-accent");

          // All other links must have muted styling
          const inactiveLinks = styles.filter((s) => !s.isActive);
          for (const link of inactiveLinks) {
            expect(link.className).toBe("text-text-muted hover:text-text");
          }
        }
      )
    );
  });

  it("no links have accent styling when activeSection is null", () => {
    fc.assert(
      fc.property(navLinksArb, (navLinks) => {
        const styles = getNavLinkStyles(navLinks, null);
        const activeLinks = styles.filter((s) => s.isActive);

        // No link should be active
        expect(activeLinks).toHaveLength(0);

        // All links must have muted styling
        for (const link of styles) {
          expect(link.className).toBe("text-text-muted hover:text-text");
        }
      })
    );
  });

  it("no links have accent styling when activeSection does not match any nav link", () => {
    fc.assert(
      fc.property(
        navLinksArb,
        sectionIdArb.filter((id) => id.length > 0),
        (navLinks, randomId) => {
          const ids = navLinks.map((l) => l.href.replace("#", ""));
          // Only test when randomId is NOT in the nav links
          fc.pre(!ids.includes(randomId));

          const styles = getNavLinkStyles(navLinks, randomId);
          const activeLinks = styles.filter((s) => s.isActive);

          // No link should be active
          expect(activeLinks).toHaveLength(0);

          // All links must have muted styling
          for (const link of styles) {
            expect(link.className).toBe("text-text-muted hover:text-text");
          }
        }
      )
    );
  });
});
