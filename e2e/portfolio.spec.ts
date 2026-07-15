import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("portfolio e2e", () => {
  test("home page loads with JEAN.OS branding", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("banner")).toContainText("JEAN.OS");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Jean Hernández",
    );
  });

  test("user can open a project case study", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "projects/" }).first().click();
    await page.getByRole("link", { name: /Caso de estudio/i }).first().click();
    await expect(page).toHaveURL(/\/projects\/(ziona|irumi)/);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("mobile menu opens and closes", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");

    const openMenu = page.getByRole("button", { name: "Abrir menú" });
    await expect(openMenu).toBeVisible();
    await openMenu.click({ force: true });
    await expect(page.getByRole("dialog", { name: "Navegación" })).toBeVisible();

    await page.getByRole("button", { name: "Cerrar menú" }).first().click({
      force: true,
    });
    await expect(page.getByRole("dialog", { name: "Navegación" })).toHaveCount(
      0,
    );
  });

  test("internal nav moves to the skills section", async ({ page }) => {
    await page.goto("/");
    await page
      .getByRole("navigation", { name: "Principal" })
      .getByRole("link", { name: "skills.json" })
      .click();
    await expect(page).toHaveURL(/#skills/);
    await expect(page.locator("#skills")).toBeVisible();
  });

  test("contact section shows public contact info", async ({ page }) => {
    await page.goto("/#contact");
    await expect(page.locator("#contact")).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Contact", exact: true }),
    ).toBeVisible();
    await expect(page.getByText("contact.json")).toBeVisible();
  });

  test("project pages load", async ({ page }) => {
    await page.goto("/projects/ziona");
    await expect(
      page.getByRole("heading", { level: 1, name: "Ziona" }),
    ).toBeVisible();
    await page.goto("/projects/irumi");
    await expect(
      page.getByRole("heading", { level: 1, name: "Irumi" }),
    ).toBeVisible();
  });

  test("home has no serious automated accessibility issues", async ({
    page,
  }) => {
    await page.goto("/");
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .analyze();

    const serious = results.violations.filter(
      (violation) =>
        violation.impact === "serious" || violation.impact === "critical",
    );

    expect(
      serious.map((item) => item.id),
      serious.map((item) => `${item.id}: ${item.help}`).join("\n"),
    ).toEqual([]);
  });
});
