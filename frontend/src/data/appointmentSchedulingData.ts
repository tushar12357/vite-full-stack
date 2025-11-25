import { Calendar, XCircle, CheckCircle2 } from "lucide-react";
import type { SolutionData } from "./solutionDataTypes";
import uiScreenshot from "@/assets/image copy.png";
import workflowImage from "@/assets/image.png";
import calendar from "@/assets/solution/appointment/1.png";
import calendar1 from "@/assets/solution/appointment/2.png";
import tirado from "@/assets/solution/appointment/3.jpg";

export const appointmentSchedulingData: SolutionData = {
  hero: {
    tag: "Use Case • Scheduling",
    title: "Fill Your Calendar",
    titleHighlight: "While You Sleep",
    description: "AI agents call prospects, check availability, and book appointments directly into your calendar. No back-and-forth. No missed opportunities. Just a full calendar of confirmed appointments with automated reminders and 85% show-up rates.",
    primaryButton: {
      text: "Start Free Trial",
      variant: "primary",
    },
    secondaryButton: {
      text: "See Scheduling Demo",
      variant: "secondary",
    },
  },
  stats: [
    { value: "500+", label: "appointments booked daily" },
    { value: "85%", label: "show-up rate" },
    { value: "Zero", label: "scheduling conflicts" },
    { value: "24/7", label: "booking capability" },
  ],
  problems: [
    {
      icon: XCircle,
      title: "Email Tennis",
      description: "5+ emails to find one meeting time",
    },
    {
      icon: XCircle,
      title: "No-Shows",
      description: "30% of appointments are no-shows",
    },
    {
      icon: XCircle,
      title: "Time Zones",
      description: "Scheduling across time zones is a nightmare",
    },
    {
      icon: XCircle,
      title: "Manual Work",
      description: "Admin spends 10+ hours/week scheduling",
    },
  ],
  solutions: [
    {
      icon: CheckCircle2,
      title: "One-Call Booking",
      description: "AI finds time, confirms, books—done in 2 minutes",
    },
    {
      icon: CheckCircle2,
      title: "Smart Reminders",
      description: "Automated SMS/email reminders reduce no-shows 80%",
    },
    {
      icon: CheckCircle2,
      title: "Global Scheduling",
      description: "Handles all time zones automatically",
    },
    {
      icon: CheckCircle2,
      title: "Zero Admin Time",
      description: "Fully automated. Your team focuses on meetings, not booking",
    },
  ],
  steps: [
    { number: "01", title: "AI Calls Prospect", description: "Initiates outbound call or answers inbound request" },
    { number: "02", title: "Checks Your Calendar", description: "Syncs with Google, Outlook, or any calendar system" },
    { number: "03", title: "Offers Available Times", description: "Presents options based on your availability" },
    { number: "04", title: "Books & Confirms", description: "Adds to calendar and sends confirmation" },
    { number: "05", title: "Sends Reminders", description: "Automatic reminders 24hr, 2hr, 30min before" },
    { number: "06", title: "Updates on Changes", description: "Handles cancellations and rescheduling automatically" },
  ],
  features: [
    { icon: "📅", title: "Calendar Integration", description: "Google, Outlook, iCal" },
    { icon: "🔄", title: "Automatic Rescheduling", description: "Handles cancellations" },
    { icon: "⏰", title: "Smart Reminders", description: "24hr, 2hr, 30min before" },
    { icon: "🎯", title: "Qualification Questions", description: "Pre-qualify before booking" },
    { icon: "🌍", title: "Time Zone Detection", description: "Automatic conversion" },
    { icon: "📊", title: "Booking Analytics", description: "Track conversion rates" },
  ],
  problemSection: {
    title: "The Scheduling Challenge",
    description: "Traditional scheduling wastes hours of administrative time, creates friction in the sales process, and results in missed appointments and lost revenue.",
  },
  solutionSection: {
    title: "How CloserX Solves It",
    description: "Automated appointment scheduling that just works",
  },
  howItWorks: {
    tag: "How It Works",
    title: "From First Contact to Confirmed Appointment",
    subtitle: "Simple automated process",
    steps: [
      { title: "AI Calls Prospect", description: "Initiates outbound call or answers inbound request" },
      { title: "Checks Your Calendar", description: "Syncs with Google, Outlook, or any calendar system" },
      { title: "Offers Available Times", description: "Presents options based on your availability" },
      { title: "Books & Confirms", description: "Adds to calendar and sends confirmation" },
    ],
  },
  featuresSection: {
    title: "Scheduling Features",
    description: "Everything you need to automate your calendar",
  },
  customerStorySection: {
    tag: "Success Story",
    title: "German Terado: Smooth Onboarding Experience",
    testimonial: "They've been helping me out throughout the entire process, throughout my entire onboarding and made it very easy and smooth.",
    author: "German Terado",
    company: "Business Owner",
    stats: {
      left: {
        value: "3 days",
        label: "dedicated support",
      },
      right: {
        value: "100%",
        label: "satisfaction",
      },
    },
    primaryButton: {
      text: "Start Free Trial",
    },
    secondaryButton: {
      text: "See Scheduling Demo",
    },
  },
  cta: {
    title: "Book Your First 100 Appointments Free",
    description: "Start 14-day trial • No credit card required",
    buttonText: "Start Free Trial",
    disclaimer: "No credit card required • Setup in 10 minutes",
  },
};

export const appointmentSchedulingImages = {
  uiScreenshot,
  workflowImage,
  calendar,
  calendar1,
  tirado,
};

