import React, { useState, useEffect } from "react";
import {
  Shield,
  Code,
  Play,
  CheckCircle,
  Eye,
  Monitor,
  Lock,
  ArrowRight,
  Sparkles,
  Terminal,
  Users,
  Trophy,
  Brain,
  ChevronLeft,
  ChevronRight,
  Award,
  Zap,
  Globe,
} from "lucide-react";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);
  const [typingText, setTypingText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  /* ---------------- SLIDES ---------------- */
  const slides = [
    {
      id: 1,
      badge: "Next-Gen Coding Platform",
      title: ["Cheat-Proof", "Coding", "Contests"],
      titleColors: [
        "from-white via-blue-100 to-indigo-200",
        "text-white",
        "from-indigo-400 to-purple-400",
      ],
      subtitle:
        "Host secure coding competitions and conduct company assessments with our advanced AI-powered anti-cheating technology.",
      primaryButton: "Start Coding Now",
      secondaryButton: "Learn About Security",
      features: [
        { icon: Shield, text: "AI-Powered Proctoring", color: "text-blue-400" },
        { icon: Eye, text: "Live Monitoring", color: "text-green-400" },
        { icon: Monitor, text: "Screen Recording", color: "text-purple-400" },
        { icon: Lock, text: "Secure Environment", color: "text-orange-400" },
      ],
      stats: [
        { number: "99.9%", label: "Cheat Detection Rate", icon: Shield },
        { number: "10K+", label: "Secure Assessments", icon: CheckCircle },
        { number: "500+", label: "Companies Trust Us", icon: Code },
        { number: "24/7", label: "Monitoring", icon: Eye },
      ],
      bgGradient: "from-gray-900 via-blue-900 to-indigo-900",
    },
    {
      id: 2,
      badge: "Enterprise Solutions",
      title: ["Scale Your", "Technical", "Hiring"],
      titleColors: [
        "from-white via-green-100 to-emerald-200",
        "text-white",
        "from-emerald-400 to-teal-400",
      ],
      subtitle:
        "Streamline recruitment with coding assessments, analytics, and candidate insights.",
      primaryButton: "Get Enterprise Demo",
      secondaryButton: "View Pricing",
      features: [
        { icon: Users, text: "Team Collaboration", color: "text-emerald-400" },
        { icon: Brain, text: "AI Insights", color: "text-blue-400" },
        { icon: Trophy, text: "Custom Challenges", color: "text-yellow-400" },
        { icon: Award, text: "Skill Assessment", color: "text-purple-400" },
      ],
      stats: [
        { number: "50K+", label: "Developers Assessed", icon: Users },
        { number: "200+", label: "Enterprise Clients", icon: Trophy },
        { number: "95%", label: "Accuracy Rate", icon: Brain },
        { number: "60%", label: "Faster Hiring", icon: Zap },
      ],
      bgGradient: "from-gray-900 via-emerald-900 to-teal-900",
    },
    {
      id: 3,
      badge: "Global Community",
      title: ["Join The", "Coding", "Revolution"],
      titleColors: [
        "from-white via-purple-100 to-pink-200",
        "text-white",
        "from-purple-400 to-pink-400",
      ],
      subtitle:
        "Join global competitions and showcase your skills on a secure platform.",
      primaryButton: "Join Community",
      secondaryButton: "Explore Contests",
      features: [
        { icon: Globe, text: "Global Competitions", color: "text-purple-400" },
        { icon: Trophy, text: "Leaderboards", color: "text-yellow-400" },
        { icon: Users, text: "Community Support", color: "text-blue-400" },
        { icon: Award, text: "Skill Badges", color: "text-green-400" },
      ],
      stats: [
        { number: "100K+", label: "Active Developers", icon: Users },
        { number: "1M+", label: "Code Submissions", icon: Code },
        { number: "50+", label: "Countries", icon: Globe },
        { number: "24/7", label: "Support", icon: Shield },
      ],
      bgGradient: "from-gray-900 via-purple-900 to-pink-900",
    },
  ];

  /* ---------------- CODE SNIPPETS ---------------- */
  const codeSnippets = [
    {
      language: "Python",
      title: "Two Sum",
      code: [
        "def two_sum(nums, target):",
        "    seen = {}",
        "    for i, num in enumerate(nums):",
        "        if target - num in seen:",
        "            return [seen[target-num], i]",
        "        seen[num] = i",
      ],
    },
    {
      language: "JavaScript",
      title: "Binary Search",
      code: [
        "function binarySearch(arr, target) {",
        "  let l = 0, r = arr.length - 1;",
        "  while (l <= r) {",
        "    const m = Math.floor((l + r) / 2);",
        "    if (arr[m] === target) return m;",
        "    arr[m] < target ? l = m + 1 : r = m - 1;",
        "  }",
        "  return -1;",
        "}",
      ],
    },
    {
      language: "Java",
      title: "Quick Sort",
      code: [
        "public static void quickSort(int[] arr, int l, int r) {",
        "  if (l < r) {",
        "    int p = partition(arr, l, r);",
        "    quickSort(arr, l, p - 1);",
        "    quickSort(arr, p + 1, r);",
        "  }",
        "}",
      ],
    },
  ];

  const currentSlideData = slides[currentSlide];
  const currentSnippet = codeSnippets[currentCodeIndex];

  /* ---------------- AUTOPLAY FIX ---------------- */
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [autoPlay, slides.length]);

  /* ---------------- TYPING FIX ---------------- */
  useEffect(() => {
    const snippet = codeSnippets[currentCodeIndex];
    const line = snippet.code[currentLine] || "";

    if (typingText.length < line.length) {
      const t = setTimeout(() => {
        setTypingText(line.slice(0, typingText.length + 1));
      }, 60);
      return () => clearTimeout(t);
    }

    if (currentLine < snippet.code.length - 1) {
      const t = setTimeout(() => {
        setCurrentLine((p) => p + 1);
        setTypingText("");
      }, 800);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setCurrentCodeIndex((p) => (p + 1) % codeSnippets.length);
      setCurrentLine(0);
      setTypingText("");
    }, 2500);

    return () => clearTimeout(t);
  }, [typingText, currentLine, currentCodeIndex, codeSnippets]);

  /* ---------------- UI ---------------- */
  return (
    <div className={`min-h-screen bg-gradient-to-br ${currentSlideData.bgGradient}`}>
      {/* UI unchanged – your JSX stays exactly the same */}
    </div>
  );
};

export default HeroCarousel;
