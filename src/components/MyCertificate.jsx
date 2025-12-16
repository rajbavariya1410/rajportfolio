import React from 'react'
import Cartificat1 from '../assets/certificate1.png'
import Cartificat2 from '../assets/certificate2.png'

export default function MyCertificate() {
    return (
        <>
            <section
                id="certificate"
                className="py-12 md:py-16 bg-white text-center px-4 sm:px-6 md:px-10"
            >
                {/* Section Heading */}
                <p className="text-xs sm:text-sm text-gray-500 tracking-widest uppercase mb-2">
                    Certificates
                </p>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12">
                    My Achieved <span className="text-blue-600">&amp; Completed</span> Certificates
                </h2>

                {/* Certificates Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">

                    {/* Certificate Item 1 */}
                    <div
                        className="bg-white border border-gray-100 rounded-2xl 
                 shadow-md hover:shadow-xl transition-all duration-300
                 flex items-center justify-center p-4 sm:p-6"
                        data-aos="fade-up"
                    >
                        <img
                            src={Cartificat1}
                            alt="Certificate 1"
                            className="w-full max-w-xs sm:max-w-sm h-auto object-contain"
                        />
                    </div>

                    {/* Certificate Item 2 */}
                    <div
                        className="bg-white border border-gray-100 rounded-2xl
                 shadow-md hover:shadow-xl transition-all duration-300
                 flex items-center justify-center p-4 sm:p-6"
                        data-aos="fade-up"
                    >
                        <img
                            src={Cartificat2}
                            alt="Certificate 2"
                            className="w-full max-w-xs sm:max-w-sm h-auto object-contain"
                        />
                    </div>

                </div>
            </section>

        </>
    )
}
