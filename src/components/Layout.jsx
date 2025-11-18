import React from 'react'
import NavbarApp from './NavbarApp'
import HeroSection from './LandingPage'
import AboutMe from './AboutMe'
import ProjectsApp from './ProjectsApp'
import ServicesSection from './ServicesSection'
import ContactApp from './Contact'
import FooterApp from './FooterApp'

export default function Layout() {
  return (
    <>
        <NavbarApp />
        <HeroSection />
        <AboutMe />
        <ProjectsApp />
        <ServicesSection />
        <ContactApp />
        <FooterApp />
    </>
  )
}
