// app/about/page.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image"

// ===== STATIC DATA =====
const stats = [
  { label: "Websites Developed", value: "2000+" },
  { label: "Apps Developed", value: "500+" },
  { label: "Years of Experience", value: "10+" },
]

const whoWeArePoints = [
  "Dynamic and open environment",
  "Client-focused approach",
  "Collaborative team culture",
  "Quality-driven execution",
]

const timeline = [
  { year: "2014", title: "Company Founded", desc: "Started our journey in digital business transformation." },
  { year: "2017", title: "Global Expansion", desc: "Served clients across multiple countries." },
  { year: "2020", title: "500+ Apps Delivered", desc: "Strengthened expertise in mobile solutions." },
  { year: "2024", title: "Trusted Digital Partner", desc: "Recognized as a reliable long-term technology partner." },
]

const team = [
  { name: "Vandana Abrol", role: "Co-Founder" },
  { name: "Harsh Abrol", role: "Co-Founder" },
]

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-800 ">

      {/* HERO SECTION */}
{/* ABOUT HERO – CORE SERVICES + STATS */}
<section className="py-10 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div>
      <p className="text-[#0b6fa4] font-medium mb-2">About Us</p>

      <h1 className="text-4xl font-bold mb-5">
        Welcome to <span className="text-[#398094]">Paarsh E-learning</span>
      </h1>

      <p className="text-slate-600 mb-4 leading-relaxed">
       Welcome to Paarsh E-Learning, your premier destination for online and offline learning across a wide range of courses. We are committed to providing high-quality education and empowering individuals to achieve their career goals. With our unique approach, we strive to make learning accessible, engaging, and effective.
      </p>

      <p className="text-slate-600 leading-relaxed mb-8">
        Founded in 2018 in Nashik, Paarsh E-Learning has quickly emerged as a leading platform for both online and offline education. Our mission is to bridge the gap between traditional learning methods and the evolving needs of modern learners. We understand that education should not be limited by geographical boundaries, and that's why we offer our courses through both online and offline channels.
      </p>

      {/* STATS ON LEFT */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-xl mt-8">

  <div className="border rounded-xl p-4 text-center hover:shadow-md transition">
    <p className="text-[#2f6f7a] font-bold text-2xl">5000+</p>
    <p className="text-sm text-slate-600">Students Trained</p>
  </div>

  <div className="border rounded-xl p-4 text-center hover:shadow-md transition">
    <p className="text-[#2f6f7a] font-bold text-2xl">25+</p>
    <p className="text-sm text-slate-600">Professional Courses</p>
  </div>

  <div className="border rounded-xl p-4 text-center hover:shadow-md transition">
    <p className="text-[#2f6f7a] font-bold text-2xl">10+</p>
    <p className="text-sm text-slate-600">Years of Teaching</p>
  </div>

</div>

    </div>

    {/* RIGHT CIRCLE */}
    <div className="relative flex justify-center group">

      {/* ROTATING BORDER */}
      <div className="absolute w-[480px] h-[480px] rounded-full border border-[#0b6fa4] animate-spin-slow group-hover:animate-none"></div>

      {/* INNER CIRCLE */}
      <div className="w-[400px] h-[400px] rounded-full bg-white shadow-xl flex flex-col items-center justify-center gap-6 z-10">

        <div className="text-center">
         <p className="text-[#2f6f7a] font-semibold">Our Offerings</p>
<h3 className="text-xl font-bold">What We Provide</h3>

        </div>

        <div className="grid grid-cols-2 gap-6 text-center">

        {[
  { icon: "🎓", title: "Career-Oriented Courses" },
  { icon: "🧑‍🏫", title: "Expert Trainers" },
  { icon: "🛠️", title: "Practical Learning" },
  { icon: "📈", title: "Placement Guidance" },
].map((item) => (
  <div key={item.title} className="group/service cursor-pointer">
    <div className="w-12 h-12 mx-auto rounded-full border border-[#2f6f7a] flex items-center justify-center text-[#2f6f7a] transition-all duration-300 group-hover/service:bg-[#2f6f7a] group-hover/service:text-white group-hover/service:scale-110">
      {item.icon}
    </div>
    <p className="mt-2 text-sm font-medium transition-colors group-hover/service:text-[#2f6f7a] text-center">
      {item.title}
    </p>
  </div>
))}


        </div>
      </div>
    </div>

  </div>
</section>





      {/* WHO WE ARE */}
      <section className="py-20 bg-white pb-2">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start">
{/* LEFT SECTION – LEARNING ECOSYSTEM */}
{/* LEFT – LEARNING ECOSYSTEM (FULL HEIGHT) */}
<div className="bg-[#f4f8f9] border border-slate-200 rounded-2xl p-12 h-full flex flex-col justify-center relative">

  {/* Decorative vertical line */}
  <div className="absolute left-8 top-12 bottom-12 w-[2px] bg-[#2f6f7a]/20"></div>

  <p className="text-sm uppercase tracking-wide text-[#2f6f7a] mb-2">
    Our Learning Ecosystem
  </p>

  <h3 className="text-2xl font-bold mb-10">
    From Beginner to Confident Learner
  </h3>

  <div className="space-y-8 pl-6">

    <div className="flex gap-5 items-start">
      <div className="w-10 h-10 rounded-full bg-[#2f6f7a] text-white flex items-center justify-center font-semibold z-10">
        1
      </div>
      <div>
        <h4 className="font-semibold text-lg">Explore Courses</h4>
        <p className="text-sm text-slate-600">
          Choose structured courses designed for clarity and progression
        </p>
      </div>
    </div>

    <div className="flex gap-5 items-start">
      <div className="w-10 h-10 rounded-full bg-[#2f6f7a] text-white flex items-center justify-center font-semibold z-10">
        2
      </div>
      <div>
        <h4 className="font-semibold text-lg">Learn with Guidance</h4>
        <p className="text-sm text-slate-600">
          Instructor-led sessions with clear explanations and support
        </p>
      </div>
    </div>

    <div className="flex gap-5 items-start">
      <div className="w-10 h-10 rounded-full bg-[#2f6f7a] text-white flex items-center justify-center font-semibold z-10">
        3
      </div>
      <div>
        <h4 className="font-semibold text-lg">Practice & Apply</h4>
        <p className="text-sm text-slate-600">
          Assignments, quizzes, and hands-on activities
        </p>
      </div>
    </div>

    <div className="flex gap-5 items-start">
      <div className="w-10 h-10 rounded-full bg-[#2f6f7a] text-white flex items-center justify-center font-semibold z-10">
        4
      </div>
      <div>
        <h4 className="font-semibold text-lg">Grow with Confidence</h4>
        <p className="text-sm text-slate-600">
          Build skills, confidence, and career direction
        </p>
      </div>
    </div>

  </div>
</div>


       
          {/* RIGHT CONTENT */}
          <div>
            <p className="text-[#0b6fa4] font-medium mb-2">Best Company</p>
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              At Paarsh E-learning, we believe in collaboration and innovation. Our team works together in a dynamic and open environment, where ideas flow freely. As the best IT Partner, we handle each project with care and attention, ensuring that we deliver the best results for our clients. We focus on clear communication and effective solutions to meet every challenge head-on.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 border rounded-lg p-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-full border border-[#0b6fa4] text-[#0b6fa4]">★</span>
                <span className="font-medium">Dynamic and open environment</span>
              </div>

              <div className="flex items-center gap-4 border rounded-lg p-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-full border border-[#0b6fa4] text-[#0b6fa4]">👤</span>
                <span className="font-medium">Client Focused</span>
              </div>

              <div className="flex items-center gap-4 border rounded-lg p-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-full border border-[#0b6fa4] text-[#0b6fa4]">📘</span>
                <span className="font-medium">Dynamic and open environment</span>
              </div>

              <div className="flex items-center gap-4 border rounded-lg p-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-full border border-[#0b6fa4] text-[#0b6fa4]">🎯</span>
                <span className="font-medium">Client-focused project execution</span>
              </div>
            </div>
          </div>
        </div>
      </section>

   {/* MISSION & VISION */}
<section className="py-28 bg-white">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div>
      <p className="text-[#0b6fa4] font-medium mb-3">
        Best Company
      </p>

      <h2 className="text-3xl font-bold mb-4">
        Our Mission
      </h2>
      <p className="text-slate-600 leading-relaxed mb-10 max-w-xl">
       1. Provide High-Quality Education: We strive to deliver exceptional educational experiences by 
          curating and developing courses that meet the highest standards of quality. Our aim is to equip
          learners with the knowledge, skills, and competencies they need to succeed in their chosen fields.</p>
           <p className="text-slate-600 leading-relaxed mb-10 max-w-xl">
         2. Foster Accessibility: We believe that education should be accessible to everyone, regardless of
          their geographical location, background, or circumstances. Through our online and offline platforms,
          we aim to remove barriers and provide flexible learning options that cater to diverse learning needs.</p>

      <h2 className="text-3xl font-bold mb-4">
        Our Vision
      </h2>
      <p className="text-slate-600 leading-relaxed max-w-xl">
        To empower individuals worldwide through accessible and innovative learning, transforming lives and fostering personal and professional growth.
      </p>
    </div>

   {/* RIGHT SIDE – E-LEARNING HIGHLIGHTS */}
<div className="bg-[#f4f8f9] rounded-2xl p-10 h-full flex flex-col justify-center">

  <p className="text-sm uppercase tracking-wide text-[#2f6f7a] mb-2">
    Our Approach
  </p>

  <h3 className="text-2xl font-bold mb-6">
    How We Empower Learners
  </h3>

  <div className="space-y-6">

    <div className="flex items-start gap-4">
      <div className="w-11 h-11 rounded-full bg-[#2f6f7a] text-white flex items-center justify-center text-lg">
        📚
      </div>
      <div>
        <h4 className="font-semibold">Structured Learning</h4>
        <p className="text-sm text-slate-600">
          Well-designed curriculum from basics to advanced concepts
        </p>
      </div>
    </div>

    <div className="flex items-start gap-4">
      <div className="w-11 h-11 rounded-full bg-[#2f6f7a] text-white flex items-center justify-center text-lg">
        🧑‍🏫
      </div>
      <div>
        <h4 className="font-semibold">Expert Instructors</h4>
        <p className="text-sm text-slate-600">
          Learn from trainers with real teaching and industry experience
        </p>
      </div>
    </div>

    <div className="flex items-start gap-4">
      <div className="w-11 h-11 rounded-full bg-[#2f6f7a] text-white flex items-center justify-center text-lg">
        🛠️
      </div>
      <div>
        <h4 className="font-semibold">Hands-On Practice</h4>
        <p className="text-sm text-slate-600">
          Assignments, practice sessions, and real-world examples
        </p>
      </div>
    </div>

    <div className="flex items-start gap-4">
      <div className="w-11 h-11 rounded-full bg-[#2f6f7a] text-white flex items-center justify-center text-lg">
        🎓
      </div>
      <div>
        <h4 className="font-semibold">Career Guidance</h4>
        <p className="text-sm text-slate-600">
          Resume support, interview preparation, and career mentoring
        </p>
      </div>
    </div>

  </div>
</div>

  </div>
</section>


{/* HOW LEARNING WORKS */}
<section className="py-24 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <p className="text-sm uppercase tracking-wide text-[#2f6f7a] mb-2">
        Our Teaching Method
      </p>
      <h2 className="text-3xl font-bold">
        How Learning Works at Paarsh
      </h2>
      <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
        We follow a structured, student-friendly approach that helps learners
        understand concepts clearly and apply them confidently.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="bg-white p-8 rounded-2xl border hover:shadow-md transition">
        <div className="w-12 h-12 rounded-full bg-[#2f6f7a] text-white flex items-center justify-center text-lg mb-5">
          📘
        </div>
        <h4 className="font-semibold mb-2">Concept Clarity</h4>
        <p className="text-sm text-slate-600">
          Strong focus on fundamentals with easy-to-understand explanations.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl border hover:shadow-md transition">
        <div className="w-12 h-12 rounded-full bg-[#2f6f7a] text-white flex items-center justify-center text-lg mb-5">
          🧑‍🏫
        </div>
        <h4 className="font-semibold mb-2">Expert Guidance</h4>
        <p className="text-sm text-slate-600">
          Learn from experienced instructors who guide you at every step.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl border hover:shadow-md transition">
        <div className="w-12 h-12 rounded-full bg-[#2f6f7a] text-white flex items-center justify-center text-lg mb-5">
          🛠️
        </div>
        <h4 className="font-semibold mb-2">Practice & Assessment</h4>
        <p className="text-sm text-slate-600">
          Assignments, quizzes, and exercises to reinforce learning.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl border hover:shadow-md transition">
        <div className="w-12 h-12 rounded-full bg-[#2f6f7a] text-white flex items-center justify-center text-lg mb-5">
          🎯
        </div>
        <h4 className="font-semibold mb-2">Career Readiness</h4>
        <p className="text-sm text-slate-600">
          Gain confidence, skills, and direction for academic and career growth.
        </p>
      </div>

    </div>
  </div>
</section>
{/* LEADERSHIP & VISIONARIES */}
<section className="py-24 bg-slate-50">
  <div className="max-w-6xl mx-auto px-6">

    {/* SECTION HEADER */}
    <div className="text-center mb-16">
      <p className="text-sm uppercase tracking-wide text-[#2f6f7a] mb-2">
        Our Leadership
      </p>
      <h2 className="text-3xl font-bold">
        Visionaries Behind <span className="text-[#2f6f7a]">Paarsh E-Learning</span>
      </h2>
    </div>

    {/* FOUNDER CARD */}
    <div className="bg-white rounded-2xl shadow-md p-10 flex flex-col md:flex-row gap-8 items-center mb-14">

      {/* IMAGE */}
      <div className="w-40 h-40 rounded-full border-4 border-[#6aa7b4] flex items-center justify-center bg-slate-100">
        <Image
          src="/founder.png"   // 🔁 replace with real image
          alt="Founder"
          width={160}
          height={160}
          className="rounded-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="text-center md:text-left">
        <h3 className="text-2xl font-bold">Kantilal B. Pagare</h3>
        <p className="text-[#2f6f7a] font-medium mb-4">
          Founder & Chairman
        </p>

        <blockquote className="italic text-slate-600 max-w-3xl border-l-4 border-[#2f6f7a] pl-5">
          “Every legacy begins with a vision and the courage to pursue it.
          This journey was never just about building a company—it was about
          creating lasting impact, inspiring growth, and leading with purpose.”
        </blockquote>
      </div>
    </div>

    {/* CEO & CFO */}
    <div className="grid md:grid-cols-2 gap-10">

      {/* CEO */}
      <div className="bg-white rounded-2xl shadow-md p-10 text-center">
        <div className="w-32 h-32 mx-auto rounded-full bg-slate-100 mb-6 overflow-hidden">
          <Image
            src="/CEO.jpeg"   // 🔁 replace
            alt="CEO"
            width={128}
            height={128}
            className="object-cover rounded-full"
          />
        </div>

        <h4 className="text-xl font-bold">Tushar Pagare</h4>
        <p className="text-[#2f6f7a] font-medium mb-4">
          Chief Executive Officer
        </p>

        <p className="italic text-slate-600">
          “A true leader doesn’t just guide—they inspire belief in a better
          future. As CEO, my purpose is to turn bold ideas into impact and lead
          with vision that uplifts everyone around us.”
        </p>
      </div>

      {/* CFO */}
      <div className="bg-white rounded-2xl shadow-md p-10 text-center">
        <div className="w-32 h-32 mx-auto rounded-full bg-slate-100 mb-6 overflow-hidden">
          <Image
            src="/CFO.jpeg"   // 🔁 replace
            alt="CFO"
            width={128}
            height={128}
            className="object-cover rounded-full"
          />
        </div>

        <h4 className="text-xl font-bold">Pratiksha Baviskar</h4>
        <p className="text-[#2f6f7a] font-medium mb-4">
          Chief Financial Officer
        </p>

        <p className="italic text-slate-600">
          “Behind every strong vision is a foundation of trust and foresight.
          As CFO, I turn numbers into strategy, ensuring every step we take is
          grounded, clear, and future-ready.”
        </p>
      </div>

    </div>
  </div>
</section>


{/* OUR BENEFITS */}
<section className="py-10 bg-white">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-3xl font-bold mb-8">
        Our <span className="text-[#2f6f7a]">Benefits</span>
      </h2>

      <ul className="space-y-5">
        <li className="flex items-start gap-4">
          <Check />
          <p className="text-slate-700 font-medium">
            Deliver quality education to learners with structured content
          </p>
        </li>

        <li className="flex items-start gap-4">
          <Check />
          <p className="text-slate-700 font-medium">
            Manage courses and track learner progress effectively
          </p>
        </li>

        <li className="flex items-start gap-4">
          <Check />
          <p className="text-slate-700 font-medium">
            Provide videos, documents, assignments, and useful resources
          </p>
        </li>

        <li className="flex items-start gap-4">
          <Check />
          <p className="text-slate-700 font-medium">
            Automatically issue course completion certificates
          </p>
        </li>

        <li className="flex items-start gap-4">
          <Check />
          <p className="text-slate-700 font-medium">
            Flexible learning plans designed for student success
          </p>
        </li>
      </ul>
    </div>

    {/* RIGHT ILLUSTRATION */}
    <div className="flex justify-center">
      <img
        src="/paarsh.webp"
        alt="E-learning benefits"
        className="w-full max-w-xl"
      />
    </div>

  </div>
</section>



      {/* TEAM */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#0b6fa4] font-medium text-center mb-2">The Team</p>
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Creative Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((m) => (
              <div key={m.name} className="text-center">
                <div className="w-40 h-40 mx-auto bg-slate-200 rounded-lg mb-4" />
                <h4 className="font-semibold">{m.name}</h4>
                <p className="text-sm text-slate-600">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

{/* WHY CHOOSE PAARSH E-LEARNING */}
<section className="py-24 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-3xl font-bold text-center mb-16">
      Empowering Learning with {" "}
      <span className="text-[#2f6f7a]">Paarsh E-Learning</span>
    </h2>

    <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">

      {/* LEFT */}
      <div className="space-y-8">
        <Feature text="We find new learning resources as students interact with information" />
        <Feature text="Our teaching emphasizes live, interactive learning sessions" />
        <Feature text="Downloadable learning videos for revision anytime" />
      </div>

      {/* RIGHT */}
      <div className="space-y-8">
        <Feature text="Collaborative learning with materials and ideas shared" />
        <Feature text="Industry-aligned and structured syllabus" />
        <Feature text="Well-designed slide sets for easy understanding" />
      </div>

    </div>

    {/* Bottom Highlight */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-16 flex justify-center"
    >
      <div className="flex items-center gap-4 px-10 py-4 border border-slate-200 rounded-full shadow-sm hover:shadow-md transition">
        <CheckIcon />
        <span className="font-semibold text-slate-700">
          100% Job Placement Assistance
        </span>
      </div>
    </motion.div>

  </div>
</section>

    </main>
  )
   function Feature({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="h-[90px] flex items-center gap-4 p-5 border border-slate-200 rounded-xl bg-white
                 hover:shadow-[0_0_20px_rgba(47,111,122,0.25)]
                 hover:border-[#2f6f7a] transition-all duration-300"
    >
      <CheckIcon />
      <p className="text-slate-700 font-medium leading-snug">
        {text}
      </p>
    </motion.div>
  );
}


function CheckIcon() {
  return (
    <div className="w-9 h-9 rounded-full bg-[#2f6f7a] text-white flex items-center justify-center flex-shrink-0">
      ✓
    </div>
  );
}

function Check() {
  return (
    <div className="w-8 h-8 rounded-full bg-[#2f6f7a]/10 text-[#2f6f7a] flex items-center justify-center flex-shrink-0">
      ✓
    </div>
  );
}

  
}
