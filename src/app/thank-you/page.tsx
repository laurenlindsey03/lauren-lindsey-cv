import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import resumeData from "../resume.json";
import type { Resume } from "../../../types/resume";
import { JSX } from "react";

const resume = resumeData as Resume;

export default function ThankYouPage(): JSX.Element {
  return (
    <main>
      <Nav name={resume.name} context="contact" />

      <div className="cards-container">
        <section className="content-card static-card thank-you-page">
          <h1 className="thank-you-heading">Thank You!</h1>
          
          <p className="thank-you-message">
            Thank you for contacting Lauren Lindsey. Your message has been received, 
            and I will get back to you as soon as possible.
          </p>

          <Link href="/" className="home-button">
            Return to Home
          </Link>
        </section>
      </div>

      <Footer />
    </main>
  );
}
