import { Course } from "./types";

export const machineLearningCourse: Course = {
  slug: "machine-learning",
  title: "Machine Learning",
  fee: "45,000",

  shortDescription:
    "Learn Machine Learning from fundamentals to advanced algorithms, covering data preprocessing, supervised and unsupervised learning, model evaluation, and real-world ML projects using Python.",

  overview: [
    "This Machine Learning course provides a comprehensive introduction to the concepts, algorithms, and practical techniques used to build intelligent data-driven systems.",
    "Learners will gain hands-on experience with Python, core ML libraries, data preprocessing, regression, classification, clustering, dimensionality reduction, and ensemble methods.",
    "The course emphasizes real-world datasets, model evaluation, ethical considerations, and deployment basics, preparing learners for ML, data science, and AI-focused roles."
  ],

  duration: "4–5 Months",

  benefits: [
    {
      title: "Strong ML Foundations",
      description:
        "Build a solid understanding of machine learning concepts, algorithms, and workflows."
    },
    {
      title: "Hands-on Python & ML Libraries",
      description:
        "Work with NumPy, Pandas, Matplotlib, and Scikit-learn for ML development."
    },
    {
      title: "Real-World ML Problem Solving",
      description:
        "Apply ML techniques to real datasets and case studies."
    },
    {
      title: "Career-Oriented Skill Development",
      description:
        "Prepare for roles in machine learning, data science, and analytics."
    }
  ],

  whyJoin: [
    {
      title: "Beginner to Intermediate Learning Path",
      description:
        "Start with ML basics and progress to advanced algorithms and ensemble methods."
    },
    {
      title: "Math + Practical Balance",
      description:
        "Understand the mathematics behind ML while focusing on practical implementation."
    },
    {
      title: "Industry-Relevant Techniques",
      description:
        "Learn algorithms widely used in real-world ML systems."
    },
    {
      title: "Project-Based Learning",
      description:
        "Reinforce concepts through hands-on projects and case studies."
    },
    {
      title: "Ethics & Responsible ML",
      description:
        "Understand bias, fairness, and challenges in deploying ML systems."
    },
    {
      title: "ML Deployment Awareness",
      description:
        "Gain exposure to model saving, deployment basics, and MLOps concepts."
    }
  ],

  syllabus: [
    {
      title: "Introduction to Machine Learning",
      topics: [
        "What is machine learning and its applications",
        "Types of learning: supervised and unsupervised",
        "Brief introduction to reinforcement learning",
        "Role of machine learning in AI and data science",
        "Industry applications of machine learning"
      ]
    }
  ],

  cardImage: "/machine-learning.png",

  /* =========================
     ✅ SEO OPTIMIZATION START
  ========================== */

  metaTitle:
    "Machine Learning Course in India | Python ML Training & Certification",

  metaDescription:
    "Enroll in the Machine Learning Course at Paarshe Learning and master Python, Scikit-learn, regression, classification, clustering, and model deployment. Hands-on ML training with real-world projects and certification.",

  keywords: [
    "Machine Learning Course",
    "Machine Learning Training in India",
    "Python Machine Learning Course",
    "ML Certification Course",
    "Data Science and Machine Learning",
    "Supervised Learning Course",
    "Unsupervised Learning Training",
    "Scikit Learn Course",
    "AI and ML Course",
    "Machine Learning with Python",
    "ML Course with Projects",
    "Data Science Institute in India",
    "ML Training Institute",
    "Artificial Intelligence Course",
    "Machine Learning Classes"
  ],

  canonicalUrl:
    "https://paarshelearning.com/courses/machine-learning",

  ogImage: "/machine-learning.png",

  structuredData: {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Machine Learning Course",
    description:
      "Comprehensive Machine Learning training covering Python, supervised and unsupervised learning, model evaluation, and real-world ML projects.",
    provider: {
      "@type": "Organization",
      name: "Paarshe Learning",
      sameAs: "https://paarshelearning.com"
    },
    offers: {
      "@type": "Offer",
      price: "45000",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock"
    }
  }

};
