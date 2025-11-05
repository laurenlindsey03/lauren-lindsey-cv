"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Resume } from "../../../types/resume";
import resumeJson from "@/app/resume.json";

const resume = resumeJson as unknown as Resume;

export default function Footer() {
  const pathname = usePathname();
  const { linkedin } = resume.contact;

  return (
    <footer className="site-footer">
      <p>
        <i className="fa-regular fa-copyright" aria-hidden="true"></i>
        {' '}
        <Link href="/contact">Lauren Lindsey</Link>
        {' '}
        <Link href={linkedin} target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
          <span className="sr-only">LinkedIn Profile</span>
        </Link>
      </p>
    </footer>
  );
}
