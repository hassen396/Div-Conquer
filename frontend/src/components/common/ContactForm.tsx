import React, { useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Thanks — I'll get back to you soon.");
        setForm({ name: "", email: "", message: "" });
      } else {
        const body = await res.json().catch(() => ({}));
        setStatus(body?.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("Unable to send message — please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="max-w-xl">
      <div className="grid grid-cols-1 gap-3">
        <label className="sr-only">Name</label>
        <input
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder="Your name"
          required
          className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
        />

        <label className="sr-only">Email</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={onChange}
          placeholder="you@domain.com"
          required
          className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
        />

        <label className="sr-only">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={onChange}
          placeholder="Tell me about your project..."
          required
          rows={6}
          className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
        />

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send message"}
          </button>

          {status && <p className="text-sm text-gray-700 dark:text-gray-200">{status}</p>}
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
