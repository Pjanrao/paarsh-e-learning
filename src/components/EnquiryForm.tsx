"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

interface EnquiryFormProps {
  courseTitle: string;
  onSuccess?: () => void;
}

export default function EnquiryForm({
  courseTitle,
  onSuccess,
}: EnquiryFormProps) {  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_ENQUIRY_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

     toast({
  title: "Enquiry Sent ✅",
  description: "Our team will contact you shortly.",
  
});
formRef.current?.reset();


onSuccess?.();


      formRef.current?.reset();
    } catch (err) {
      console.error("EmailJS Error:", err);

      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Failed to send enquiry. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-secondary/60 rounded-2xl p-6 md:p-8 shadow-sm border border-border">
      <h3 className="text-xl font-headline font-semibold">
        Enquire Now
      </h3>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-6 space-y-4"
      >
        {/* COURSE NAME */}
        <input type="hidden" name="course_name" value={courseTitle} />

        {/* NAME */}
        <div>
          <label className="text-sm font-medium">Student Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your full name"
            className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="text-sm font-medium">Email Address</label>
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm"
          />
        </div>

        {/* PHONE */}
        <div>
          <label className="text-sm font-medium">Phone Number</label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="+91 XXXXX XXXXX"
            className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm"
          />
        </div>

        {/* COLLEGE */}
        <div>
          <label className="text-sm font-medium">College Name</label>
          <input
            type="text"
            name="college"
            placeholder="Your college / university"
            className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm"
          />
        </div>

        {/* EDUCATION */}
        <div>
          <label className="text-sm font-medium">Highest Education</label>
          <select
            name="education"
            className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm"
          >
            <option>Diploma</option>
            <option>Bachelor's Degree</option>
            <option>Master's Degree</option>
            <option>Other</option>
          </select>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={loading}
          className="w-full mt-4 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition disabled:opacity-70"
        >
          {loading ? "Sending..." : "Send Enquiry"}
        </button>
      </form>
    </div>
  );
}
