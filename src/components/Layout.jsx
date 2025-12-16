import React from 'react'
import NavbarApp from './NavbarApp'
import HeroSection from './HeroSection'
import AboutMe from './AboutMe'
import ProjectsApp from './ProjectsApp'
import ServicesSection from './ServicesSection'
import MyCertificate from './MyCertificate'
import ContactApp from './ContactApp'
import FooterApp from './FooterApp'

export default function Layout() {
  return (
    <>
        <NavbarApp />
        <HeroSection />
        <AboutMe />
        <ProjectsApp />
        <ServicesSection />
        <MyCertificate />
        <ContactApp />
        <FooterApp />
    </>
  )
}
