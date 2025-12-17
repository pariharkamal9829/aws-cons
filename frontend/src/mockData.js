// Mock data for AWS Consultancy website

export const companyInfo = {
  name: "AWS Partner X",
  tagline: "APN Partner Enablement AWS | Certification | Cloud Consulting",
  email: "info@awspartnerx.cloud",
  phone: "+91 98874 94512",
  address: "Jodhpur, Rajsthan, India"
};
// Add social links used in the UI to avoid runtime undefined errors
companyInfo.social = {
  linkedin: "https://www.linkedin.com/company/aws-partner-x/",
  twitter: "https://twitter.com/awscloudedge"
};

export const stats = [
  { label: "AWS Certified Professionals", value: 25, suffix: "+" },
  { label: "Clients Served", value: 30, suffix: "+" },
  { label: "Successful Certifications", value: 50, suffix: "+" },
  { label: "APN Partners Enabled", value: 15, suffix: "+" }
];

export const certifications = [
  // Foundational (2)
  {
    id: 1,
    name: "AWS Certified Cloud Practitioner",
    level: "Foundational",
    price: 7500,
    currency: "INR",
    badge: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
    description: "Showcase foundational knowledge of AWS cloud services and cloud computing"
  },
  {
    id: 2,
    name: "AWS Certified AI Practitioner",
    level: "Foundational",
    price: 7500,
    currency: "INR",
    badge: "https://images.credly.com/size/340x340/images/4d4693bb-530e-4bca-9327-de07f3aa2348/image.png",
    description: "Unlock new career possibilities with AI-focused AWS knowledge"
  },

  // Associate (5)
  {
    id: 3,
    name: "AWS Certified Machine Learning Engineer - Associate",
    level: "Associate",
    price: 11000,
    currency: "INR",
    badge: "https://images.credly.com/size/340x340/images/1a634b4e-3d6b-4a74-b118-c0dcb429e8d2/image.png",
    description: "Position yourself for in-demand technical ML roles"
  },
  {
    id: 4,
    name: "AWS Certified Solutions Architect - Associate",
    level: "Associate",
    price: 11000,
    currency: "INR",
    badge: "https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
    description: "Validate your technical knowledge and skills across the breadth of AWS services"
  },
  {
    id: 5,
    name: "AWS Certified Data Engineer - Associate",
    level: "Associate",
    price: 11000,
    currency: "INR",
    badge: "https://images.credly.com/size/340x340/images/e5c85d7f-4e50-431e-b5af-fa9d9b0596e7/image.png",
    description: "Design data models, manage data life cycles, and ensure data quality"
  },
  {
    id: 6,
    name: "AWS Certified CloudOps Engineer - Associate",
    level: "Associate",
    price: 11000,
    currency: "INR",
    badge: "https://images.credly.com/size/340x340/images/88a6405e-0f26-442a-95ed-f9b9db4c857e/blob",
    description: "Deploy, manage, and operate workloads on AWS"
  },
  {
    id: 7,
    name: "AWS Certified Developer - Associate",
    level: "Associate",
    price: 11000,
    currency: "INR",
    badge: "https://images.credly.com/size/340x340/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png",
    description: "Validate proficiency in developing AWS Cloud-based applications"
  },

  // Professional (3)
  {
    id: 8,
    name: "AWS Certified Generative AI Developer - Professional (Beta)",
    level: "Professional",
    price: 22000,
    currency: "INR",
    badge: "https://images.credly.com/size/340x340/images/52c6e5ac-9516-4944-a4df-e31b23c9bbf2/blob",
    description: "Build and deploy production-ready AI solutions using AWS services"
  },
  {
    id: 9,
    name: "AWS Certified DevOps Engineer - Professional",
    level: "Professional",
    price: 22000,
    currency: "INR",
    badge: "https://images.credly.com/size/340x340/images/bd31ef42-d460-493e-8503-39592aaf0458/image.png",
    description: "Showcase skills in bridging development and cloud operations"
  },
  {
    id: 10,
    name: "AWS Certified Solutions Architect - Professional",
    level: "Professional",
    price: 22000,
    currency: "INR",
    badge: "https://images.credly.com/size/340x340/images/2d84e428-9078-49b6-a804-13c15383d0de/image.png",
    description: "Showcase advanced skills in designing optimized AWS Cloud solutions"
  },

  // Specialty (3)
  {
    id: 11,
    name: "AWS Certified Machine Learning - Specialty",
    level: "Specialty",
    price: 22000,
    currency: "INR",
    badge: "https://images.credly.com/size/340x340/images/778bde6c-ad1c-4312-ac33-2fa40d50a147/image.png",
    description: "Validate skills in building and deploying ML models on AWS"
  },
  {
    id: 12,
    name: "AWS Certified Advanced Networking - Specialty",
    level: "Specialty",
    price: 22000,
    currency: "INR",
    badge: "https://images.credly.com/size/3400x3400/images/4d08274f-64c1-495e-986b-3143f51b1371/image.png",
    description: "Handle critical and complex networking on AWS"
  },
  {
    id: 13,
    name: "AWS Certified Security - Specialty",
    level: "Specialty",
    price: 22000,
    currency: "INR",
    badge: "https://images.credly.com/size/340x340/images/53acdae5-d69f-4dda-b650-d02ed7a50dd7/image.png",
    description: "Advanced skills in securing workloads and architectures on AWS"
  }
];

