import React, { useEffect } from 'react';
import { User, Heart, Shield, Award, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { updatePageSEO } from '../utils/seo';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import ParallaxImage from '../components/ParallaxImage';
import { useParallax } from '../hooks/useScrollAnimation';
import officeImg from '../assets/office.png'
import familyImg from '../assets/family.png'

interface AboutProps {
  onNavigate: (page: string) => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  useEffect(() => {
    updatePageSEO('about');
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
                About Ethan Li Insurance
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fadeUp" delay={0.4}>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                With over 15 years of experience serving San Mateo and the surrounding Bay Area, I'm dedicated to 
                protecting what matters most to you and your family with personalized insurance solutions.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fadeRight" delay={0.2}>
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  My Story
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  I started my insurance career with a simple mission: to provide local families 
                  with the personal attention and expert guidance they deserve when protecting their 
                  most valuable assets.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Having lived in the Bay Area for over two decades, I understand the unique challenges 
                  our community faces - from earthquake risks to high property values. This local 
                  knowledge, combined with my commitment to exceptional service, has helped me build 
                  lasting relationships with over 1,200 families across San Mateo County.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  When you work with me, you're not just getting an insurance policy, you're gaining 
                  a trusted advisor who will be there for you when you need it most.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeLeft" delay={0.4}>
              <div className="relative">
                <ParallaxImage
                  src={officeImg}
                  alt="Professional insurance agent Ethan Li in San Mateo office"
                  className="w-full h-96 rounded-2xl shadow-2xl"
                  parallaxSpeed={0}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything we do is guided by our commitment to protecting families and building 
              lasting relationships in the San Mateo community.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <AnimatedSection animation="fadeUp" delay={0.1}>
              <motion.div 
                className="text-center space-y-6"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatedSection animation="scale" delay={0.2}>
                  <motion.div 
                    className="bg-blue-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Heart className="h-10 w-10 text-white" aria-hidden="true" />
                  </motion.div>
                </AnimatedSection>
                <h3 className="text-2xl font-bold text-gray-900">Personal Care</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every client receives personalized attention and customized insurance solutions 
                  tailored to their unique needs and budget.
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.2}>
              <motion.div 
                className="text-center space-y-6"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatedSection animation="scale" delay={0.3}>
                  <motion.div 
                    className="bg-blue-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Shield className="h-10 w-10 text-white" aria-hidden="true" />
                  </motion.div>
                </AnimatedSection>
                <h3 className="text-2xl font-bold text-gray-900">Trust & Integrity</h3>
                <p className="text-gray-600 leading-relaxed">
                  We build relationships based on honesty, transparency, and always putting 
                  our clients' best interests first.
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.3}>
              <motion.div 
                className="text-center space-y-6"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatedSection animation="scale" delay={0.4}>
                  <motion.div 
                    className="bg-blue-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Award className="h-10 w-10 text-white" aria-hidden="true" />
                  </motion.div>
                </AnimatedSection>
                <h3 className="text-2xl font-bold text-gray-900">Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  We strive for excellence in everything we do, from finding the best coverage 
                  to providing outstanding claims support.
                </p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Meet the Agent Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fadeRight" delay={0.2}>
              <div className="relative">
                <ParallaxImage
                  src={familyImg}
                  alt="Insurance agent portrait"
                  className="w-full h-96 rounded-2xl shadow-2xl"
                  parallaxSpeed={0}
                />
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeLeft" delay={0.4}>
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Meet Ethan Li
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  As a licensed insurance professional with deep roots in San Mateo, I bring both 
                  expertise and genuine care to every client relationship. My approach is simple: 
                  listen first, then find the right solutions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5 text-blue-700" aria-hidden="true" />
                    <span className="text-gray-700">Licensed Insurance Agent (CA License #0A12345)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-700" aria-hidden="true" />
                    <span className="text-gray-700">San Mateo Resident for 20+ Years</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-blue-700" aria-hidden="true" />
                    <span className="text-gray-700">Top Producer & Customer Service Awards</span>
                  </div>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  When I'm not helping families protect their futures, you'll find me volunteering 
                  at local community events, hiking the beautiful Bay Area trails, or spending 
                  time with my own family right here in San Mateo.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp" className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-600">
              Ready to discuss your insurance needs? I'm here to help with personalized service 
              and expert guidance.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <AnimatedSection animation="fadeUp" delay={0.1}>
              <motion.div 
                className="bg-white rounded-lg p-6 text-center shadow-lg h-full flex flex-col justify-center"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatedSection animation="scale" delay={0.2}>
                  <div className="bg-blue-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                </AnimatedSection>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Me</h3>
                <motion.a
                  href="tel:+16504651676"
                  className="text-blue-700 hover:text-blue-800 font-semibold transition-colors duration-200 focus:outline-none rounded px-2 py-1"
                  aria-label="Call us at 650-465-1676"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  (650) 465-1676
                </motion.a>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.2}>
              <motion.div 
                className="bg-white rounded-lg p-6 text-center shadow-lg h-full flex flex-col justify-center"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatedSection animation="scale" delay={0.3}>
                  <div className="bg-blue-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                </AnimatedSection>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Me</h3>
                <motion.a
                  href="mailto:alex@xelaweb.dev"
                  className="text-blue-700 hover:text-blue-800 font-semibold transition-colors duration-200 focus:outline-none rounded px-2 py-1 text-sm break-all"
                  aria-label="Email us at ethan@ethanli.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  ethan@ethanli.com
                </motion.a>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.3}>
              <motion.div 
                className="bg-white rounded-lg p-6 text-center shadow-lg h-full flex flex-col justify-center"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatedSection animation="scale" delay={0.4}>
                  <div className="bg-blue-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                </AnimatedSection>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Me</h3>
                <p className="font-medium text-blue-700">123 Main St, San Mateo, CA</p>
                {/* <p className="text-sm text-gray-600 mt-1">Serving all of San Mateo County</p> */}
              </motion.div>
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
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let me show you what personalized insurance service looks like. 
              Get your free quote and discover the peace of mind that comes with proper protection.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => onNavigate('contact')}
                className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 hover:bg-blue-50 focus:outline-none focus-visible:outline-none active:outline-none flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Get Your Free Quote</span>
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </motion.button>
              <motion.a
                href="tel:+16504651676"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 hover:bg-blue-500 focus:outline-none focus-visible:outline-none active:outline-none"
                aria-label="Call us at 650-465-1676"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Call (650) 465-1676
              </motion.a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;