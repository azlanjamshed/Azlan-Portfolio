import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SocialCard from "../Components/SocialCard";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isSending, setIsSending] = useState(false);

  // Email Configuration - Change this to your actual email
  const MY_EMAIL = "azlanjamsh@gmail.com";

  const onSubmit = async (data) => {
    setIsSending(true);

    // Simulate a brief loading delay so the user sees the button state change
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Construct the mailto link with form data
    const subject = encodeURIComponent(`New Inquiry from ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
    );
    const mailtoLink = `mailto:${MY_EMAIL}?subject=${subject}&body=${body}`;

    // Open the default email app
    window.location.href = mailtoLink;

    // Reset the form fields and re-enable the button
    reset();
    setIsSending(false);
  };

  return (
    <section id="contact" className="py-20  md:py-32 bg-white">
      {/* Responsive Container: 
        Stacks elements vertically on mobile/tablet (flex-col). 
        Sits them side-by-side on desktop (lg:flex-row).
      */}
      <div className=" px-5 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
        {/* Left Side: Text and Info */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
          {/* Responsive Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-4 sm:mb-6">
            Let's work together
          </h2>

          <p className="text-base sm:text-lg text-slate-600 mb-10 md:mb-12 leading-relaxed max-w-lg mx-auto lg:mx-0">
            Currently available for freelance opportunities and full-time
            positions. If you have a project in mind or just want to say hi, I'd
            love to hear from you.
          </p>

          <div className="space-y-6 sm:space-y-8 flex flex-col items-start">
            {/* Email Info */}
            <div className="flex items-center gap-4 sm:gap-5 text-left">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#5eb4a3] flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-slate-800"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs font-bold text-slate-500 tracking-wider uppercase mb-0.5 sm:mb-1">
                  Email Me
                </p>
                <p className="text-base sm:text-lg font-medium text-slate-900 break-all">
                  {MY_EMAIL}
                </p>
              </div>
            </div>

            {/* Location Info */}
            <div className="flex items-center gap-4 sm:gap-5 text-left">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#d0ecd7] flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-slate-800"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs font-bold text-slate-500 tracking-wider uppercase mb-0.5 sm:mb-1">
                  Location
                </p>
                <p className="text-base sm:text-lg font-medium text-slate-900">
                  Kolkata, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form Container */}
        {/* Responsive padding inside the form box */}
        <div className="w-full lg:w-1/2 bg-[#f8f9fa] rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-8 md:p-10 shadow-sm border border-slate-100">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5 sm:space-y-6"
          >
            {/* Input Wrapper:
              Stacks Name and Email vertically on phones (flex-col).
              Sits them side-by-side on tablets and up (sm:flex-row).
            */}
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
              {/* Name Field */}
              <div className="w-full sm:w-1/2">
                <label className="block text-sm font-bold text-slate-700 mb-1.5 sm:mb-2 text-left">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  {...register("name", { required: true })}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-0 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-inset focus:ring-[#2b6559] placeholder:text-slate-400 outline-none transition-all text-sm sm:text-base"
                />
              </div>

              {/* Email Field */}
              <div className="w-full sm:w-1/2">
                <label className="block text-sm font-bold text-slate-700 mb-1.5 sm:mb-2 text-left">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  {...register("email", { required: true })}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-0 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-inset focus:ring-[#2b6559] placeholder:text-slate-400 outline-none transition-all text-sm sm:text-base"
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1.5 sm:mb-2 text-left">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="How can I help you?"
                {...register("message", { required: true })}
                className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-0 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-inset focus:ring-[#2b6559] placeholder:text-slate-400 outline-none transition-all resize-none text-sm sm:text-base"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSending}
              className={`w-full flex items-center justify-center gap-2 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-white transition-all duration-300 text-sm sm:text-base ${
                isSending
                  ? "bg-slate-400 cursor-not-allowed"
                  : "bg-[#2b6559] hover:bg-[#204e44] shadow-md hover:shadow-lg"
              }`}
            >
              {isSending ? (
                "Opening Email App..."
              ) : (
                <>
                  Send Message
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
