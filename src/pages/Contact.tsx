import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { updatePageSEO } from '../utils/seo';
import QuoteForm from '../components/QuoteForm';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { useParallax } from '../hooks/useScrollAnimation';

interface ContactProps {
  onNavigate: (page: string) => void;
}

const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  useEffect(() => {
    updatePageSEO('contact');
  }, []);
  
  const parallaxOffset = useParallax(0.5);

  return (
    <div className="pt-20 parallax-container">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-black/10"
          style={{ y: parallaxOffset }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <AnimatedSection animation="fadeUp" delay={0.2}>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Contact Your San Mateo Insurance Agent
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fadeUp" delay={0.4}>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Request your free insurance quote today. Call, email, or fill out the form – 
                I'm here to help you find the right coverage in San Mateo, CA.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            <AnimatedSection animation="fadeUp" delay={0.1}>
              <motion.div 
                className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col justify-center"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatedSection animation="scale" delay={0.2}>
                  <div className="bg-blue-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                </AnimatedSection>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                <motion.a
                  href="tel:+16505551234"
                  className="text-blue-700 hover:text-blue-800 font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded px-2 py-1"
                  aria-label="Call us at 650-555-1234"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  (650) 555-1234
                </motion.a>
                <p className="text-sm text-gray-600 mt-2">Mon-Fri: 9AM-6PM</p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.2}>
              <motion.div 
                className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col justify-center"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatedSection animation="scale" delay={0.3}>
                  <div className="bg-blue-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                </AnimatedSection>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                <motion.a
                  href="mailto:agent@sanmateoinsurance.com"
                  className="text-blue-700 hover:text-blue-800 font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded px-2 py-1 text-sm break-all"
                  aria-label="Email us at agent@sanmateoinsurance.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  agent@sanmateoinsurance.com
                </motion.a>
                <p className="text-sm text-gray-600 mt-2">24-hour response</p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.3}>
              <motion.div 
                className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col justify-center"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatedSection animation="scale" delay={0.4}>
                  <div className="bg-blue-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                </AnimatedSection>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-700 font-medium">San Mateo, CA</p>
                <p className="text-sm text-gray-600 mt-2">Serving all of San Mateo County</p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.4}>
              <motion.div 
                className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col justify-center"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatedSection animation="scale" delay={0.5}>
                  <div className="bg-blue-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                </AnimatedSection>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Hours</h3>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 2:00 PM</p>
                  <p>Sun: By appointment</p>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Quote Form and Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Quote Form */}
            <AnimatedSection animation="fadeUp" delay={0.1}>
              <QuoteForm />
            </AnimatedSection>

            {/* Map and Additional Info */}
            <AnimatedSection animation="fadeUp" delay={0.2}>
              <div className="space-y-8 flex flex-col justify-center h-full">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Serving San Mateo County & Beyond
                  </h3>
                  <AnimatedSection animation="scale" delay={0.3}>
                    <motion.div 
                      className="bg-gray-100 rounded-lg overflow-hidden shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50830.84472302726!2d-122.3577128!3d37.5630088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f9e6c7e5e8b8d%3A0x4b9c0f8e8b8e8b8d!2sSan%20Mateo%2C%20CA!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="San Mateo, CA location map"
                        aria-label="Google Maps showing San Mateo, California"
                      />
                    </motion.div>
                  </AnimatedSection>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50 border-t-4 border-red-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fadeUp">
            <h3 className="text-2xl font-bold text-red-900 mb-4">
              Need to Report a Claim?
            </h3>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={0.2}>
            <p className="text-red-800 mb-6">
              If you need to report a claim or have an emergency, please call your insurance company's 
              24-hour claims hotline first, then contact me so I can assist you through the process.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+16505551234"
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-red-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
                aria-label="Call for claims assistance at 650-555-1234"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Call for Claims Assistance
              </motion.a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;