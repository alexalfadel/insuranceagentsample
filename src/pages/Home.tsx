import React, { useEffect } from 'react';
import { ArrowRight, Shield, Users, Award, PhoneCall } from 'lucide-react';
import { updatePageSEO } from '../utils/seo';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import ParallaxImage from '../components/ParallaxImage';
import AnimatedCounter from '../components/AnimatedCounter';
import { useParallax } from '../hooks/useScrollAnimation';
import headshot1 from '../assets/headshot1.png'
import headshot2 from '../assets/headshot2.png'

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  useEffect(() => {
    updatePageSEO('home');
  }, []);
  const parallaxOffset = useParallax(0.5);

  return (
    <div className="pt-20 parallax-container">
      {/* Hero Section */}
      <section className="relative gradient-bg text-white overflow-hidden min-h-screen flex items-center">
        <motion.div 
          className="absolute inset-0 bg-black/10"
          style={{ y: parallaxOffset }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fadeRight" delay={0.2}>
              <div className="space-y-8">
                <motion.h1 
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  Protecting What
                  <motion.span 
                    className="text-blue-300 block"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    Matters Most
                  </motion.span>
                </motion.h1>
                <motion.p 
                  className="text-xl lg:text-2xl text-blue-100 leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  Your trusted personal lines insurance agent in San Mateo, CA. I help families and individuals 
                  find affordable, comprehensive coverage for their homes, cars, and everything they value most.
                </motion.p>
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <motion.button
                  onClick={() => onNavigate('contact')}
                  className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-blue-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Get Free Quote</span>
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </motion.button>
                  <motion.a
                  href="tel:+16505551234"
                   className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 hover:bg-blue-500 focus:outline-none cursor-pointer flex items-center justify-center space-x-2"
                  aria-label="Call us at 650-555-1234"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <PhoneCall className="h-5 w-5" aria-hidden="true" />
                    <span>(650) 555-1234</span>
                  </motion.a>
                </motion.div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeLeft" delay={0.4}>
              <div className="relative">
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500"
                  whileHover={{ rotate: 0, scale: 1.02 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <ParallaxImage
                    src={headshot2}
                    alt="Professional insurance agent helping a family"
                    className="w-full h-80 rounded-lg shadow-2xl"
                    parallaxSpeed={0}
                  />
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="fadeUp" delay={0.1}>
              <div className="text-center space-y-4">
                <motion.div 
                  className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Shield className="h-8 w-8 text-white" aria-hidden="true" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900">
                  <AnimatedCounter end={15} suffix="+ Years Experience" />
                </h3>
                <p className="text-gray-600">
                  Serving San Mateo and the Bay Area with expert knowledge of local insurance needs.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeUp" delay={0.2}>
              <div className="text-center space-y-4">
                <motion.div 
                  className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Users className="h-8 w-8 text-white" aria-hidden="true" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900">
                  <AnimatedCounter end={1200} suffix="+ Families Protected" />
                </h3>
                <p className="text-gray-600">
                  Trusted by families across San Mateo, Burlingame, Foster City, and Redwood City.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeUp" delay={0.3}>
              <div className="text-center space-y-4">
                <motion.div 
                  className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Award className="h-8 w-8 text-white" aria-hidden="true" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900">Top-Rated Agent</h3>
                <p className="text-gray-600">
                  Consistently rated 5 stars for exceptional service and personalized attention.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Personal Lines Insurance in San Mateo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From auto and home insurance to umbrella policies, I provide personalized coverage 
              solutions tailored to your lifestyle and budget.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { title: 'Auto Insurance', description: 'Personal car coverage for individuals and families.' },
              { title: 'Home Insurance', description: 'Protect your most valuable asset, your home.' },
              { title: 'Renters Insurance', description: 'Affordable renters coverage across the Bay Area, CA.' },
              { title: 'Umbrella Insurance', description: 'Extra liability protection for any and all needs.' }
            ].map((service, index) => (
              <AnimatedSection
                key={index}
                animation="fadeUp"
                delay={index * 0.1}
              >
                <motion.div
                  className="bg-gray-50 rounded-lg p-6 hover:bg-blue-50 hover:shadow-lg transition-all duration-300 cursor-pointer group h-full flex flex-col"
                  onClick={() => onNavigate('services')}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div className="bg-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-white" aria-hidden="true" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="scale" className="text-center">
            <div className="group">
              <button
                onClick={() => onNavigate('services')}
                className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-xl focus:outline-none focus-visible:outline-none active:outline-none focus:ring-0 w-full sm:w-1/2 mx-auto block cursor-pointer hover:bg-blue-800 group-hover:bg-blue-800 transition-colors duration-200"
              >
                View All Services
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{ y: parallaxOffset * 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12" />
        </motion.div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fadeUp">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Protect What Matters Most?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a personalized insurance quote tailored to your needs. 
              I'm here to help you find the right coverage at the right price.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
              onClick={() => onNavigate('contact')}
              className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 hover:bg-blue-50 focus:outline-none cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Your Free Quote
              </motion.button>
              <motion.a
              href="tel:+16505551234"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 hover:bg-blue-500 focus:outline-none active:outline-none focus-visible:outline-none"
              aria-label="Call us at 650-555-1234"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Call (650) 555-1234
              </motion.a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;