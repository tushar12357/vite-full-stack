import { Heart, XCircle, CheckCircle2 } from "lucide-react";
import type { SolutionData } from "./solutionDataTypes";
import uiScreenshot from "@/assets/solution/health/1.png";
import workflowImage from "@/assets/solution/health/2.png";
import tirado from "@/assets/solution/health/3.png";

export const healthcareData: SolutionData = {
  hero: {
    tag: "Industry • Healthcare",
    title: "Transform Patient Care with",
    titleHighlight: "AI Voice Agents",
    description: "Automate appointment scheduling, patient reminders, and follow-up care with HIPAA-compliant AI voice agents. Reduce no-shows by 80%, improve patient satisfaction, and free up staff to focus on care.",
    primaryButton: {
      text: "Start Free Trial",
      variant: "primary",
    },
    secondaryButton: {
      text: "See Healthcare Demo",
      variant: "secondary",
    },
  },
  stats: [
    { value: "80%", label: "reduction in no-shows" },
    { value: "24/7", label: "patient support" },
    { value: "HIPAA", label: "Compliant" },
    { value: "95%", label: "patient satisfaction" },
  ],
  problems: [
    {
      icon: XCircle,
      title: "High No-Show Rates",
      description: "30% of appointments are no-shows, wasting valuable provider time and resources.",
    },
    {
      icon: XCircle,
      title: "After-Hours Calls",
      description: "Patients call after hours for urgent questions, but staff isn't available.",
    },
    {
      icon: XCircle,
      title: "Manual Scheduling",
      description: "Receptionists spend hours on the phone coordinating appointments.",
    },
    {
      icon: XCircle,
      title: "Follow-Up Gaps",
      description: "Patients miss post-visit check-ins and medication reminders.",
    },
  ],
  solutions: [
    {
      icon: CheckCircle2,
      title: "Automated Reminders",
      description: "AI calls patients 24-48 hours before appointments to confirm",
    },
    {
      icon: CheckCircle2,
      title: "24/7 Patient Support",
      description: "Answer questions, schedule appointments, and provide information anytime",
    },
    {
      icon: CheckCircle2,
      title: "HIPAA Compliant",
      description: "Fully compliant with healthcare regulations and patient privacy laws",
    },
    {
      icon: CheckCircle2,
      title: "Post-Visit Follow-ups",
      description: "Automated check-ins and medication adherence reminders",
    },
  ],
  steps: [
    { number: "01", title: "Patient Calls In", description: "AI answers immediately, understands patient needs" },
    { number: "02", title: "Checks Availability", description: "Syncs with provider calendars and schedules" },
    { number: "03", title: "Books Appointment", description: "Confirms time, sends calendar invite" },
    { number: "04", title: "Sends Reminders", description: "Automated calls 24hr and 2hr before visit" },
    { number: "05", title: "Follow-Up Care", description: "Post-visit check-ins and medication reminders" },
  ],
  features: [
    { icon: "🏥", title: "Appointment Scheduling", description: "Book, reschedule, cancel appointments" },
    { icon: "📋", title: "Pre-Visit Screening", description: "Collect symptoms and medical history" },
    { icon: "💊", title: "Medication Reminders", description: "Automated prescription and refill reminders" },
    { icon: "📞", title: "Patient Triage", description: "Route urgent calls to on-call providers" },
    { icon: "🔒", title: "HIPAA Compliant", description: "Secure, encrypted patient data handling" },
    { icon: "📊", title: "Care Analytics", description: "Track patient engagement and outcomes" },
  ],
  problemSection: {
    title: "Healthcare Challenges",
    description: "Healthcare providers struggle with high no-show rates, after-hours patient needs, and administrative burden. Manual scheduling and follow-up processes consume valuable staff time that should be spent on patient care.",
  },
  solutionSection: {
    title: "CloserX for Healthcare",
    description: "AI-powered solutions built for healthcare providers",
  },
  howItWorks: {
    tag: "How It Works",
    title: "From Patient Call to Care Delivery",
    subtitle: "Streamlined healthcare workflow",
    steps: [
      { title: "Patient Calls In", description: "AI answers immediately, understands patient needs" },
      { title: "Checks Availability", description: "Syncs with provider calendars and schedules" },
      { title: "Books Appointment", description: "Confirms time, sends calendar invite" },
      { title: "Sends Reminders", description: "Automated calls 24hr and 2hr before visit" },
    ],
  },
  featuresSection: {
    title: "Features for Healthcare",
    description: "Everything you need to improve patient care and reduce administrative burden. HIPAA-compliant and designed for healthcare workflows.",
  },
  customerStorySection: {
    tag: "Success Story",
    title: "Regional Medical Center Results",
    stats: {
      left: {
        value: "30%",
        label: "no-show rate (before)",
      },
      right: {
        value: "6%",
        label: "no-show rate (with AI)",
      },
    },
    primaryButton: {
      text: "Start Free Trial",
    },
    secondaryButton: {
      text: "See Healthcare Demo",
    },
  },
  cta: {
    title: "Transform Patient Care Today",
    description: "Join healthcare providers improving patient outcomes with AI. HIPAA-compliant and ready to deploy.",
    buttonText: "Start Free Trial",
    disclaimer: "No credit card required • HIPAA compliant • Setup in 10 minutes",
  },
};

export const healthcareImages = {
  uiScreenshot,
  workflowImage,
  calendar: uiScreenshot,
  calendar1: workflowImage,
  tirado,
};

