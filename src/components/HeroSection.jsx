import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaCircle, FaDownload, FaGithub, FaDiscord, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Profilepic from '../assets/profile.jpeg'
import Aos from 'aos'
import 'aos/dist/aos.css';

export default function HeroSection() {
    Aos.init();
    const words = ["Frontend developer", "React developer"];
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setActive(id);
        }
    };

    useEffect(() => {
        const currentWord = words[wordIndex];
        let typingSpeed = isDeleting ? 80 : 150;

        const handleTyping = () => {
            setText((prev) =>
                isDeleting
                    ? currentWord.substring(0, prev.length - 1)
                    : currentWord.substring(0, prev.length + 1)
            );

            // If word complete
            if (!isDeleting && text === currentWord) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, wordIndex]);
    return (
        <section id='home' className="flex flex-col md:flex-row items-center justify-between px-0 lg:px-40 md:px-20 py-0 md:py-20 lg:py-20 bg-white animate__animated animate__fadeInUpBig">

            <div className="flex-1 text-left px-4 sm:px-6 md:px-8"
                data-aos="fade-down"
            >

                {/* Availability badge */}
                <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm mb-4">
                    <FaCircle className="text-green-500 text-xs" />
                    <span>Available for work</span>
                </div>

                {/* Headings */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                    Hi, I'm Raj Bavariya
                </h1>

                {/* Typing animation text */}
                <div className="my-8 sm:my-10 md:my-12">
                    <div className="w-full sm:w-[90%] md:max-w-[750px] lg:max-w-[960px] xl:max-w-[1142px] mx-auto">
                        <div className="text-center font-bold text-base sm:text-2xl md:text-3xl lg:text-4xl leading-[1.3] mb-8 sm:mb-12">
                            <span className="text-gray-700 typing">{text}</span>
                            <span className="border-r-4 border-gray-400 ml-1 animate-pulse"></span>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 max-w-xl text-sm sm:text-base">
                    I create beautiful, functional, and user-centered digital experiences.
                    With one year of training in frontend development, I bring ideas to life through
                    clean code and thoughtful design.
                </p>

                {/* Info Line */}
                <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-6 text-gray-600 mb-6 text-sm sm:text-base">
                    <span className="flex items-center gap-2">
                        <FaMapMarkerAlt /> Gondal, Rajkot
                    </span>
                    <span className="flex items-center gap-2">
                        <FaCircle className="text-green-500 text-xs" /> Available Now
                    </span>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                    <button className="bg-black text-white px-5 sm:px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition text-sm sm:text-base"
                        onClick={() => scrollToSection('contact')}
                    >
                        Hire Me
                    </button>
                    <a
                        href={`${import.meta.env.BASE_URL}RajBavariya.pdf`}
                        download="RajBavariya.pdf"
                        className="flex items-center justify-center gap-2 border border-gray-400 px-5 sm:px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition text-sm sm:text-base"
                    >
                        <FaDownload /> Download CV
                    </a>
                </div>

                <hr className="w-full mt-6 mb-6 border-gray-300" />

                {/* Social links */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-gray-700 text-sm sm:text-base">
                    <span className="font-semibold">Follow me:</span>

                    <a
                        href="https://github.com/rajbavariya1410"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-900 transition-colors"
                    >
                        <FaGithub size={20} className="sm:size-[22px]" />
                    </a>
                    <a
                        href="https://discord.com/users/raj"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-500 transition-colors"
                    >
                        <FaDiscord size={20} className="sm:size-[22px]" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/raj-bavariya-72887235b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors"
                    >
                        <FaLinkedin size={20} className="sm:size-[22px]" />
                    </a>
                    <a
                        href="https://www.instagram.com/___raj__72?igsh=YjdzeXkzYzNtd21t"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-500 transition-colors"
                    >
                        <FaInstagram size={20} className="sm:size-[22px]" />
                    </a>
                </div>
            </div>


            {/* Right Image Section */}
            <div className="flex-1 mt-10 md:mt-0 flex justify-center"
                data-aos="fade-up"
            >
                <img
                    src={Profilepic}
                    alt="raj bavariya"
                    className="w-80 md:w-96 rounded-lg object-cover"
                />
            </div>
        </section>
    );
}
