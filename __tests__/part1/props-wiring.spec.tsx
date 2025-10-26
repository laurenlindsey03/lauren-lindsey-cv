import { render, screen, within } from "@testing-library/react";
import Home from "@/src/app/page";
import resumeData from "@/src/app/resume.json";

// Mock next/image so Jest can render <Image />
jest.mock("next/image", () => (props: any) => {
  // render a plain img with the same important props for assertions
  // eslint-disable-next-line @next/next/no-img-element
  return <img alt={props.alt} src={props.src} width={props.width} height={props.height} />;
});

const resume = resumeData as any;

describe("Part 1 – Home wires resume.json into child components", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("passes name + context to Nav (Contact link visible on home)", () => {
    // On home, Nav should render a link to /contact (from earlier requirement)
    const link = screen.getByRole("link", { name: new RegExp(`Contact\\s+${resume.name}`, "i") });
    expect(link).toHaveAttribute("href", "/contact");
  });

  it("Header uses name + tagline (and headshot alt matches name)", () => {
    // Name likely shows as a heading; tagline as text
    expect(screen.getByText(resume.tagline)).toBeInTheDocument();
    // If Header renders headshot via <Image>, our mock becomes <img alt=name />
    // (If your Header uses a different alt, update this accordingly.)
    const img = screen.getByRole("img", { name: new RegExp(resume.name, "i") });
    expect(img).toBeInTheDocument();
  });

  it("EducationList receives education and renders school", () => {
    // Scope to the 'Education' section
    const heading = screen.getByRole("heading", { name: /education/i, level: 2 });
    const section = (heading.closest("section") as HTMLElement) ?? document.body;
    expect(within(section).getByText(new RegExp(resume.education.school, "i"))).toBeInTheDocument();
  });

  it("Honors receives honors_and_awards and renders exactly that many <dt>", () => {
    const heading = screen.getByRole("heading", { name: /honors/i, level: 2 });
    const section = (heading.closest("section") as HTMLElement) ?? document.body;
    const dts = section.querySelectorAll("dt");
    expect(dts.length).toBe(resume.honors_and_awards.length);

    // spot-check first honor text
    expect(within(section).getByText(new RegExp(resume.honors_and_awards[0].honor, "i"))).toBeInTheDocument();
  });

  it("Skills receives skills and renders one <li> per skill", () => {
    const heading = screen.getByRole("heading", { name: /skills/i, level: 2 });
    const section = (heading.closest("section") as HTMLElement) ?? document.body;
    const items = within(section).getAllByRole("listitem");
    expect(items.length).toBe(resume.skills.length);

    // spot-check at least one skill text
    expect(within(section).getByText(new RegExp(resume.skills[0], "i"))).toBeInTheDocument();
  });

  it("Experience receives leadership_and_experience and renders one <dt> per item", () => {
    const heading = screen.getByRole("heading", { name: /experience/i, level: 2 });
    const section = (heading.closest("section") as HTMLElement) ?? document.body;
    const dts = section.querySelectorAll("dt");
    expect(dts.length).toBe(resume.leadership_and_experience.length);

    // spot-check first position text
    const first = resume.leadership_and_experience[0];
    expect(within(section).getByText(new RegExp(first.position, "i"))).toBeInTheDocument();
  });

  it("Projects receives projects, renders one article per project, and each project's bullets equal descr.length", () => {
    const heading = screen.getByRole("heading", { name: /projects/i, level: 2 });
    const section = (heading.closest("section") as HTMLElement) ?? document.body;

    // Assume each project is wrapped (article/section/div) containing its own <ul>
    // Count top-level project headings (h3) as a proxy for project items
    const projectHeadings = within(section).getAllByRole("heading", { level: 3 });
    expect(projectHeadings.length).toBe(resume.projects.length);

    // For each project, find its sibling/ancestor container and check li count
    resume.projects.forEach((p: any) => {
      const h3 = within(section).getByRole("heading", { name: new RegExp(p.title, "i"), level: 3 });
      const container = (h3.closest("article") || h3.parentElement) as HTMLElement;
      const ul = container?.querySelector("ul");
      expect(ul).toBeTruthy();
      const bullets = ul?.querySelectorAll("li") ?? [];
      expect(bullets.length).toBe(p.descr.length);
    });
  });

  it("Footer receives name + contact.linkedin; name links to /contact", () => {
    // The Footer name should link to /contact when on home
    const nameLink = screen.getByRole("link", { name: new RegExp(`^${resume.name}$`, "i") });
    expect(nameLink).toHaveAttribute("href", "/contact");

    // LinkedIn anchor should point to resume.contact.linkedin
    const linkedIn = screen.getByRole("link", { name: /linkedin/i });
    expect(linkedIn).toHaveAttribute("href", resume.contact.linkedin);
  });
});
