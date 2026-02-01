import React, { useState } from "react";
import {
  MapPin,
  Mail,
  MessageCircle,
  Phone,
  Home,
  Send,
  Clock,
  Users,
  Award,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setSubmissionStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
      setTimeout(() => setSubmissionStatus(""), 5000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* HERO */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-24">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-6 py-3 mb-8">
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm font-medium">We're Here to Help</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Get in{" "}
            <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Send us a message and we’ll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="py-16 -mt-16 relative z-10">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-6">
          {[
            { icon: Mail, title: "Email Us", value: "hello@company.com" },
            { icon: Phone, title: "Call Us", value: "+91 7392813136" },
            { icon: MessageCircle, title: "Live Chat", value: "24/7 Available" },
            { icon: Home, title: "Visit Us", value: "Gorakhpur, UP" },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-xl">
              <item.icon className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-10">
            Send Us a Message
          </h2>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-2xl p-8 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="First Name"
                className="input"
              />
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Last Name"
                className="input"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email"
                className="input"
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="input"
              />
            </div>

            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Subject"
              className="input"
            />

            <textarea
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message..."
              className="input resize-none"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:scale-105 transition disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : <><Send /> Send Message</>}
            </button>

            {submissionStatus === "success" && (
              <p className="text-green-600 text-center font-semibold">
                ✅ Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
