import React, { useEffect, useRef, useState } from "react";

const OurWorkVideo = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const sectionEl = sectionRef.current;

    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoLoaded) {
            const iframe = videoRef.current;
            if (iframe && iframe.contentWindow) {
              iframe.contentWindow.postMessage(
                '{"event":"command","func":"playVideo","args":""}',
                "*"
              );
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    observer.observe(sectionEl);

    return () => {
      observer.unobserve(sectionEl);
      observer.disconnect();
    };
  }, [videoLoaded]);

  const handleIframeLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 overflow-hidden"
      id="our-work"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-90" />

      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-32 right-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-56 h-56 bg-indigo-500 rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000" />
        <div className="absolute bottom-24 right-40 w-64 h-64 bg-pink-500 rounded-full blur-3xl opacity-10 animate-blob animation-delay-3000" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-white">Our Work</h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            See how we've helped businesses transform their digital presence and
            achieve outstanding results.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className="relative h-0 overflow-hidden rounded-lg shadow-2xl"
            style={{ paddingBottom: "56.25%" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10 rounded-lg pointer-events-none" />

            <iframe
              ref={videoRef}
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/ZqoZOkputgc?start=6&enablejsapi=1&rel=0&modestbranding=1&mute=1"
              title="Our Work Showcase"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              onLoad={handleIframeLoad}
            />
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-100 italic text-xl mb-8">
              "Our team is dedicated to delivering projects that exceed
              expectations and drive real business value."
            </p>
            <button className="bg-white text-indigo-900 hover:bg-indigo-100 transition font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl">
              View Portfolio
            </button>
          </div>
        </div>
      </div>

      {/* Decorative rings */}
      <div className="absolute top-20 left-10 w-64 h-64 border border-white/10 rounded-full" />
      <div className="absolute bottom-20 right-10 w-40 h-40 border border-white/10 rounded-full" />
    </section>
  );
};

export default OurWorkVideo;
