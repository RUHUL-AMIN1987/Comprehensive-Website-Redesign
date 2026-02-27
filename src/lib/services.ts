import { Heart, Sun, Users, Briefcase, PawPrint, Stethoscope, Car, GraduationCap, Home, AlertTriangle, Shield } from "lucide-react";
import communityImg from "@/assets/community-activities.jpg";
import horseImg from "@/assets/horse-therapy.jpg";
import nurseImg from "@/assets/nurse-care.jpg";
import youthImg from "@/assets/youth-programs.jpg";
import transportImg from "@/assets/transportation.jpg";

export const services = [
  {
    slug: "respite-services",
    title: "Respite Services",
    icon: Heart,
    image: communityImg,
    shortDesc: "Temporary relief for caregivers while ensuring quality care for your loved ones.",
    fullDesc: "Our respite services offer temporary relief for caregivers, allowing them to take a break while ensuring their loved ones receive quality care and support.",
    benefits: [
      "Flexible scheduling — hourly, daily, or overnight care",
      "Trained, compassionate caregivers matched to individual needs",
      "In-home comfort for your loved one",
      "Peace of mind for the entire family",
    ],
    seoKeywords: "respite care Toledo, caregiver relief Ohio, temporary care services Northwest Ohio",
  },
  {
    slug: "adult-day-services",
    title: "Adult Day Services (A.M. & P.M.)",
    icon: Sun,
    image: communityImg,
    shortDesc: "Structured morning and afternoon programs with social engagement and therapeutic activities.",
    fullDesc: "We provide structured adult day services in the morning and afternoon. Our program is designed to offer social engagement, therapeutic activities, and a safe environment for adults.",
    benefits: [
      "Morning and afternoon sessions available",
      "Social engagement and therapeutic activities",
      "Safe, supervised environment with trained staff",
      "Nutritious meals and snacks included",
    ],
    seoKeywords: "adult day care Toledo, adult day services Northwest Ohio, daytime care programs",
  },
  {
    slug: "community-group-activities",
    title: "Community Group Activities",
    icon: Users,
    image: communityImg,
    shortDesc: "Inclusive group activities that promote social interaction and community ties.",
    fullDesc: "Join us for a range of community group activities that promote inclusion and social interaction. These activities are designed to enhance community ties and encourage participation.",
    benefits: [
      "Diverse activities for all abilities",
      "Fosters social connections and friendships",
      "Community outings and events",
      "Skill-building and recreational programs",
    ],
    seoKeywords: "community activities Toledo, group programs Ohio, social activities for adults",
  },
  {
    slug: "vocational-rehabilitation",
    title: "Vocational Rehabilitation",
    icon: Briefcase,
    image: communityImg,
    shortDesc: "Skills training and support to help individuals find and maintain employment.",
    fullDesc: "Our vocational rehabilitation services assist individuals in gaining the skills and support needed to find and maintain employment. We focus on personal strengths and career goals.",
    benefits: [
      "Personalized career assessments and goal setting",
      "Job skills training and resume building",
      "Employer partnerships and job placement assistance",
      "Ongoing support and coaching",
    ],
    seoKeywords: "vocational rehabilitation Toledo, job training Ohio, employment support services",
  },
  {
    slug: "horse-animal-interactions",
    title: "Horse & Animal Interactions",
    icon: PawPrint,
    image: horseImg,
    shortDesc: "Therapeutic animal interactions that promote emotional healing and personal development.",
    fullDesc: "Experience the therapeutic benefits of horse and animal interactions. These activities promote emotional healing and enhance personal development in a safe and nurturing environment.",
    benefits: [
      "Equine-assisted therapy with trained professionals",
      "Emotional regulation and confidence building",
      "Suitable for children and adults",
      "Safe, nurturing outdoor environment",
    ],
    seoKeywords: "equine therapy Toledo, animal therapy Ohio, horse interactions Northwest Ohio",
  },
  {
    slug: "cans-assessment",
    title: "Certified Assessment for Children (CANS)",
    icon: GraduationCap,
    image: youthImg,
    shortDesc: "Certified CANS assessments to identify and address each child's unique needs.",
    fullDesc: "We conduct certified assessments for children using the Child and Adolescent Needs and Strengths (CANS) tool. This ensures that each child's unique needs are identified and addressed promptly.",
    benefits: [
      "Certified CANS assessment professionals",
      "Comprehensive needs and strengths evaluation",
      "Individualized care planning",
      "Coordination with families and providers",
    ],
    seoKeywords: "CANS assessment Ohio, child assessment Toledo, youth needs evaluation",
  },
  {
    slug: "on-call-nurse-services",
    title: "On-Call Nurse Services",
    icon: Stethoscope,
    image: nurseImg,
    shortDesc: "Immediate medical support from trained nursing staff when you need it most.",
    fullDesc: "Our on-call nurse services provide immediate medical support when required. Our trained staff is available to address any medical concerns promptly and efficiently.",
    benefits: [
      "24/7 on-call availability",
      "Licensed, experienced nursing staff",
      "Rapid response for medical concerns",
      "Coordination with physicians and specialists",
    ],
    seoKeywords: "on-call nurse Toledo, nursing services Ohio, in-home nursing Northwest Ohio",
  },
  {
    slug: "group-home-children",
    title: "Group Home Services for Children",
    icon: Home,
    image: youthImg,
    shortDesc: "Safe, supportive living environments focused on children's growth and well-being.",
    fullDesc: "Our group home services offer a safe and supportive living environment for children. We focus on individual needs, personal growth, and overall well-being within a structured setting.",
    benefits: [
      "Safe, structured living environment",
      "Individualized care and development plans",
      "24/7 trained staff supervision",
      "Educational support and life skills training",
    ],
    seoKeywords: "group home children Toledo, youth residential care Ohio",
  },
  {
    slug: "emergency-respite-children",
    title: "Emergency Respite Placement for Children",
    icon: AlertTriangle,
    image: youthImg,
    shortDesc: "Immediate safe placement for children during crisis situations.",
    fullDesc: "We provide emergency respite placement for children in need of immediate support. Our program ensures a safe and nurturing environment during times of crisis.",
    benefits: [
      "Immediate placement availability",
      "Crisis-trained caregivers",
      "Safe, nurturing environment",
      "Coordination with families and agencies",
    ],
    seoKeywords: "emergency respite children Ohio, crisis placement Toledo",
  },
  {
    slug: "staff-training",
    title: "Staff Training (CPI & PFS)",
    icon: Shield,
    image: nurseImg,
    shortDesc: "CPI crisis prevention and PFS training for professional care staff.",
    fullDesc: "Our staff are trained in Crisis Prevention Institute (CPI) techniques to effectively manage challenging situations, ensuring safety and well-being. Additionally, our team is trained in Prevention (PFS) to provide immediate care and support when necessary.",
    benefits: [
      "Crisis Prevention Institute (CPI) certification",
      "Prevention First Strategies (PFS) training",
      "De-escalation techniques and safety protocols",
      "Ongoing professional development",
    ],
    seoKeywords: "CPI training Ohio, staff training Toledo, crisis prevention certification",
  },
  {
    slug: "non-medical-transportation",
    title: "Non-Medical Transportation Services",
    icon: Car,
    image: transportImg,
    shortDesc: "Safe, reliable transportation to appointments, activities, and events.",
    fullDesc: "Our non-medical transportation services offer safe and reliable transportation for individuals who need assistance getting to appointments, activities, or events. We ensure a comfortable journey with trained drivers who are dedicated to providing support and ensuring the well-being of our passengers.",
    benefits: [
      "Door-to-door service with trained drivers",
      "Wheelchair accessible vehicles available",
      "Appointments, activities, and community events",
      "Flexible scheduling and reliable pickups",
    ],
    seoKeywords: "non-medical transportation Toledo, ride services Ohio, accessible transport",
  },
];

export const youthServices = services.filter((s) =>
  ["cans-assessment", "group-home-children", "emergency-respite-children"].includes(s.slug)
);