export const services = [
  {
    id: 1,
    title: "AWS Certification Vouchers",
    description: "Get official AWS certification exam vouchers at competitive prices",
    link: "/certifications"
  },
  {
    id: 2,
    title: "Exam Preparation Support",
    description: "Structured mentorship and exam readiness guidance",
    link: "/exam-prep"
  },
  {
    id: 3,
    title: "APN Partner Enablement",
    description: "Achieve AWS APN Partner status with our expert guidance",
    link: "/apn-enablement"
  }
];

export const examPrepFeatures = [
  {
    title: "Structured Mentorship",
    description: "One-on-one guidance from AWS certified professionals"
  },
  {
    title: "Exam Blueprint Guidance",
    description: "Comprehensive coverage of all exam topics and objectives"
  },
  {
    title: "Mock Tests & Readiness Checks",
    description: "Practice exams to assess your preparation level"
  },
  {
    title: "Last-Week Revision Strategy",
    description: "Focused revision plan for the final week before your exam"
  }
];

export const apnServices = [
  {
    title: "AWS APN Registration",
    description: "Complete assistance with AWS Partner Network registration process"
  },
  {
    title: "Advanced Tier Partner Readiness",
    description: "Strategic guidance to achieve and maintain Advanced Tier status"
  },
  {
    title: "Certification Mapping",
    description: "Map your team's certifications to APN requirements"
  },
  {
    title: "Partner Score Improvement",
    description: "Optimize your partner score for better visibility"
  },
  {
    title: "Audit & Readiness Consulting",
    description: "Comprehensive audits and readiness assessments"
  },
  {
    title: "Professional Resource Access",
    description: "Access to 20+ AWS Certified professionals for organizational alignment"
  }
];

export const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CTO, TechStart India",
    title: "Cloud Architect Engagement",
    rating: "5.0",
    funds: "20k",
    content: "AWS CloudEdge helped us achieve our APN Advanced Tier status in record time. Their expertise is unmatched."
  },
  {
    name: "Priya Sharma",
    role: "Cloud Architect",
    title: "Solutions Architect",
    rating: "5.0",
    funds: "8k",
    content: "The exam preparation support was excellent. Passed my Solutions Architect Professional on the first attempt!"
  },
  {
    name: "Amit Patel",
    role: "Engineering Manager",
    title: "DevOps and Migration",
    rating: "5.0",
    funds: "15k",
    content: "Professional service and deep AWS expertise. They truly understand partner enablement."
  },
  {
    name: "Sunita Rao",
    role: "Product Lead",
    title: "Serverless Migration",
    rating: "4.9",
    funds: "12k",
    content: "Helped us migrate to serverless on schedule and within budget. Great team."
  },
  {
    name: "Vikram Singh",
    role: "Head of IT",
    title: "Security Review",
    rating: "5.0",
    funds: "6k",
    content: "Thorough security assessment and remediation plan — highly recommended."
  },
  {
    name: "Leena Gupta",
    role: "Founder",
    title: "APN Enablement",
    rating: "5.0",
    funds: "25k",
    content: "Their APN enablement program helped us win strategic AWS opportunities."
  }
];
