import { render, screen, within } from "@testing-library/react";
import Home from "@/src/app/page";
import resume from "@/src/app/resume.json";

describe("Part 1 – Dynamic lists render counts from JSON", () => {
  it("Skills count matches resume.json", async () => {
    render(<Home />);
    const heading = await screen.findByRole("heading", { name: /skills/i });
    const section = (heading.closest("section") as HTMLElement) ?? document.body;
    const items = within(section).getAllByRole("listitem");
    expect(items.length).toBe((resume as any).skills.length);
  });

  it("Honors count matches resume.json", async () => {
    render(<Home />);
    const heading = await screen.findByRole("heading", { name: /honors/i });
    const section = (heading.closest("section") as HTMLElement) ?? document.body;
    const dts = section.querySelectorAll("dt");
    expect(dts.length).toBe((resume as any).honors_and_awards.length);
  });

  it("Experience count matches resume.json", async () => {
    render(<Home />);
    const heading = await screen.findByRole("heading", { name: /leadership and experience/i });
    const section = (heading.closest("section") as HTMLElement) ?? document.body;
    const dts = section.querySelectorAll("dt");
    expect(dts.length).toBe((resume as any).leadership_and_experience.length);
  });

  it("Projects count and each project's bullet count match resume.json", async () => {
    render(<Home />);
    const heading = await screen.findByRole("heading", { name: /projects/i });
    const section = (heading.closest("section") as HTMLElement) ?? document.body;

    const projectTitles = within(section).getAllByRole("heading", { level: 3 });
    expect(projectTitles.length).toBe((resume as any).projects.length);

    const projects = (resume as any).projects as Array<{ title: string; descr: string[] }>;
    projects.forEach((p) => {
      const title = within(section).getByRole("heading", { name: p.title });
      const card = (title.parentElement as HTMLElement) ?? section;
      const ul = card.querySelector("ul");
      expect(ul).toBeTruthy();
      const bullets = ul?.querySelectorAll("li") ?? [];
      expect(bullets.length).toBe(p.descr.length);
    });
  });
});
