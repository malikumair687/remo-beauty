import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (!/^[a-zA-Z\s]*$/.test(formData.name)) {
      newErrors.name = "Name can only contain letters and spaces";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    } else if (formData.message.trim().length > 500) {
      newErrors.message = "Message cannot exceed 500 characters";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));

    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: ""
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Form submitted:", formData);
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInputClass = (fieldName) => {
    const baseClass = "w-full p-4 rounded-xl border-2 focus:outline-none transition-all duration-300 backdrop-blur-sm";
    
    if (errors[fieldName]) {
      return `${baseClass} bg-white/90 border-red-300 text-gray-900 focus:ring-2 focus:ring-red-400 focus:border-red-400`;
    }
    
    return `${baseClass} bg-white/80 border-white/30 text-gray-900 placeholder-gray-600 focus:ring-2 focus:ring-[#94ABD9] focus:border-[#94ABD9] focus:bg-white/95`;
  };

  const getLabelClass = (fieldName) => {
    return `block text-sm font-semibold mb-2 ${errors[fieldName] ? 'text-red-400' : 'text-gray-800'}`;
  };

  return (
    <section 
      className="min-h-screen flex items-center mt-20 justify-center px-6 py-12 relative overflow-hidden"
      style={{
        backgroundImage: "url('/public/about/about.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Enhanced Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br  from-[#94ABD9]/80 via-[#E2E7F1]/70 to-[#94ABD9]/90"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-16 w-16 h-16 bg-white/30 rounded-full blur-lg animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/25 rounded-full blur-md animate-pulse delay-500"></div>

      <div className="w-full z-10 max-w-2xl">
        {/* Enhanced Card */}
        <div className="bg-white/20 backdrop-blur-xl p-8 sm:p-12 rounded-3xl shadow-2xl border border-white/30 relative overflow-hidden">
          {/* Card Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#94ABD9]/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#E2E7F1]/20 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            {/* Enhanced Heading */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4 border border-white/30">
                <svg className="w-8 h-8 text-[#94ABD9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3 drop-shadow-lg">
                Get in <span className="text-white">Touch</span>
              </h1>
              <p className="text-white/90 text-lg font-light">
                Have a question or just want to say hello? We'd love to hear from you.
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className={getLabelClass('name')}
                >
                  Full Name {errors.name && <span className="text-red-400">*</span>}
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className={getInputClass('name')}
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="text-red-300 text-sm mt-2 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className={getLabelClass('email')}
                >
                  Email Address {errors.email && <span className="text-red-400">*</span>}
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                  className={getInputClass('email')}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-red-300 text-sm mt-2 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className={getLabelClass('message')}
                >
                  Your Message {errors.message && <span className="text-red-400">*</span>}
                </label>
                <textarea
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what's on your mind... (10-500 characters)"
                  required
                  className={getInputClass('message') + " resize-none"}
                  disabled={isSubmitting}
                ></textarea>
                <div className="flex justify-between items-center mt-2">
                  {errors.message ? (
                    <p className="text-red-300 text-sm flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      {errors.message}
                    </p>
                  ) : (
                    <div></div>
                  )}
                  <span className={`text-sm font-medium ${formData.message.length > 500 ? 'text-red-300' : 'text-white/70'}`}>
                    {formData.message.length}/500
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r cursor-pointer font-mono from-[#94ABD9] to-[#7E9AD1] hover:from-[#7E9AD1] hover:to-[#6A8BC5] disabled:from-gray-400 disabled:to-gray-500 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform  disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending Your Message...
                  </>
                ) : (
                  <>
                    
                    Send Message
                  </>
                )}
              </button>
            </form>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;