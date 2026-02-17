import { useState } from "react";

export default function SuccessVideos() {
  const [play1, setPlay1] = useState(false);
  const [play2, setPlay2] = useState(false);

  return (
    <div className="w-full flex flex-col items-center py-16 px-4">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-white mb-4 text-center">
        🎯 Students Who Used This Sheet
      </h2>
      <p className="text-gray-400 text-center max-w-2xl mb-12">
        These students followed this DSA sheet and successfully cracked MAANG
        placements.
      </p>

      {/* Videos Grid */}
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Video 1 */}
        <div className="aspect-video rounded-2xl overflow-hidden shadow-xl bg-white/5 backdrop-blur border border-white/10">
          {!play1 ? (
            <div
              onClick={() => setPlay1(true)}
              className="w-full h-full relative cursor-pointer group"
            >
              <img
                src="https://www.desiqna.in/?qa=blob&qa_blobid=10954622610576708114"
                alt="Student Success 1"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 flex justify-center items-center bg-black/40">
                <div className="bg-red-600 text-white rounded-full p-6 shadow-lg text-3xl group-hover:scale-110 transition">
                  ▶
                </div>
              </div>
            </div>
          ) : (
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Qx6n3mgY4tg?autoplay=1"
              title="Student Placement 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        {/* Video 2 */}
        <div className="aspect-video rounded-2xl overflow-hidden shadow-xl bg-white/5 backdrop-blur border border-white/10">
          {!play2 ? (
            <div
              onClick={() => setPlay2(true)}
              className="w-full h-full relative cursor-pointer group"
            >
              <img
                src="https://www.desiqna.in/?qa=blob&qa_blobid=18369598748384231170"
                alt="Student Success 2"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 flex justify-center items-center bg-black/40">
                <div className="bg-red-600 text-white rounded-full p-6 shadow-lg text-3xl group-hover:scale-110 transition">
                  ▶
                </div>
              </div>
            </div>
          ) : (
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/n8xrsch5Ims?autoplay=1"
              title="Student Placement 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>

      {/* Success Message Section */}
      <div
        className="mt-16 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 
                      border border-white/10 backdrop-blur 
                      rounded-2xl p-8 max-w-3xl text-center shadow-xl"
      >
        <h3 className="text-2xl font-semibold text-white mb-4">
          🚀 Proven Results
        </h3>

        <p className="text-gray-300 leading-relaxed">
          Students have completed this DSA sheet consistently and successfully
          cracked placements in top product-based companies. With structured
          preparation for Interviews, OA, and CP — this sheet provides
          everything required to reach MAANG-level preparation.{" "}
          <a
            href="https://training.desiqna.in/achiver"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 font-semibold hover:text-purple-300 underline underline-offset-4 transition"
          >
            View Our Achievers →
          </a>
        </p>
      </div>
    </div>
  );
}
