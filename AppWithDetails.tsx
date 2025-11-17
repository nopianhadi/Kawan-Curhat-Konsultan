import React, { useState } from 'react';
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

// Import Detail Pages
import TeamDetail from './components/TeamDetail';
import BlogDetail from './components/BlogDetail';
import ServiceDetail from './components/ServiceDetail';
import TestimonialDetail from './components/TestimonialDetail';

// Import Full Pages
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import BlogPage from './components/BlogPage';

type PageView = 
  | { type: 'home' }
  | { type: 'about' }
  | { type: 'services-page' }
  | { type: 'blog-page' }
  | { type: 'team-detail'; memberId: string }
  | { type: 'blog-detail'; postId: string }
  | { type: 'service-detail'; serviceId: string }
  | { type: 'testimonial-detail'; testimonialId: string };

const AppWithDetails: React.FC = () => {
  const [currentView, setCurrentView] = useState<PageView>({ type: 'home' });

  const navigateToHome = () => setCurrentView({ type: 'home' });
  const navigateToAbout = () => setCurrentView({ type: 'about' });
  const navigateToServicesPage = () => setCurrentView({ type: 'services-page' });
  const navigateToBlogPage = () => setCurrentView({ type: 'blog-page' });
  const navigateToTeamDetail = (memberId: string) => setCurrentView({ type: 'team-detail', memberId });
  const navigateToBlogDetail = (postId: string) => setCurrentView({ type: 'blog-detail', postId });
  const navigateToServiceDetail = (serviceId: string) => setCurrentView({ type: 'service-detail', serviceId });
  const navigateToTestimonialDetail = (testimonialId: string) => setCurrentView({ type: 'testimonial-detail', testimonialId });

  const handleNavigation = (page: string) => {
    switch(page) {
      case 'about':
        navigateToAbout();
        break;
      case 'services':
        navigateToServicesPage();
        break;
      case 'blog':
        navigateToBlogPage();
        break;
      case 'contact':
        // Scroll to contact form on home page
        if (currentView.type !== 'home') {
          setCurrentView({ type: 'home' });
          setTimeout(() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        } else {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case 'login':
        // Navigate to admin panel
        window.location.href = '/admin';
        break;
      default:
        navigateToHome();
    }
  };

  // Render based on current view
  if (currentView.type === 'about') {
    return <AboutPage onClose={navigateToHome} />;
  }

  if (currentView.type === 'services-page') {
    return <ServicesPage onClose={navigateToHome} onServiceClick={navigateToServiceDetail} />;
  }

  if (currentView.type === 'blog-page') {
    return <BlogPage onClose={navigateToHome} onPostClick={navigateToBlogDetail} />;
  }

  if (currentView.type === 'team-detail') {
    return <TeamDetail memberId={currentView.memberId} onClose={navigateToHome} />;
  }

  if (currentView.type === 'blog-detail') {
    return <BlogDetail postId={currentView.postId} onClose={navigateToHome} />;
  }

  if (currentView.type === 'service-detail') {
    return <ServiceDetail serviceId={currentView.serviceId} onClose={navigateToHome} />;
  }

  if (currentView.type === 'testimonial-detail') {
    return <TestimonialDetail testimonialId={currentView.testimonialId} onClose={navigateToHome} />;
  }

  // Home page
  return (
    <div className="bg-white font-sans">
      {/* Skip to Content for Accessibility */}
      <a href="#main-content" className="skip-to-content">
        Lewati ke konten
      </a>
      
      <ScrollProgress />
      <Header onNavigate={handleNavigation} />
      
      <main id="main-content">
        <Hero />
        <TrustBadges />
        <Partners />
        <About id="about" />
        <WhyChooseUs />
        <Services id="services" onServiceClick={navigateToServiceDetail} />
        <Team onMemberClick={navigateToTeamDetail} />
        <Process />
        <Testimonials onTestimonialClick={navigateToTestimonialDetail} />
        <VideoTestimonials />
        <FAQ />
        <Blog onPostClick={navigateToBlogDetail} />
        <ContactForm id="contact" />
        <CTA />
      </main>
      
      <Footer />
      <MobileNav />
    </div>
  );
};

export default AppWithDetails;
