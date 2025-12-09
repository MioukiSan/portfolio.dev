import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, Loader2, CheckCircle, AlertTriangle } from "lucide-react";
import ig from "@/assets/ig.png";
import lk from "@/assets/linkdin.png";
import git from "@/assets/github.png";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    setIsError(false);

    // ❗ IMPORTANT: Replace these with your actual EmailJS credentials.
    // For better security, use environment variables.
    const serviceID = "_1";
    const templateID = "template_bwo8ua1";
    const publicKey = "-FF9uKf1-bNWiyRrb";

    emailjs
      .sendForm(serviceID, templateID, form.current, publicKey)
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setIsSuccess(true);
          e.target.reset(); // Reset form fields
        },
        (error) => {
          console.error("FAILED...", error.text);
          setIsError(true);
          setErrorMessage(
            "Failed to send message. Please try again later or contact me directly."
          );
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const socialLinks = [
    {
      name: "Github",
      logo: git,
      url: "https://github.com/MioukiSan",
    },
    {
      name: "LinkedIn",
      logo: lk,
      url: "https://www.linkedin.com/in/renz-norman-palma-373742279/",
    },
    {
      name: "Instagram",
      logo: ig,
      url: "https://www.instagram.com/mioukisan/",
    },
  ];
  return (
    <div className="justify-center mt-10 mb-5 mx-5">
      <h2 className="lg:text-2xl md:text-2xl font-extrabold text-lg pb-3">
        Contact Me
      </h2>
      <div className="border rounded-lg p-6 lg:ml-5">
        <p className="text-muted-foreground mb-4 italic">
          Have a question or want to work together? Drop me a message below!
        </p>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="from_name" className="text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              name="from_name"
              id="from_name"
              required
              className="w-full bg-input p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Your Name"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="from_email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="from_email"
              id="from_email"
              required
              className="w-full bg-input p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="your.email@example.com"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows="5"
              className="w-full bg-input p-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 p-2 bg-primary text-primary-foreground rounded-md font-semibold transition-colors hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <Loader2 className="animate-spin" />
            ) : (
              <Send size={18} />
            )}
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
        {isSuccess && (
          <div className="mt-4 flex items-center gap-2 text-green-600">
            <CheckCircle size={20} />
            <p>Message sent successfully! I'll get back to you soon.</p>
          </div>
        )}
        {isError && (
          <div className="mt-4 flex items-center gap-2 text-red-600">
            <AlertTriangle size={20} />
            <p>{errorMessage}</p>
          </div>
        )}
      </div>
      <div className="lg:ml-5 mt-3">
        <div className="flex flex-row gap-4">
          <div className="flex flex-col italic">
            <h3 className="text-lg font-semibold">Social Links:</h3>
            <h3 className="text-sm font-light">Find me here</h3>
          </div>
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2 border rounded-lg hover:bg-accent transition-colors"
            >
              <img src={social.logo} alt={social.name} className="w-6 h-6" />

              {/* Hide on small screens — show on md and up */}
              <span className="hidden md:inline">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
