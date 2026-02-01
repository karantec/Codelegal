import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  TrendingUp,
  Users,
  Award,
  AlertCircle,
  RefreshCw,
} from "lucide-react";

/* ---------------- STAR RATING ---------------- */
const StarRating = ({ rating = 5 }) => {
  const fullStars = Math.floor(rating);

  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={i}
          className="w-5 h-5 text-amber-500 fill-amber-500"
        />
      ))}
    </div>
  );
};

/* ---------------- LOADING SKELETON ---------------- */
const TestimonialSkeleton = () => (
  <div className="px-3">
    <div className="h-full bg-white rounded-2xl shadow p-8 animate-pulse">
      <div className="space-y-3 mb-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-4 bg-gray-300 rounded" />
        ))}
      </div>
      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-5 h-5 bg-gray-300 rounded" />
        ))}
      </div>
      <div className="flex items-center">
        <div className="w-14 h-14 bg-gray-300 rounded-full" />
        <div className="ml-4 space-y-2">
          <div className="h-4 bg-gray-300 w-24 rounded" />
          <div className="h-3 bg-gray-300 w-32 rounded" />
        </div>
      </div>
    </div>
  </div>
);

/* ---------------- ERROR ---------------- */
const ErrorMessage = ({ message, onRetry }) => (
  <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
    <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
    <p className="text-red-600 mb-4">{message}</p>
    <button
      onClick={onRetry}
      className="px-4 py-2 bg-red-600 text-white rounded-lg"
    >
      <RefreshCw className="inline w-4 h-4 mr-2" />
      Retry
    </button>
  </div>
);

const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const autoplayRef = useRef(null);

  /* ---------------- FETCH ---------------- */
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch(
          "https://tesodtechnologyfinal.onrender.com/testimonial/Testimonial"
        );
        const data = await res.json();
        setTestimonials(Array.isArray(data) ? data : []);
      } catch {
        setError("Failed to load testimonials");
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  /* ---------------- RESPONSIVE ---------------- */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ---------------- NAVIGATION (FIXED) ---------------- */
  const goToNext = useCallback(() => {
    setActiveIndex((prev) =>
      prev >= testimonials.length - itemsToShow ? 0 : prev + 1
    );
  }, [testimonials.length, itemsToShow]);

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) =>
      prev === 0 ? Math.max(0, testimonials.length - itemsToShow) : prev - 1
    );
  }, [testimonials.length, itemsToShow]);

  const goToSlide = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  /* ---------------- AUTOPLAY (FIXED) ---------------- */
  useEffect(() => {
    if (loading || error || testimonials.length === 0) return;

    autoplayRef.current = setTimeout(goToNext, 5000);
    return () => clearTimeout(autoplayRef.current);
  }, [goToNext, loading, error, testimonials.length]);

  /* ---------------- UI ---------------- */
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 py-24">
        <h2 className="text-5xl font-bold text-center mb-16">
          Client Testimonials
        </h2>

        {error && <ErrorMessage message={error} onRetry={() => window.location.reload()} />}

        {loading && (
          <div className="flex">
            {[...Array(itemsToShow)].map((_, i) => (
              <TestimonialSkeleton key={i} />
            ))}
          </div>
        )}

        {!loading && testimonials.length > 0 && (
          <>
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{
                  transform: `translateX(-${activeIndex * (100 / itemsToShow)}%)`,
                  width: `${(testimonials.length / itemsToShow) * 100}%`,
                }}
              >
                {testimonials.map((t) => (
                  <div
                    key={t._id}
                    className="px-3"
                    style={{ width: `${(100 / testimonials.length) * itemsToShow}%` }}
                  >
                    <div className="bg-white rounded-2xl shadow p-8">
                      <p className="italic mb-6">"{t.message}"</p>
                      <StarRating />
                      <h3 className="font-bold mt-4">{t.name}</h3>
                      <p className="text-sm text-gray-500">{t.position}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={goToPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow"
              >
                <ChevronRight />
              </button>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {[...Array(Math.max(0, testimonials.length - itemsToShow + 1))].map(
                (_, i) => (
                  <button
                    key={i}
                    onClick={() => goToSlide(i)}
                    className={`w-3 h-3 rounded-full ${
                      i === activeIndex ? "bg-indigo-600 w-8" : "bg-gray-300"
                    }`}
                  />
                )
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TestimonialsPage;
