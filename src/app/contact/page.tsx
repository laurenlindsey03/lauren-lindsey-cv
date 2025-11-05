"use client";

import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import resumeData from "../resume.json";
import type { Resume } from "../../../types/resume";

const resume = resumeData as Resume;

export default function ContactPage(): JSX.Element {
  const { contact } = resume;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // For this demo just clear the form and show a simple message.
    // In a real site you'd send this to an API or form service.
    setName("");
    setEmail("");
    setMessage("");
    alert("Thanks — your message was submitted (demo)");
  }

  return (
    <main>
      <Nav name={resume.name} context="contact" />

      <section className="contact-page">
        <h1 className="contact-heading">Contact</h1>

        <div className="contact-address">
          <p>{contact.address}</p>
          <p>
            <a href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}>{contact.phone}</a>
          </p>
          <p>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
          {contact.linkedin ? (
            <p>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
          ) : null}
        </div>

  <form className="contact-form" onSubmit={handleSubmit} method="POST" action={`https://formsubmit.co/${contact.email}`}>
          <label>
            Name
            <input value={name} onChange={(e) => setName(e.target.value)} required />
          </label>

          <label>
            Email
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>

          <label>
            Message
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={6} required />
          </label>

          <button type="submit">Send</button>
        </form>
      </section>

      <Footer />
    </main>
  );
}
