import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaInstagram } from "react-icons/fa";

export default function FooterApp() {
  return (
    <footer
      id="contact"
      className="bg-gray-900 text-gray-300 pt-12 pb-6 px-6 md:px-12"
    >
      {/* Top section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">
            Contact Me
          </h2>
          <p className="flex items-center justify-center md:justify-start gap-3 mb-2">
            <FaEnvelope className="text-blue-500" /> rajbavariya1410@gmail.com
          </p>
          <p className="flex items-center justify-center md:justify-start gap-3 mb-2">
            <FaPhoneAlt className="text-blue-500" /> +91 72029 94265
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Follow Me</h2>
          <div className="flex justify-center md:justify-start gap-5">
            <a
              href="https://github.com/rajbavariya1410"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/raj-bavariya-72887235b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="mailto:rajbavariya1410@gmail.com"
              className="text-gray-400 hover:text-white transition"
            >
              <FaEnvelope size={22} />
            </a>
            <a
              href="https://www.instagram.com/___raj__72?igsh=YjdzeXkzYzNtd21t"
              className="text-gray-400 hover:text-white transition"
            >
              <FaInstagram size={22} />
            </a>
          </div>
        </div>

        {/* Message */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">
            Let’s Work Together
          </h2>
          <p className="text-gray-400">
            Have a project in mind or want to collaborate?  
            Feel free to reach out — I’d love to connect!
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 mb-6"></div>

      {/* Bottom Text */}
      <p className="text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} <span className="text-white font-medium">RajPortfolio</span>.  
        All rights reserved.
      </p>
    </footer>
  );
}
