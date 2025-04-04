import React, { useState } from 'react';
import { Phone, Calendar, Clock, User, Mail, MessageSquare } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TesodCallbackForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://tesodtechnologyfinal.onrender.com/callback/request-callback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message || 'Something went wrong');

      toast.success("Your callback request has been submitted successfully!");
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        preferredDate: '',
        preferredTime: '',
        message: ''
      });

      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (err) {
      toast.error(`Error: ${err.message}`);
      console.error('Submission error:', err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 via-gray-50 to-blue-50">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="w-full max-w-6xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 right-0 bg-blue-500 opacity-10 rounded-full w-64 h-64 -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 bg-blue-500 opacity-10 rounded-full w-64 h-64 -ml-32 -mb-32"></div>
        </div>

        <div className="relative bg-white p-8 md:p-10 rounded-xl shadow-xl border border-gray-200">
          <div className="text-center mb-8">
            <div className="inline-block bg-blue-600 text-white font-bold py-2 px-6 rounded-lg mb-4">
              TESOD TECHNOLOGY
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Request a Callback</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-3 mb-2"></div>
            <p className="text-gray-600">Our experts will contact you within 24 hours</p>
          </div>

          {isSubmitted ? (
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg text-center mb-4">
              <div className="flex justify-center mb-2">
                <div className="bg-green-100 p-2 rounded-full">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-green-800">Thank You!</h3>
              <p className="text-green-700">Your callback request has been submitted successfully.</p>
              <p className="text-green-600 mt-2">Our team will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  icon={<User className="h-5 w-5 text-blue-500" />}
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="John Doe"
                  label="Full Name *"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
                <InputField
                  icon={<Mail className="h-5 w-5 text-blue-500" />}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  label="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <InputField
                  icon={<Phone className="h-5 w-5 text-blue-500" />}
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  placeholder="+91 1003456789"
                  label="Phone Number *"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
                <InputField
                  icon={<Calendar className="h-5 w-5 text-blue-500" />}
                  id="preferredDate"
                  name="preferredDate"
                  type="date"
                  label="Preferred Date *"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required
                />
                <InputField
                  icon={<Clock className="h-5 w-5 text-blue-500" />}
                  id="preferredTime"
                  name="preferredTime"
                  type="time"
                  label="Preferred Time *"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="group col-span-full">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Message (Optional)</label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-blue-500" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className="block w-full pl-10 pr-3 py-3 border-2 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="w-full md:w-2/3 inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-lg shadow-md text-base font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Request Callback
                </button>
              </div>

              <div className="text-center text-sm text-gray-500 mt-2">
                <p>By submitting this form, you agree to Tesod Technology's privacy policy.</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

const InputField = ({ icon, id, name, type, placeholder, label, value, onChange, required }) => (
  <div className="group">
    <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        {icon}
      </div>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="block w-full pl-10 pr-3 py-3 border-2 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white"
        placeholder={placeholder}
      />
    </div>
  </div>
);

export default TesodCallbackForm;
