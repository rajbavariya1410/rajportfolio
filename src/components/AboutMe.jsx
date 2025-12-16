import React from 'react';
import { FaFolderOpen,FaGraduationCap } from 'react-icons/fa';

export default function AboutMe() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 flex flex-col md:flex-row items-start gap-12 md:gap-16" >
        {/* Left Content */}
        <div id='about' className="flex-1 max-w-full md:max-w-3xl" data-aos="fade-up">
          {/* Small section label */}
          <p className="text-xs text-gray-400 mb-2 tracking-wide font-semibold uppercase">
            ABOUT ME
          </p>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
            Building Meaningful <br /> Digital Experiences
          </h1>

          {/* Description paragraphs */}
          <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed">
            I'm a creative front-end developer passionate about building modern and responsive web experiences.
            <br className="hidden sm:block" />
            My journey began with a love for design and evolved into a deep curiosity for how the web works — combining logic with creativity to bring ideas to life.
          </p>
          <p className="text-gray-700 mb-10 text-sm sm:text-base leading-relaxed">
            When I'm not coding, I enjoy learning new technologies, improving my projects, and exploring better ways to make the web faster and more engaging.
            <br className="hidden sm:block" />
            I believe in continuous learning, attention to detail, and the power of clean, meaningful design.
          </p>

          {/* What Drives Me Section */}
          <h2 className="font-bold text-lg sm:text-xl mb-5">What Drives Me</h2>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8" data-aos="fade-up">
            {/* Languages */}
            <div className="flex flex-col border rounded-md p-4 w-full sm:w-48 min-h-[110px]">
              <h3 className="font-semibold mb-1 flex items-center gap-2">
                <span className="text-lg">{"</>"}</span> Languages
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-snug">
                HTML, HTML5, CSS, CSS3, Bootstrap, Tailwind, JavaScript, React.JS
              </p>
            </div>

            {/* Education */}
            <div className="flex flex-col border rounded-md p-4 w-full sm:w-48 min-h-[110px]">
              <h3 className="font-semibold mb-1 flex items-center gap-2">
                <span className="text-lg"><FaGraduationCap /></span> Education
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-snug">
                bachelor in computer application
              </p>
            </div>

            {/* Projects */}
            <div className="flex flex-col border rounded-md p-4 w-full sm:w-48 min-h-[110px]">
              <h3 className="font-semibold mb-1 flex items-center gap-2">
                <span className="text-lg"><FaFolderOpen /></span> Projects
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-snug">
                Built more than 5 projects
              </p>
            </div>
          </div>
        </div>

        {/* Right Content (Image) */}
        <div className="w-full lg:my-15 max-w-md h-50 lg:h-106  rounded-xl overflow-hidden mx-auto md:mx-0" data-aos="fade-up">
          <img
            src="https://bilginc.com/editorFiles/3147aa77.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </>
  );
}
