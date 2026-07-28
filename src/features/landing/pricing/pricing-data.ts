import {
  BrainCircuit,
  AppWindow,
  Compass,
  LayoutDashboard,
  Lock,
  Map,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

export const plans = [
  {
    id: "free",
    name: "Free",
    description: "Perfect for getting started with interview preparation.",
    price: "$0",
    period: "/forever",
    button: "Get Started",
    highlighted: false,
  },
  {
    id: "pro",
    name: "Pro",
    description: "Unlock everything AlgoForge has to offer.",
    price: "$9",
    period: "/month",
    button: "Upgrade to Pro",
    highlighted: true,
    badge: "Most Popular",
  },
];

export const comparisonFeatures = [
  {
    icon: AppWindow,
    title: "Chrome Extension",
    description: "Track every solved problem automatically.",
    free: true,
    pro: true,
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    description: "View your analytics and solving history.",
    free: true,
    pro: true,
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description: "Track progress across topics and difficulty.",
    free: true,
    pro: true,
  },
  {
    icon: BrainCircuit,
    title: "AI Report Analysis",
    description: "Generate AI insights after solving problems.",
    free: "1 Report / Problem",
    pro: "Unlimited",
  },
  {
    icon: Map,
    title: "Personalized Roadmaps",
    description: "AI-generated learning roadmap based on weaknesses.",
    free: {
      locked: true,
      label: "Preview Only",
    },
    pro: true,
  },
  {
    icon: Compass,
    title: "Teaching Mode",
    description: "Interactive hints that guide you without revealing answers.",
    free: {
      locked: true,
      label: "Pro Feature",
    },
    pro: true,
  },
  {
    icon: Target,
    title: "Future Premium Features",
    description: "Instant access to upcoming Pro releases.",
    free: {
      locked: true,
      label: "Locked",
    },
    pro: true,
  },
];

export const pricingFooter = [
  {
    icon: Sparkles,
    text: "Cancel anytime",
  },
  {
    icon: AppWindow,
    text: "Works with Chrome",
  },
  {
    icon: Lock,
    text: "Secure payments",
  },
];