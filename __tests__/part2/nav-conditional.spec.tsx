import { render, screen } from "@testing-library/react";
import Nav from "@/src/app/components/Nav";

describe("Part 2 – Nav conditional rendering via context prop", () => {
  it('context="home" shows "Contact {name}" linking to /contact', () => {
    render(<Nav name="Ada Lovelace" context="home" />);
    const link = screen.getByRole("link", { name: /contact ada lovelace/i });
    expect(link).toHaveAttribute("href", "/contact");
    expect(screen.queryByRole("link", { name: /about ada lovelace/i })).toBeNull();
  });

  it('context="contact" shows "About {name}" linking to /', () => {
    render(<Nav name="Ada Lovelace" context="contact" />);
    const link = screen.getByRole("link", { name: /about ada lovelace/i });
    expect(link).toHaveAttribute("href", "/");
    expect(screen.queryByRole("link", { name: /contact ada lovelace/i })).toBeNull();
  });
});
