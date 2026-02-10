"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    note: "",
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    const subject = `Contact from Livibe Website: ${fullName}`;
    const body = `Name: ${fullName}
Email: ${formData.email}
Organization: ${formData.organization}

Note:
${formData.note}`;

    const mailtoLink = `mailto:muan@livibe.co?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    // Optional: Reset form or show a message that email client is opening
    setStatus("success");
    setFormData({ firstName: "", lastName: "", email: "", organization: "", note: "" });
  };

  return (
    <div className="js-reveal mt-6 overflow-hidden rounded-2xl bg-gradient-to-br from-white/20 to-white/5 p-[1px]">
      <form onSubmit={handleSubmit} className="rounded-2xl bg-black/40 p-5 backdrop-blur-xl">
        <div className="grid gap-3">
          <div className="flex gap-3">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name"
              required
              className="w-1/2 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white/20"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name"
              required
              className="w-1/2 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white/20"
            />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white/20"
          />
          <input
            type="text"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            placeholder="Organization"
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white/20"
          />
          <textarea
            name="note"
            value={formData.note}
            onChange={handleChange}
            placeholder="Note"
            rows={4}
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white/20"
          />
          <div className="pt-2">
            <button
              type="submit"
              className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Submit
            </button>
          </div>
          {status === "success" && (
            <p className="text-center text-sm text-green-400">
              Opening your email client...
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-sm text-red-400">{errorMessage}</p>
          )}
        </div>
      </form>
    </div>
  );
}
