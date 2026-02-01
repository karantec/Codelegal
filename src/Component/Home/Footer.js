import { useState } from "react";

const CTAFooterSection = () => {
  const footerLinks = {
    Platform: ["Features", "Security", "API", "Integrations"],
    Solutions: ["For Companies", "For Contests", "For Schools", "Enterprise"],
    Support: ["Documentation", "Help Center", "Contact Us", "Status"],
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 via-slate-900 to-blue-900 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-10 animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10 animate-pulse animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse animation-delay-4000" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            <div className="w-1 h-1 bg-blue-400 rounded-full opacity-40" />
          </div>
        ))}
      </div>

      <div className="relative z-10">
        {/* CTA */}
        <div className="container mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Ready to Eliminate Cheating?
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-12">
            Join thousands of companies and contest organizers who trust Code
            Legal for secure coding assessments.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:scale-105 transition">
              Start Your Free Trial
            </button>
            <button className="px-10 py-4 border-2 border-blue-400 text-blue-300 rounded-full hover:bg-blue-400 hover:text-gray-900 transition">
              Schedule Demo
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="container mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30" />
        </div>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">
                Code Legal
              </h3>
              <p className="text-blue-200 max-w-md">
                The world's most secure coding assessment platform.
              </p>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-white font-semibold mb-4">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <button
                        type="button"
                        className="text-blue-200 hover:text-white transition hover:translate-x-1"
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm mb-4 md:mb-0">
              © 2025 Code Legal. All rights reserved.
            </p>

            <div className="flex space-x-6">
              {["Twitter", "LinkedIn", "GitHub"].map((name) => (
                <button
                  key={name}
                  type="button"
                  aria-label={name}
                  className="text-blue-200 hover:text-white transition"
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default CTAFooterSection;
