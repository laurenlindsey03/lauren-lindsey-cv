import Nav from "../components/Nav";
import Footer from "../components/Footer";
import resumeData from "../resume.json";
import type { Resume } from "../../../types/resume";

const resume = resumeData as Resume;

export default function ContactPage() {
  const { contact } = resume;

  return (
    <main>
      <Nav name={resume.name} context="contact" />

      <div className="cards-container">
        <section className="content-card static-card contact-page">
          <h1 className="contact-heading">Contact</h1>

          <p className="contact-address">
            <span className="contact-line-item">{contact.address}</span>
            <span className="contact-sep"> • </span>
            <span className="contact-line-item">
              <a href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}>{contact.phone}</a>
            </span>
            <span className="contact-sep"> • </span>
            <span className="contact-line-item">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </span>
          </p>

          <form
          className="one-col contact-form"
          action="https://formsubmit.co/b53025360f1046feedf323dee640c5c7"
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://lauren-lindsey-cv.vercel.app/thank-you" />
          <input type="hidden" name="_subject" value="New contact form submission!" />
          
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" name="name" placeholder="name" required />

          <label htmlFor="email">Email:</label>
          <input id="email" type="email" name="email" placeholder="email address" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows={5} cols={30}></textarea>

          <button type="submit">Send</button>
        </form>
      </section>
      </div>

      <Footer />
    </main>
  );
}
