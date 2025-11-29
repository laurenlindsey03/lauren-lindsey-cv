"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavProps = { name?: string; context?: "home" | "contact" };

export default function Nav({ name, context }: NavProps) {
    const pathname = usePathname();
    const ctx = context ?? (pathname?.startsWith("/contact") ? "contact" : "home");

    return (
        <nav className="site-nav" aria-label="Site navigation">
            <div style={{ marginLeft: "auto" }}>
                {ctx === "home" ? (
                    <Link href="/contact">{`Contact ${name ?? ""}`.trim()}</Link>
                ) : (
                    <Link href="/">{`About ${name ?? ""}`.trim()}</Link>
                )}
            </div>
        </nav>
    );
}
