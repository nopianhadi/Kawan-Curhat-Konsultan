import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom';
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
import Gallery from './components/Gallery';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import TrustBadges from './components/TrustBadges';
import ContactForm from './components/ContactForm';
import MobileNav from './components/MobileNav';

// Import Detail Pages
import BlogDetail from './components/BlogDetail';
import ServiceDetail from './components/ServiceDetail';

// Import Full Pages
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import BlogPage from './components/BlogPage';

// Import Admin
import AdminApp from './admin/AdminApp';

// Home Page Component
const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (page: string) => {
    switch(page) {
      case 'about':
        navigate('/about');
        break;
      case 'services':
        navigate('/services');
        break;
      case 'blog':
        navigate('/blog');
        break;
      case 'contact':
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'login':
        window.location.href = '/admin';
        break;
      case 'home':
        navigate('/');
        break;
    }
  };

  const navigateToServiceDetail = (serviceId: string) => navigate(`/services/${serviceId}`);
  const navigateToBlogDetail = (postId: string) => navigate(`/blog/${postId}`);

  return (
    <div className="bg-white font-sans">
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
        <Team />
        <WhyChooseUs />
        <Services id="services" onServiceClick={navigateToServiceDetail} />
        <Process />
        <Testimonials />
        <Gallery />
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

// About Page Wrapper
const AboutPageWrapper: React.FC = () => {
  const navigate = useNavigate();
  
  const handleNavigation = (page: string) => {
    switch(page) {
      case 'about':
        navigate('/about');
        break;
      case 'services':
        navigate('/services');
        break;
      case 'blog':
        navigate('/blog');
        break;
      case 'contact':
        navigate('/');
        setTimeout(() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        break;
      case 'login':
        window.location.href = '/admin';
        break;
      case 'home':
        navigate('/');
        break;
    }
  };
  
  return (
    <>
      <Header onNavigate={handleNavigation} isDetailPage={true} />
      <AboutPage />
      <Footer />
    </>
  );
};

// Services Page Wrapper
const ServicesPageWrapper: React.FC = () => {
  const navigate = useNavigate();
  
  const handleNavigation = (page: string) => {
    switch(page) {
      case 'about':
        navigate('/about');
        break;
      case 'services':
        navigate('/services');
        break;
      case 'blog':
        navigate('/blog');
        break;
      case 'contact':
        navigate('/');
        setTimeout(() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        break;
      case 'login':
        window.location.href = '/admin';
        break;
      case 'home':
        navigate('/');
        break;
    }
  };
  
  return (
    <>
      <Header onNavigate={handleNavigation} isDetailPage={true} />
      <ServicesPage onServiceClick={(id) => navigate(`/services/${id}`)} />
      <Footer />
    </>
  );
};

// Blog Page Wrapper
const BlogPageWrapper: React.FC = () => {
  const navigate = useNavigate();
  
  const handleNavigation = (page: string) => {
    switch(page) {
      case 'about':
        navigate('/about');
        break;
      case 'services':
        navigate('/services');
        break;
      case 'blog':
        navigate('/blog');
        break;
      case 'contact':
        navigate('/');
        setTimeout(() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        break;
      case 'login':
        window.location.href = '/admin';
        break;
      case 'home':
        navigate('/');
        break;
    }
  };
  
  return (
    <>
      <Header onNavigate={handleNavigation} isDetailPage={true} />
      <BlogPage onPostClick={(id) => navigate(`/blog/${id}`)} />
      <Footer />
    </>
  );
};

// Blog Detail Wrapper
const BlogDetailWrapper: React.FC = () => {
  const navigate = useNavigate();
  const { postId } = useParams<{ postId: string }>();
  
  const handleNavigation = (page: string) => {
    switch(page) {
      case 'about':
        navigate('/about');
        break;
      case 'services':
        navigate('/services');
        break;
      case 'blog':
        navigate('/blog');
        break;
      case 'contact':
        navigate('/');
        setTimeout(() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        break;
      case 'login':
        window.location.href = '/admin';
        break;
      case 'home':
        navigate('/');
        break;
    }
  };

  return (
    <>
      <Header onNavigate={handleNavigation} isDetailPage={true} />
      <BlogDetail postId={postId} />
      <Footer />
    </>
  );
};

// Service Detail Wrapper
const ServiceDetailWrapper: React.FC = () => {
  const navigate = useNavigate();
  const { serviceId } = useParams<{ serviceId: string }>();
  
  const handleNavigation = (page: string) => {
    switch(page) {
      case 'about':
        navigate('/about');
        break;
      case 'services':
        navigate('/services');
        break;
      case 'blog':
        navigate('/blog');
        break;
      case 'contact':
        navigate('/');
        setTimeout(() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        break;
      case 'login':
        window.location.href = '/admin';
        break;
      case 'home':
        navigate('/');
        break;
    }
  };

  return (
    <>
      <Header onNavigate={handleNavigation} isDetailPage={true} />
      <ServiceDetail serviceId={serviceId} />
      <Footer />
    </>
  );
};

const AppWithDetails: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPageWrapper />} />
        <Route path="/services" element={<ServicesPageWrapper />} />
        <Route path="/services/:serviceId" element={<ServiceDetailWrapper />} />
        <Route path="/blog" element={<BlogPageWrapper />} />
        <Route path="/blog/:postId" element={<BlogDetailWrapper />} />
        <Route path="/admin/*" element={<AdminApp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppWithDetails;
