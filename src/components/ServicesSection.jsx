import React from "react";

export default function FrontendServices() {
  const services = [
    {
      title: "Responsive Web Design",
      desc: "Crafting modern, responsive layouts that adapt perfectly to all devices and screen sizes.",
      img: "https://www.webfx.com/wp-content/uploads/2021/10/iStock-612224522-1024x667.jpg",
    },
    {
      title: "UI / UX Implementation",
      desc: "Turning clean, creative UI designs into pixel-perfect, interactive user experiences.",
      img: "https://katharostechie.in/wp-content/uploads/2023/12/22.png",
    },
    {
      title: "React & Tailwind Development",
      desc: "Building fast, scalable, and maintainable front-end applications using React and Tailwind CSS.",
      img: "https://media2.dev.to/dynamic/image/width=1280,height=720,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fvdy3iq8d7au8eqejw531.jpg",
    },
    {
      title: "Performance Optimization",
      desc: "Improving site performance, SEO, and accessibility for smoother user experiences.",
      img: "https://media.licdn.com/dms/image/v2/D4E12AQF-mlbR1jN0KQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1702033454321?e=2147483647&v=beta&t=0oe7g1wYI4cuKzaI8nXMDP9GdZyAR1bQdwk0uquImPY",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 bg-white text-center px-6 md:px-10"
    >
      {/* Section Heading */}
      <p className="text-sm text-gray-500 tracking-widest uppercase mb-2">
        Services
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
        My Front-End <span className="text-blue-600">&amp; Design</span> Services
      </h2>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl p-8 flex flex-col items-center text-center border border-gray-100" data-aos="fade-up"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-45 h-24 mb-6 object-contain"
            />
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
