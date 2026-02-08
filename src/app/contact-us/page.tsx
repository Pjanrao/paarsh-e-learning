"use client";

import emailjs from "emailjs-com";
import { useState, useRef } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactUsPage() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        toast({
          title: "Message sent ✅",
          description:
            "Thank you for contacting Paarsh E-Learning. We’ll get back to you soon.",
        });
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast({
          title: "Failed to send message ❌",
          description: "Please try again after some time.",
          variant: "destructive",
        });
      })
      .finally(() => setLoading(false));
  };

  return (
<div className="container mx-auto px-4 pt-8 pb-16 md:pt-10 md:pb-20">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">
          Contact Us
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Have questions? We'd love to hear from you. Reach out and we'll get back
          to you shortly.
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-12">
        {/* CONTACT FORM */}
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-headline font-bold">
              Get in Touch
            </CardTitle>
          </CardHeader>

          <CardContent>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground">
                  Name
                </label>
                <Input name="name" placeholder="Your Name" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground">
                  Contact Number
                </label>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Your Contact Number"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" disabled={loading} className="w-full">
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* CONTACT INFO */}
        <div className="space-y-8">
          <h2 className="text-3xl font-headline font-bold">
            Contact Information
          </h2>

          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Our Office</h3>
              <p className="text-muted-foreground">
                C-206, Wisteriaa Fortune, 
                <br />
                 near Bhumkar Chowk,
                <br />
                Bhumkar Das Gugre Rd,
                <br />
                Wakad, 411057
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Email Us</h3>
              <p className="text-muted-foreground">
                info@paarshelearning.com
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Call Us</h3>
              <p className="text-muted-foreground">
                +91 90752 01035 / +91 98600 98343
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// "use client";

// import emailjs from "emailjs-com";
// import { useState, useRef } from "react";

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { Mail, Phone, MapPin } from "lucide-react";

// export default function ContactUsPage() {
//   const [loading, setLoading] = useState(false);
//   const formRef = useRef<HTMLFormElement>(null);

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);

//     if (!formRef.current) return;

//     emailjs
//       .sendForm(
//         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
//         process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
//         formRef.current,
//         process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
//       )
//       .then(() => {
//         alert("Thank you for contacting Paarsh E-Learning! We'll get back to you soon ✅");
//         formRef.current?.reset();
//       })
//       .catch((error) => {
//         console.error("EmailJS Error:", error);
//         alert("Failed to send message ❌");
//       })
//       .finally(() => setLoading(false));
//   };

//   return (
//     <div className="container mx-auto px-4 py-16 md:py-24">
//       <div className="text-center max-w-3xl mx-auto">
//         <h1 className="text-4xl md:text-5xl font-headline font-bold">
//           Contact Us
//         </h1>
//         <p className="mt-4 text-lg text-muted-foreground">
//           Have questions? We'd love to hear from you. Reach out and we'll get back
//           to you shortly.
//         </p>
//       </div>

//       <div className="mt-16 grid md:grid-cols-2 gap-12">
//         {/* CONTACT FORM */}
//         <Card>
//           <CardHeader>
//             <CardTitle className="text-3xl font-headline font-bold">
//               Get in Touch
//             </CardTitle>
//           </CardHeader>

//           <CardContent>
//             <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
//               {/* NAME */}
//               <div>
//                 <label className="block text-sm font-medium text-foreground">
//                   Name
//                 </label>
//                 <Input
//                   name="name"
//                   type="text"
//                   placeholder="Your Name"
//                   required
//                 />
//               </div>

//               {/* EMAIL */}
//               <div>
//                 <label className="block text-sm font-medium text-foreground">
//                   Email
//                 </label>
//                 <Input
//                   name="email"
//                   type="email"
//                   placeholder="Your Email"
//                   required
//                 />
//               </div>

//               {/* PHONE NUMBER */}
//               <div>
//                 <label className="block text-sm font-medium text-foreground">
//                   Contact Number
//                 </label>
//                 <Input
//                   name="phone"
//                   type="tel"
//                   placeholder="Your Contact Number"
//                   required
//                 />
//               </div>

//               {/* MESSAGE */}
//               <div>
//                 <label className="block text-sm font-medium text-foreground">
//                   Message
//                 </label>
//                 <Textarea
//                   name="message"
//                   placeholder="Your Message"
//                   rows={5}
//                   required
//                 />
//               </div>

//               <Button type="submit" disabled={loading} className="w-full">
//                 {loading ? "Sending..." : "Send Message"}
//               </Button>
//             </form>
//           </CardContent>
//         </Card>

//         {/* CONTACT INFO */}
//         <div className="space-y-8">
//           <h2 className="text-3xl font-headline font-bold">
//             Contact Information
//           </h2>
//           <p className="text-muted-foreground">
//             Find us at our office or drop us a line through email or phone.
//           </p>

//           <div className="flex items-start gap-4">
//             <div className="bg-primary/10 p-3 rounded-full">
//               <MapPin className="h-6 w-6 text-primary" />
//             </div>
//             <div>
//               <h3 className="font-semibold text-lg">Our Office</h3>
//               <p className="text-muted-foreground">
//                 Office no 1, Bhakti Apartment,
//                 <br />
//                 Near Rasoi Hotel, Suchita Nagar,
//                 <br />
//                 Mumbai Naka,
//                 <br />
//                 Nashik 422001
//               </p>
//             </div>
//           </div>

//           <div className="flex items-start gap-4">
//             <div className="bg-primary/10 p-3 rounded-full">
//               <Mail className="h-6 w-6 text-primary" />
//             </div>
//             <div>
//               <h3 className="font-semibold text-lg">Email Us</h3>
//               <p className="text-muted-foreground">
//                 info@paarshelearning.com
//               </p>
//             </div>
//           </div>

//           <div className="flex items-start gap-4">
//             <div className="bg-primary/10 p-3 rounded-full">
//               <Phone className="h-6 w-6 text-primary" />
//             </div>
//             <div>
//               <h3 className="font-semibold text-lg">Call Us</h3>
//               <p className="text-muted-foreground">
//                 +91 90752 01035 / +91 98600 98343
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
