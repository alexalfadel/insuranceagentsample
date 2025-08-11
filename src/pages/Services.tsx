import React, { useEffect } from 'react';
import { Car, Home, Shield, Umbrella, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { updatePageSEO } from '../utils/seo';
import { Service } from '../types';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { useParallax } from '../hooks/useScrollAnimation';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  useEffect(() => {
    updatePageSEO('services');
  }, []);
  
  const parallaxOffset = useParallax(0.5);

  const services: Service[] = [
    {
      id: 'auto',
      title: 'Auto Insurance San Mateo CA',
      description: 'Comprehensive auto insurance coverage for San Mateo drivers, including liability, collision, comprehensive, and uninsured motorist protection.',
      icon: 'car'
    },
    {
      id: 'home',
      title: 'Home Insurance San Mateo CA',
      description: 'Protect your San Mateo home with comprehensive coverage including dwelling, personal property, liability, and additional living expenses.',
      icon: 'home'
    },
    {
      id: 'renters',
      title: 'Renters Insurance San Mateo',
      description: 'Affordable renters insurance for San Mateo tenants covering personal belongings, liability protection, and temporary living expenses.',
      icon: 'shield'
    },
    {
      id: 'umbrella',
      title: 'Umbrella Insurance San Mateo',
      description: 'Extra liability protection above your auto and home policies, providing peace of mind for Bay Area families with valuable assets.',
      icon: 'umbrella'
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'car': return <Car className="h-8 w-8 text-white" aria-hidden="true" />;
      case 'home': return <Home className="h-8 w-8 text-white" aria-hidden="true" />;
      case 'shield': return <Shield className="h-8 w-8 text-white" aria-hidden="true" />;
      case 'umbrella': return <Umbrella className="h-8 w-8 text-white" aria-hidden="true" />;
      default: return <Shield className="h-8 w-8 text-white" aria-hidden="true" />;
    }
  };

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
                Personal Lines Insurance Services in San Mateo
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fadeUp" delay={0.4}>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                From auto and home insurance to renters and umbrella policies, I provide comprehensive 
                personal lines coverage tailored to your lifestyle. Serving San Mateo, Burlingame, 
                Foster City, Redwood City, and beyond.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Coverage Details */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Coverage Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each policy is customized to your specific needs, ensuring you have the right protection at the right price.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Auto Insurance Details */}
            <AnimatedSection animation="fadeUp" delay={0.1}>
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-lg"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <AnimatedSection animation="scale" delay={0.2}>
                    <div className="bg-blue-700 w-12 h-12 rounded-lg flex items-center justify-center">
                      <Car className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                  </AnimatedSection>
                  <h3 className="text-2xl font-bold text-gray-900">Auto Insurance Coverage</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Liability coverage (required in CA)',
                    'Collision and comprehensive',
                    'Uninsured/underinsured motorist',
                    'Medical payments coverage',
                    'Personal injury protection',
                    'Rental car reimbursement'
                  ].map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" aria-hidden="true" />
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedSection>

            {/* Home Insurance Details */}
            <AnimatedSection animation="fadeUp" delay={0.2}>
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-lg"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <AnimatedSection animation="scale" delay={0.3}>
                    <div className="bg-blue-700 w-12 h-12 rounded-lg flex items-center justify-center">
                      <Home className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                  </AnimatedSection>
                  <h3 className="text-2xl font-bold text-gray-900">Home Insurance Coverage</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Dwelling and structure protection',
                    'Personal property coverage',
                    'Liability and medical payments',
                    'Additional living expenses',
                    'Earthquake coverage options',
                    'Valuable items protection'
                  ].map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" aria-hidden="true" />
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedSection>

            {/* Renters Insurance Details */}
            <AnimatedSection animation="fadeUp" delay={0.3}>
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-lg"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <AnimatedSection animation="scale" delay={0.4}>
                    <div className="bg-blue-700 w-12 h-12 rounded-lg flex items-center justify-center">
                      <Shield className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                  </AnimatedSection>
                  <h3 className="text-2xl font-bold text-gray-900">Renters Insurance Coverage</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Personal belongings protection',
                    'Liability coverage',
                    'Medical payments to others',
                    'Additional living expenses',
                    'Identity theft coverage',
                    'Off-premises coverage'
                  ].map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" aria-hidden="true" />
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedSection>

            {/* Umbrella Insurance Details */}
            <AnimatedSection animation="fadeUp" delay={0.4}>
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-lg"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <AnimatedSection animation="scale" delay={0.5}>
                    <div className="bg-blue-700 w-12 h-12 rounded-lg flex items-center justify-center">
                      <Umbrella className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                  </AnimatedSection>
                  <h3 className="text-2xl font-bold text-gray-900">Umbrella Insurance Coverage</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Excess liability protection',
                    'Covers multiple policies',
                    'Worldwide coverage',
                    'Legal defense costs',
                    'Personal injury protection',
                    'Property damage coverage'
                  ].map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" aria-hidden="true" />
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp" className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
              Why Choose Me for Your Bay Area Insurance Needs?
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="fadeUp" delay={0.1}>
              <div className="text-center space-y-4">
                <AnimatedSection animation="scale" delay={0.2}>
                  <motion.div 
                    className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Users className="h-8 w-8 text-white" aria-hidden="true" />
                  </motion.div>
                </AnimatedSection>
                <h3 className="text-xl font-semibold text-gray-900">Local Expertise</h3>
                <p className="text-gray-600">
                  Deep understanding of San Mateo and Bay Area insurance requirements, from earthquake 
                  coverage to California-specific regulations.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.2}>
              <div className="text-center space-y-4">
                <AnimatedSection animation="scale" delay={0.3}>
                  <motion.div 
                    className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Shield className="h-8 w-8 text-white" aria-hidden="true" />
                  </motion.div>
                </AnimatedSection>
                <h3 className="text-xl font-semibold text-gray-900">Personalized Service</h3>
                <p className="text-gray-600">
                  Every policy is tailored to your unique situation. I take time to understand your 
                  needs and find coverage that fits your lifestyle and budget.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.3}>
              <div className="text-center space-y-4">
                <AnimatedSection animation="scale" delay={0.4}>
                  <motion.div 
                    className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="h-8 w-8 text-white" aria-hidden="true" />
                  </motion.div>
                </AnimatedSection>
                <h3 className="text-xl font-semibold text-gray-900">Claims Support</h3>
                <p className="text-gray-600">
                  When you need to file a claim, I'm here to guide you through the process and 
                  advocate for your interests every step of the way.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700 text-white relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{ y: parallaxOffset * 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12" />
        </motion.div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fadeUp">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Get Protected?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get personalized insurance quotes for all your coverage needs. 
              I'll help you find the right protection at competitive rates.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => onNavigate('contact')}
                className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-blue-50 hover:scale-105 focus:outline-none"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Free Quotes
              </motion.button>
              <motion.a
                href="tel:+16505551234"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-blue-500 hover:scale-105 focus:outline-none"
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

export default Services;