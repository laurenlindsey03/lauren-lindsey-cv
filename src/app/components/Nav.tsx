"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavProps = { name?: string; context?: "home" | "contact" };



/* pass a prop to indicate whether to render the link to Contact or About */
export default function Nav({ name, context }: NavProps): JSX.Element {
    const pathname = usePathname();
    const ctx = context ?? (pathname?.startsWith("/contact") ? "contact" : "home");

    return (
        <nav className="site-nav" aria-label="Site navigation">
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="#projects">Projects</Link></li>
                <li><Link href="#experience">Experience</Link></li>
                <li>
                    {ctx === "home" ? (
                        <Link href="/contact">{`Contact ${name ?? ""}`.trim()}</Link>
                    ) : (
                        <Link href="/">{`About ${name ?? ""}`.trim()}</Link>
                    )}
                </li>
            </ul>
        </nav>
    );
}
