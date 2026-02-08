"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SyllabusModal({
  open,
  onClose,
  slug,
}: {
  open: boolean;
  onClose: () => void;
  slug: string;
}) {
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID!,
        {
          name,
          email,
          phone: `+${phone}`,
          course: slug,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      window.open(`/syllabus/${slug}.pdf`, "_blank");
      onClose();
    } catch (err) {
      alert("Failed to send details. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <div className="bg-background w-full max-w-md rounded-xl p-6 relative">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold text-center mb-6">
          Course Syllabus
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <Input name="name" placeholder="Full Name" required />
          <Input name="email" type="email" placeholder="Email Address" required />

          {/* 🌍 ALL COUNTRIES PHONE INPUT */}
          <PhoneInput
            country={"in"}
            value={phone}
            onChange={setPhone}
            inputStyle={{
              width: "100%",
              height: "42px",
            }}
            inputProps={{
              required: true,
            }}
          />

         <label className="flex items-start gap-2 text-sm">
  <input
    type="checkbox"
    defaultChecked
    required
    className="accent-teal-600 mt-1"
  />

  <span className="leading-snug">
    By providing your contact details, you agree to our{" "}
    <span className="text-teal-600 cursor-pointer underline">
      Privacy Policy
    </span>
  </span>
</label>


          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-600 hover:bg-teal-700"
          >
            {loading ? "Sending..." : "Download Syllabus"}
          </Button>

        </form>
      </div>
    </div>
  );
}
