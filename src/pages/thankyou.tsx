import React from "react";
import {
  FaCheckCircle,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import logo from "@/assets/logo.png";

const ThankYou: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-10 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 relative overflow-hidden">
      {/* 🔹 Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,215,0,0.15),transparent_70%)] pointer-events-none" />

      {/* 🔹 ISML Logo as Circle */}
      <div className="w-28 h-28 mb-6 rounded-full overflow-hidden shadow-lg animate-fade-in">
        <img src={logo} alt="ISML Logo" className="w-full h-full object-cover" />
      </div>

      {/* 🔹 Animated success icon */}
      <FaCheckCircle
        className="text-yellow-500 mb-4 animate-bounce-slow"
        size={80}
      />

      {/* 🔹 Headline */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-3 leading-snug animate-fade-in">
         Thank You for Becoming an{" "}
        <span className="text-yellow-600">ISML Elite Member</span> with{" "}
        <span className="text-yellow-700">InfinityPass!</span>
      </h1>

      {/* 🔹 Subheadline */}
      <h3 className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl animate-fade-in-slow">
  Your membership payment has been received successfully.
  <span className="block mt-2 text-yellow-700 font-medium italic">
    “Welcome to the Indian School for Modern Languages learning community!”
  </span>
</h3>


      {/* 🔹 Steps Section */}
      <div className="grid gap-6 max-w-2xl w-full mb-10">
  <p className="text-gray-800 mb-4 font-semibold text-lg">
    We’re excited to have you on board! Here’s what happens next:
  </p>

  {/* Step 1 */}
  <div className="flex items-start bg-white/90 backdrop-blur-md shadow-lg rounded-xl p-5 border-l-4 border-yellow-500 hover:scale-105 transform transition">
    <div className="flex-shrink-0 text-yellow-500 text-2xl mt-1">📧</div>
    <div className="ml-4 text-left">
      <p className="font-semibold text-gray-800 mb-1">Check your email</p>
      <p className="text-gray-700 text-sm">
        You’ll receive a confirmation mail with your Membership ID, activation link, and access details within 48 hours.
      </p>
    </div>
  </div>

  {/* Step 2 */}
  <div className="flex items-start bg-white/90 backdrop-blur-md shadow-lg rounded-xl p-5 border-l-4 border-yellow-500 hover:scale-105 transform transition">
    <div className="flex-shrink-0 text-yellow-500 text-2xl mt-1">🎓</div>
    <div className="ml-4 text-left">
      <p className="font-semibold text-gray-800 mb-1">Activate your account</p>
      <p className="text-gray-700 text-sm">
        Once you log in, start exploring your language discounts, learning tools, and internship options.
      </p>
    </div>
  </div>

  {/* Step 3 */}
  <div className="flex items-start bg-white/90 backdrop-blur-md shadow-lg rounded-xl p-5 border-l-4 border-yellow-500 hover:scale-105 transform transition">
    <div className="flex-shrink-0 text-yellow-500 text-2xl mt-1">💬</div>
    <div className="ml-4 text-left">
      <p className="font-semibold text-gray-800 mb-1">Join the ISML Community</p>
      <p className="text-gray-700 text-sm">
        Stay updated on workshops, placement drives, and exclusive learning events.
      </p>
    </div>
  </div>

  {/* Step 4 */}
  <div className="flex items-start bg-white/90 backdrop-blur-md shadow-lg rounded-xl p-5 border-l-4 border-yellow-500 hover:scale-105 transform transition">
    <div className="flex-shrink-0 text-yellow-500 text-2xl mt-1">🕐</div>
    <div className="ml-4 text-left">
      <p className="font-semibold text-gray-800 mb-1">Need help?</p>
      <p className="text-gray-700 text-sm">
        If you don’t receive your welcome email within 48 hours, contact our support team below.
      </p>
    </div>
  </div>
</div>


      {/* 🔹 Contact Info */}
      <div className="max-w-2xl w-full mx-auto mb-8 px-4 sm:px-6">
  {/* Contact Info Card */}
<div className="bg-white/90 backdrop-blur-md shadow-lg rounded-xl p-6 mb-6 border border-yellow-100 max-w-2xl mx-auto text-center">
  <p className="font-semibold text-gray-800 text-base sm:text-lg mb-2">
    Indian School for Modern Languages (ISML)
  </p>
  <p className="text-gray-700 text-sm sm:text-base mb-2">
    8/3, Athreyapuram 2nd Street, Choolaimedu, Chennai – 600094
  </p>
  <div className="flex flex-col sm:flex-row justify-center sm:space-x-6 space-y-2 sm:space-y-0 text-gray-700 text-sm sm:text-base">
    <a
      href="mailto:elitemembership.isml@gmail.com"
      className="flex items-center justify-center hover:text-yellow-700 transition"
    >
      📩 <span className="ml-1">elitemembership.isml@gmail.com</span>
    </a>
    <a
      href="tel:+919385457322"
      className="flex items-center justify-center hover:text-yellow-700 transition"
    >
      📞 <span className="ml-1">+91-93854 57322</span>
    </a>
  </div>
</div>



  {/* Quick Links Card */}
<div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-6 border border-yellow-100 max-w-2xl mx-auto mb-8">
  <h4 className="font-semibold text-gray-800 text-lg mb-4 flex items-center">
    🔗 Explore ISML:
  </h4>
  <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-3 sm:space-y-0 text-yellow-700 font-medium text-sm sm:text-base">
    <a
      href="https://www.indianschoolformodernlanguages.com/courses"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-yellow-800 hover:underline transition"
    >
      📘 Explore Our Courses
    </a>
    <a
      href="https://www.indianschoolformodernlanguages.com/centres"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-yellow-800 hover:underline transition"
    >
      🏫 Explore Our Centres
    </a>
    <a
      href="https://www.indianschoolformodernlanguages.com/about"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-yellow-800 hover:underline transition"
    >
      ℹ️ About ISML
    </a>
  </div>
</div>

</div>


      {/* 🔹 Social Links */}
      <div className="flex space-x-6 mt-6 text-yellow-700">
        <a href="https://www.instagram.com/learnwithisml/" className="hover:scale-110 transition-transform">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.linkedin.com/company/learnwithisml/" className="hover:scale-110 transition-transform">
          <FaLinkedin size={24} />
        </a>
        <a href="https://www.youtube.com/@learnwithisml" className="hover:scale-110 transition-transform">
          <FaYoutube size={24} />
        </a>
      </div>

      {/* 🔹 Footer */}
      <p className="text-xs text-gray-400 mt-8">
        © {new Date().getFullYear()}  IYPAN Educational Centre Private Limited. All rights reserved.
      </p>
    </main>
  );
};

export default ThankYou;
