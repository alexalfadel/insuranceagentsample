import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { updatePageSEO } from '../utils/seo';
import { Testimonial } from '../types';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedCounter from '../components/AnimatedCounter';
import { useParallax } from '../hooks/useScrollAnimation';

interface TestimonialsProps {
  onNavigate: (page: string) => void;
}

const Testimonials: React.FC<TestimonialsProps> = ({ onNavigate }) => {
  useEffect(() => {
    updatePageSEO('testimonials');
  }, []);
  
  const parallaxOffset = useParallax(0.5);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect screen size for responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Chen',
      location: 'San Mateo, CA',
      rating: 5,
      text: 'Outstanding service from start to finish! When I moved to San Mateo, I needed new insurance quickly. The agent took time to understand my needs and found me better coverage at a lower price than my previous provider.'
    },
    {
      id: '2',
      name: 'Michael Rodriguez',
      location: 'Burlingame, CA',
      rating: 5,
      text: 'As a first-time homeowner in the Bay Area, I was overwhelmed by insurance options. The personalized approach made all the difference - explaining earthquake coverage, liability limits, and helping me understand what I actually needed.'
    },
    {
      id: '3',
      name: 'Jennifer Liu',
      location: 'Foster City, CA',
      rating: 5,
      text: 'Been working with this agent for over 5 years now. What sets them apart is the ongoing relationship - not just selling a policy and disappearing. When I had a claim last year, they walked me through everything.'
    },
    {
      id: '4',
      name: 'David Thompson',
      location: 'Redwood City, CA',
      rating: 5,
      text: 'Switched our family\'s auto and home insurance here three years ago and couldn\'t be happier. The agent really understands the unique challenges of Bay Area living - from earthquake coverage to high-value home protection.'
    },
    {
      id: '5',
      name: 'Maria Gonzalez',
      location: 'San Mateo, CA',
      rating: 5,
      text: 'Professional, knowledgeable, and genuinely cares about clients. When my son started driving, they helped me understand all the options for young driver coverage and found ways to keep our premiums reasonable.'
    },
    {
      id: '6',
      name: 'James Park',
      location: 'Belmont, CA',
      rating: 5,
      text: 'Exceptional claims support when we had water damage last spring. The agent was proactive, checking in throughout the process and ensuring we got everything we were entitled to. This is how insurance should work.'
    }
  ];

  // Auto-scroll carousel effect
  useEffect(() => {
    if (isPaused) return;
    const cardsToAdvance = isDesktop ? 2 : 1; // Always 1 for mobile/tablet, 2 for desktop

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = testimonials.length - cardsToAdvance;
        return prevIndex >= maxIndex ? 0 : prevIndex + cardsToAdvance;
      });
    }, 4000); // 4 seconds per slide

    return () => clearInterval(interval);
  }, [isPaused, isDesktop, testimonials.length]);

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1" aria-label={`${rating} out of 5 stars`}>
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
            aria-hidden="true"
          />
        ))}
      </div>
    );
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
                Client Reviews & Testimonials
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fadeUp" delay={0.4}>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Hear from San Mateo clients who trust me to protect their homes, cars, and families 
                with reliable coverage and exceptional service.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <AnimatedSection animation="fadeUp" delay={0.1}>
              <div>
                <AnimatedCounter 
                  end={15} 
                  suffix="+" 
                  className="text-4xl font-bold text-blue-700 mb-2"
                />
                <div className="text-gray-600 font-medium">Years of Service</div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeUp" delay={0.2}>
              <div>
                <AnimatedCounter 
                  end={1200} 
                  suffix="+" 
                  className="text-4xl font-bold text-blue-700 mb-2"
                />
                <div className="text-gray-600 font-medium">Families Protected</div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeUp" delay={0.3}>
              <div>
                <AnimatedCounter 
                  end={4.9} 
                  className="text-4xl font-bold text-blue-700 mb-2"
                />
                <div className="text-gray-600 font-medium">Average Rating</div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeUp" delay={0.4}>
              <div>
                <AnimatedCounter 
                  end={98} 
                  suffix="%" 
                  className="text-4xl font-bold text-blue-700 mb-2"
                />
                <div className="text-gray-600 font-medium">Client Retention</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our San Mateo Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real reviews from real families across San Mateo County who trust us with their insurance needs.
            </p>
          </AnimatedSection>

          <div className="relative w-full">
            {/* Viewport Container - Fixed height to prevent cut-off */}
            <div className="overflow-hidden mx-auto max-w-full" style={{ height: '400px' }}>
              {/* Scrollable Container - This is wider than viewport and scrolls */}
              <div 
                ref={carouselRef}
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{
                  transform: `translateX(-${currentIndex * (100 / (isDesktop ? 2 : 1))}%)`
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className="w-full lg:w-1/2 flex-shrink-0 px-3 h-full mb-4"
                  >
                    <AnimatedSection
                      animation="fadeUp"
                      delay={index * 0.1}
                      className="h-full"
                    >
                      <div className="bg-white rounded-2xl p-8 md:p-10 h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 relative border border-gray-100">
                        <Quote className="absolute top-4 right-4 md:top-6 md:right-6 h-6 w-6 md:h-8 md:w-8 text-blue-400 opacity-75" aria-hidden="true" />
                        
                        {/* Top section - Stars */}
                        <div className="relative z-10 mb-4 flex-shrink-0">
                          {renderStars(testimonial.rating)}
                        </div>

                        {/* Middle section - Quote (takes available space) */}
                        <blockquote className="text-gray-700 text-sm md:text-base leading-relaxed flex-grow relative z-10 mb-6 overflow-hidden">
                          <p className="line-clamp-6">"{testimonial.text}"</p>
                        </blockquote>

                        {/* Bottom section - Author info */}
                        <div className="border-t border-gray-100 pt-4 relative z-10 flex-shrink-0">
                          <cite className="not-italic">
                            <div className="font-semibold text-gray-900 text-sm md:text-base">{testimonial.name}</div>
                            <div className="text-xs md:text-sm text-gray-600">{testimonial.location}</div>
                          </cite>
                        </div>
                      </div>
                    </AnimatedSection>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
          </div>
          
          {/* Navigation Arrows - Positioned to sides of carousel */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={() => {
                const cardsToAdvance = isDesktop ? 2 : 1;
                setCurrentIndex(prev => Math.max(0, prev - cardsToAdvance));
              }}
              disabled={currentIndex === 0}
              className={`bg-white shadow-md rounded-full p-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              aria-label="Previous testimonials"
            >
              <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={() => {
                const cardsToAdvance = isDesktop ? 2 : 1;
                const maxIndex = testimonials.length - cardsToAdvance;
                setCurrentIndex(prev => Math.min(maxIndex, prev + cardsToAdvance));
              }}
              disabled={currentIndex >= testimonials.length - (isDesktop ? 2 : 1)}
              className={`bg-white shadow-md rounded-full p-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                currentIndex >= testimonials.length - (isDesktop ? 2 : 1) ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              aria-label="Next testimonials"
            >
              <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Carousel indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(testimonials.length / (isDesktop ? 2 : 1)) }).map((_, index) => {
              const groupIndex = index * (isDesktop ? 2 : 1);
              return (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(groupIndex)}
                  className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    Math.floor(currentIndex / (isDesktop ? 2 : 1)) === index 
                      ? 'w-8 bg-blue-600' 
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial group ${index + 1}`}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Families Choose Us
            </h2>
            <div className="mb-8"></div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection animation="fadeUp" delay={0.1}>
              <div className="text-center space-y-4">
                <AnimatedSection animation="scale" delay={0.2}>
                  <motion.div 
                    className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-2xl font-bold text-white">24/7</span>
                  </motion.div>
                </AnimatedSection>
                <h3 className="text-lg font-semibold text-gray-900">Claims Support</h3>
                <p className="text-gray-600 text-sm">
                  Around-the-clock assistance when you need to file a claim or have questions.
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
                    <span className="text-2xl font-bold text-white">CA</span>
                  </motion.div>
                </AnimatedSection>
                <h3 className="text-lg font-semibold text-gray-900">Local Expertise</h3>
                <p className="text-gray-600 text-sm">
                  Deep knowledge of California insurance requirements and Bay Area risks.
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
                    <span className="text-2xl font-bold text-white">$</span>
                  </motion.div>
                </AnimatedSection>
                <h3 className="text-lg font-semibold text-gray-900">Competitive Rates</h3>
                <p className="text-gray-600 text-sm">
                  We shop multiple carriers to find you the best coverage at the best price.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.4}>
              <div className="text-center space-y-4">
                <AnimatedSection animation="scale" delay={0.5}>
                  <motion.div 
                    className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-2xl font-bold text-white">♥</span>
                  </motion.div>
                </AnimatedSection>
                <h3 className="text-lg font-semibold text-gray-900">Personal Service</h3>
                <p className="text-gray-600 text-sm">
                  You're not just a policy number - you're part of our San Mateo family.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Review */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="scale">
            <motion.div 
              className="bg-blue-700 text-white rounded-2xl p-12 text-center relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative z-10">
                <Quote className="h-16 w-16 text-blue-300 mx-auto mb-8" aria-hidden="true" />
                <AnimatedSection animation="fadeUp" delay={0.2}>
                  <blockquote className="text-2xl font-light leading-relaxed mb-8 italic">
                    "This is exactly what insurance should be - personal service from someone who actually 
                    cares about protecting your family. The peace of mind is worth everything."
                  </blockquote>
                </AnimatedSection>
                <div className="flex justify-center mb-6">
                  {renderStars(5)}
                </div>
                <cite className="not-italic">
                  <div className="font-semibold text-xl">The Johnson Family</div>
                  <div className="text-blue-200">San Mateo, CA • Home & Auto Insurance</div>
                </cite>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{ y: parallaxOffset * 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12" />
        </motion.div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fadeUp">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Join Our Happy Clients?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the difference of working with a San Mateo insurance agent who puts your 
              family's protection first. Get your free quote today.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => onNavigate('contact')}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-blue-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Your Free Quote
              </motion.button>
              <motion.a
                href="tel:+16505551234"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-gray-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
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

export default Testimonials;