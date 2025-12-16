import React, { useRef } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function ContactApp() {
   const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = "service_694lzv6";
    const publicKey = "scd2qJ7y_9yCcQbh8";

    // 1️⃣ Send message to admin
    emailjs
      .sendForm(serviceID, "template_49u4l77", form.current, publicKey)
      .then(() => console.log("✅ Message sent to admin"));

    emailjs
      .sendForm(serviceID, "template_49u4l77", form.current, publicKey)
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Thank you for contacting us. We'll reply soon!",
            showConfirmButton: false,
            timer: 2500,
          });
          e.target.reset();
        },
        (error) => {
          // ❌ SweetAlert error
          Swal.fire({
            icon: "error",
            title: "Oops!",
            text: "Something went wrong. Please try again.",
          });
          console.error("Error:", error.text);
        }
      );
  };



return (
  <section id="contact" className="py-16 bg-gray-50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-sm text-gray-500 uppercase tracking-widest">
          Contact
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">
          Get in Touch with Us
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-lg rounded-2xl p-6 sm:p-10">
        {/* Left Side */}
        <div className="flex flex-col justify-center space-y-6">
          <p className="text-gray-600 text-sm sm:text-base">
            I'm always open to discuss exciting projects and new opportunities.
            Let's collaborate!
          </p>

          <div className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
            <FaEnvelope className="text-blue-600 text-lg" />
            <a
              href="mailto:example@email.com"
              className="hover:underline break-all"
            >
              rajbavariya1410@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
            <FaPhone className="text-blue-600 text-lg" />
            <span>+91 72029 94265</span>
          </div>

          <div className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
            <FaMapMarkerAlt className="text-blue-600 text-lg" />
            <span>India, Gujarat</span>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-2">
            <a
              href="https://github.com/rajbavariya1410"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/raj-bavariya-72887235b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://wa.me/917202994265"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-full hover:bg-green-500 hover:text-white transition"
            >
              <FaWhatsapp size={18} />
            </a>
          </div>
        </div>

        {/* Right Form */}
        <form
          className="space-y-4"
          ref={form} onSubmit={sendEmail}
        >
          <input
            name="from_name"
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-blue-600"
            required
          />
          <input
            name="from_email"
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-blue-600"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-blue-600 resize-none"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg text-sm sm:text-base transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);
}
