import { render, screen } from "@testing-library/react";
import Home from "@/src/app/page";

describe("Part 1 – Home page", () => {
  it("renders name as h1 from resume.json", async () => {
    render(<Home />);
    const h1 = await screen.findByRole("heading", { level: 1 });
    expect(h1).toBeInTheDocument();
    expect(h1.textContent?.trim()).not.toBe("");
  });

  it("renders Projects with at least one project title as h3", async () => {
    render(<Home />);
    const projectHeadings = await screen.findAllByRole("heading", { level: 3 });
    expect(projectHeadings.length).toBeGreaterThan(0);
  });
});
