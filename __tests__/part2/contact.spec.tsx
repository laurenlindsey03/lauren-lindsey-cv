import { render, screen } from "@testing-library/react";
import ContactPage from "@/src/app/contact/page";

describe("Part 2 – Contact page", () => {
  it("Nav shows About link to /", async () => {
    render(<ContactPage />);
    const link = await screen.findByRole("link", { name: /about/i });
    expect(link).toHaveAttribute("href", "/");
  });

  it("renders a POST form to formsubmit.co with Name, Email, Message", async () => {
    render(<ContactPage />);
    const form = document.querySelector("form");
    expect(form).toBeTruthy();
    expect(form?.getAttribute("method")?.toLowerCase()).toBe("post");
    expect(form?.getAttribute("action")).toMatch(/formsubmit\.co/);

    expect(await screen.findByRole("textbox", { name: /name/i })).toBeInTheDocument();
    expect(await screen.findByRole("textbox", { name: /email/i })).toBeInTheDocument();
    const textboxes = await screen.findAllByRole("textbox");
    expect(textboxes.length).toBeGreaterThanOrEqual(2);
  });
});
