import React, { useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { GoProjectSymlink } from 'react-icons/go';

export default function ProjectsApp() {

    const projects = [
        {
            title: "E-Commerce Website",
            desc: "Modern online store with product filtering, cart, and payment system.",
            img: "https://deep-image.ai/blog/content/images/2022/12/Walmart-eCommerce-Analytics.jpeg",
            tech: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/rajbavariya1410/walmartapp.git",
            live: "https://rajbavariya1410.github.io/walmartapp/",
        },
        {
            title: "Portfolio Website",
            desc: "Personal portfolio to showcase my design and coding projects.",
            img: "https://repository-images.githubusercontent.com/799975430/49aaeb67-e194-422b-a334-57dbb8bf83fd",
            tech: ["HTML", "CSS", "Tailwind"],
            github: "https://github.com/rajbavariya1410/rajportfolio.git",
            live: "#",
        },
        {
            title: "Weather App",
            desc: "Responsive app showing real-time weather data using API integration.",
            img: "https://www.shutterstock.com/image-vector/set-cartoon-paper-cut-weather-260nw-1705020187.jpg",
            tech: ["HTML", "CSS", "API"],
            github: "https://github.com/rajbavariya1410/weatherapp.git",
            live: "https://rajbavariya1410.github.io/weatherapp/",
        },
        {
            title: "Live Dictionary App",
            desc: "A Live Dictionary App that provides instant word meanings, pronunciations, and examples as you type — powered by real-time API integration..",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLvOtrZkgxY7J1Rh7KvGqWr3FNTzfWsliGtg&s",
            tech: ["HTML", "Tailwind", "API"],
            github: "https://github.com/rajbavariya1410/dictionary.git",
            live: "https://rajbavariya1410.github.io/dictionary/",
        },
        {
            title: "Clothing Brand Website",
            desc: "A modern and responsive website built to deliver a smooth user experience with clean design and interactive features.",
            img: "https://img.freepik.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg",
            tech: ["HTML", "Tailwind", "API", "JavaScript"],
            github: "https://github.com/rajbavariya1410/cultureclothing.git",
            live: "https://cultureclothing.vercel.app/",
        },
        {
            title: "Crud Demo App",
            desc: "A dynamic CRUD website that allows users to create, read, update, and delete data seamlessly with an intuitive and responsive interface.",
            img: "https://www.shutterstock.com/image-illustration/crud-acronym-create-read-update-600nw-2491959959.jpg",
            tech: ["HTML", "Tailwind", "API"],
            github: "https://github.com/rajbavariya1410/crudapp.git",
            live: "https://rajbavariya1410.github.io/crudapp/",
        },
        {
            title: "News App",
            desc: "A dynamic news web app that fetches real-time headlines using an external API to deliver the latest updates instantly.",
            img: "https://reactjsexample.com/content/images/2021/11/Snipaste_2021-11-28_13-55-49.jpg",
            tech: ["HTML", "Tailwind", "API"],
            github: "https://github.com/rajbavariya1410/newsapp.git",
            live: "https://rajbavariya1410.github.io/newsapp/",
        },
        {
            title: "Hotel Booking App",
            desc: "A modern hotel room booking web app that allows users to search, select, and reserve rooms in real time with an intuitive and user-friendly interface.",
            img: "https://netwebtechnologies.com/wp-content/uploads/2024/02/hotel-room-booking-apps.webp",
            tech: ["HTML", "Tailwind", "Components"],
            github: "https://github.com/rajbavariya1410/hotel-room-booking.git",
            live: "https://hotel-room-booking-self.vercel.app/",
        },
    ];

    return (
        <>      
          <section id='projects' className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-2 text-gray-800">Featured Work</h2>
                <p className="text-gray-600 mb-12" >
                    A showcase of my recent projects demonstrating expertise in frontend
                    development, modern frameworks, and creative problem-solving.
                </p>

                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md hover:shadow-xl transition-shadow rounded-2xl overflow-hidden" data-aos="fade-up"
                        >
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">{project.desc}</p>
                                <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                                    {project.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="bg-blue-100 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-center md:justify-start gap-3">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white text-sm px-3 py-2 rounded-lg transition"
                                    >
                                        <FaGithub /> GitHub
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-2 rounded-lg transition"
                                    >
                                        <GoProjectSymlink size={16} /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        </>

    )
}

