import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Team from './components/Team';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import TrustBadges from './components/TrustBadges';
import ContactForm from './components/ContactForm';
import MobileNav from './components/MobileNav';
import VideoTestimonials from './components/VideoTestimonials';

const App: React.FC = () => {
  return (
    <div className="bg-white font-sans">
      {/* Skip to Content for Accessibility */}
      <a href="#main-content" className="skip-to-content">
        Lewati ke konten
      </a>
      
      <ScrollProgress />
      <Header />
      
      <main id="main-content">
        <Hero />
        <TrustBadges />
        <Partners />
        <About id="about" />
        <WhyChooseUs />
        <Services id="services" />
        <Team />
        <Process />
        <Testimonials />
        <VideoTestimonials />
        <FAQ />
        <Blog />
        <ContactForm id="contact" />
        <CTA />
      </main>
      
      <Footer />
      <MobileNav />
    </div>
  );
};

export default App;