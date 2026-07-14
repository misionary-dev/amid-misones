"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          name="name"
          required
          placeholder="Nombre Completo"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amid-blue focus:ring-2 focus:ring-amid-blue/20 outline-none transition-all text-sm"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          required
          placeholder="Correo Electrónico"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amid-blue focus:ring-2 focus:ring-amid-blue/20 outline-none transition-all text-sm"
        />
      </div>
      <div>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Mensaje"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amid-blue focus:ring-2 focus:ring-amid-blue/20 outline-none transition-all text-sm resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto px-8 py-3 bg-amid-blue text-white font-semibold rounded-lg hover:bg-amid-navy-light transition-colors disabled:opacity-50"
      >
        {status === "sending" ? "Enviando..." : "Enviar Mensaje"}
      </button>
      {status === "sent" && (
        <p className="text-green-600 text-sm">Mensaje enviado correctamente.</p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-sm">Error al enviar. Intente nuevamente.</p>
      )}
    </form>
  );
}
