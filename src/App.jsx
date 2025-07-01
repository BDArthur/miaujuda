import React from 'react'
import Hero from './components/Hero/Hero'
import OurServices from './components/AboutSection/AboutSection'
import StatsSection from './components/StatsSection/StatsSection'
import AnimalCards from './components/AnimalCards/AnimalCards'
import ContactSection from './components/ContactSection/ContactSection'
import Footer from './components/Footer/Footer'
import AboutSection from "./components/AboutSection/AboutSection";




const App = () => {
  return (
    <main className='overflow-x-hidden'>
      <Hero/>
      <AboutSection />
      <StatsSection />
      <AnimalCards />
      <ContactSection />
      <Footer />

     
    </main>
    )
}

export default App