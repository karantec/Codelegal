import { useState, useEffect } from "react";

const DetailedFeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: "ai-monitoring",
      icon: "🤖",
      title: "Advanced AI Monitoring",
      subtitle: "Real-time Behavioral Analysis",
      description:
        "Our cutting-edge AI algorithms continuously monitor candidate behavior throughout the assessment, detecting suspicious patterns, unusual mouse movements, and potential cheating attempts with 99.7% accuracy.",
      benefits: [
        "Real-time anomaly detection with machine learning",
        "Behavioral pattern analysis across 50+ data points",
        "Instant alerts for suspicious activities",
        "Comprehensive fraud scoring system",
        "Historical data comparison for accuracy",
      ],
      stats: [
        { label: "Detection Accuracy", value: "99.7%" },
        { label: "Response Time", value: "<100ms" },
        { label: "False Positives", value: "<0.3%" },
      ],
      gradient: "from-blue-500 to-cyan-500",
      bgIcon: "🔍",
    },
    {
      id: "live-proctoring",
      icon: "👁️",
      title: "Intelligent Live Proctoring",
      subtitle: "Human + AI Supervision",
      description:
        "Combine the reliability of human oversight with AI efficiency. Our certified proctors work alongside intelligent systems to ensure comprehensive monitoring without compromising candidate experience.",
      benefits: [
        "Certified professional proctors available 24/7",
        "AI-assisted focus on high-risk candidates",
        "Multi-camera angle monitoring",
        "Real-time intervention capabilities",
        "Detailed session recordings and reports",
      ],
      stats: [
        { label: "Proctor Response", value: "<30sec" },
        { label: "Session Coverage", value: "100%" },
        { label: "Intervention Rate", value: "2.1%" },
      ],
      gradient: "from-cyan-400 to-blue-500",
      bgIcon: "👥",
    },
    {
      id: "browser-security",
      icon: "🔒",
      title: "Fortress Browser Lockdown",
      subtitle: "Impenetrable Security Environment",
      description:
        "Transform any browser into a secure assessment environment. Our lockdown technology prevents access to external resources, applications, and communication channels while maintaining system performance.",
      benefits: [
        "Complete browser isolation and control",
        "Blocks copy-paste, screenshots, and recordings",
        "Prevents access to external websites and applications",
        "Disables developer tools and inspect elements",
        "Real-time system monitoring and alerts",
      ],
      stats: [
        { label: "Security Level", value: "Military Grade" },
        { label: "Bypass Attempts", value: "0%" },
        { label: "Performance Impact", value: "<5%" },
      ],
      gradient: "from-blue-600 to-indigo-600",
      bgIcon: "🛡️",
    },
    {
      id: "code-analysis",
      icon: "🧠",
      title: "Intelligent Code Analysis",
      subtitle: "Plagiarism & AI Detection",
      description:
        "State-of-the-art code analysis engine that detects plagiarism, AI-generated code, and suspicious coding patterns.",
      benefits: [
        "Advanced plagiarism detection algorithms",
        "AI-generated code identification",
        "Cross-platform code comparison",
        "Syntax and style pattern analysis",
        "Real-time similarity scoring",
      ],
      stats: [
        { label: "Code Database", value: "50M+" },
        { label: "Detection Speed", value: "<2sec" },
        { label: "Pattern Recognition", value: "95%+" },
      ],
      gradient: "from-slate-600 to-blue-600",
      bgIcon: "💻",
    },
    {
      id: "identity-verification",
      icon: "🆔",
      title: "Multi-Layer Identity Verification",
      subtitle: "Biometric Authentication",
      description:
        "Ensure the right person takes the assessment with facial recognition and document verification.",
      benefits: [
        "Government ID verification",
        "Facial recognition and liveness detection",
        "Continuous identity monitoring",
        "Biometric template matching",
        "Anti-spoofing protection",
      ],
      stats: [
        { label: "Verification Accuracy", value: "99.9%" },
        { label: "Processing Time", value: "<10sec" },
        { label: "Fraud Prevention", value: "100%" },
      ],
      gradient: "from-indigo-600 to-blue-700",
      bgIcon: "🔐",
    },
    {
      id: "time-management",
      icon: "⏰",
      title: "Precision Time Management",
      subtitle: "Anti-Manipulation Controls",
      description:
        "Advanced time tracking and management system with built-in anti-manipulation measures.",
      benefits: [
        "Atomic clock synchronization",
        "Tamper-proof time tracking",
        "Automatic session pause/resume",
        "Time zone normalization",
        "Detailed time analytics",
      ],
      stats: [
        { label: "Time Accuracy", value: "±1ms" },
        { label: "Manipulation Detection", value: "100%" },
        { label: "System Reliability", value: "99.99%" },
      ],
      gradient: "from-blue-700 to-cyan-600",
      bgIcon: "⚡",
    },
  ];

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [features.length]);

  const currentFeature = features[activeFeature];

  return (
    <div className="bg-gradient-to-b from-gray-900 via-slate-900 to-blue-900 relative overflow-hidden">
      {/* HEADER */}
      <div className="relative z-10 container mx-auto px-6 py-24">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Comprehensive Security Arsenal
          </h2>
          <p className="text-xl text-blue-200 max-w-4xl mx-auto">
            Every feature engineered to eliminate cheating while maintaining
            great candidate experience.
          </p>
        </div>

        {/* FEATURE NAV */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {features.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(index)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition ${
                activeFeature === index
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-blue-200"
              }`}
            >
              {feature.icon} {feature.title}
            </button>
          ))}
        </div>

        {/* FEATURE CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-4xl font-bold text-white mb-4">
              {currentFeature.title}
            </h3>
            <p className="text-blue-200 mb-6">
              {currentFeature.description}
            </p>

            <ul className="space-y-3">
              {currentFeature.benefits.map((b) => (
                <li key={b} className="text-blue-200">
                  ✔ {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl text-white">
            <h4 className="font-semibold mb-4">Stats</h4>
            <div className="grid grid-cols-3 gap-6">
              {currentFeature.stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold">{s.value}</div>
                  <div className="text-sm text-blue-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedFeaturesSection;
