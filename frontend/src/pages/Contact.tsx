import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import ContactForm from "@/components/common/ContactForm";

const ContactPage: React.FC = () => {
  useDocumentTitle("Contact");

  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <header>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Contact
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Want to work together? Send me a message.
        </p>
      </header>

      <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Get in touch
          </h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Prefer email? hello@example.com
          </p>

          <div className="mt-6">
            <ContactForm />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Location
          </h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Remote — available for freelance and contract work.
          </p>

          <div className="mt-6 rounded-md border border-gray-200 bg-white/5 p-4 dark:border-gray-800">
            <h3 className="font-medium text-gray-900 dark:text-white">
              Services
            </h3>
            <ul className="mt-3 list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li>API design & implementation (.NET)</li>
              <li>Frontend architecture & interfaces (React)</li>
              <li>DevOps & deployments</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
