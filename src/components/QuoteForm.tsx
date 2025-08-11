import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { ContactFormData } from '../types';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    insuranceType: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formatPhoneNumber = (value: string): string => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    
    // Limit to 10 digits
    const limitedDigits = digits.slice(0, 10);
    
    // Format as (000) 000-0000
    if (limitedDigits.length >= 6) {
      return `(${limitedDigits.slice(0, 3)}) ${limitedDigits.slice(3, 6)}-${limitedDigits.slice(6)}`;
    } else if (limitedDigits.length >= 3) {
      return `(${limitedDigits.slice(0, 3)}) ${limitedDigits.slice(3)}`;
    } else if (limitedDigits.length > 0) {
      return `(${limitedDigits}`;
    }
    return '';
  };

  const insuranceTypes = [
    'Auto Insurance',
    'Home Insurance',
    'Renters Insurance',
    'Umbrella Insurance',
    'Multiple Policies',
    'Other'
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.insuranceType) {
      newErrors.insuranceType = 'Please select an insurance type';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      const formattedPhone = formatPhoneNumber(value);
      setFormData(prev => ({
        ...prev,
        [name]: formattedPhone
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        insuranceType: '',
        message: ''
      });
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <AnimatedSection animation="scale">
        <motion.div 
          className="bg-green-50 border border-green-200 rounded-lg p-8 text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
          >
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
          </motion.div>
          <h3 className="text-xl font-semibold text-green-800 mb-2">Thank you for your request!</h3>
          <p className="text-green-700">
            I'll review your information and get back to you within 24 hours with a personalized quote.
          </p>
          <motion.button
            onClick={() => setIsSubmitted(false)}
            className="mt-4 text-blue-700 hover:text-blue-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-700 rounded px-2 py-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Submit another request
          </motion.button>
        </motion.div>
      </AnimatedSection>
    );
  }

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg p-8"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatedSection animation="fadeUp">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Quote</h3>
          <p className="text-gray-600">
            Fill out the form below and I'll provide you with a personalized insurance quote within 24 hours.
          </p>
        </div>
      </AnimatedSection>

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatedSection animation="fadeUp" delay={0.1}>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name <span className="text-red-500" aria-label="required">*</span>
            </label>
            <motion.input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 ${
                errors.name ? 'border-red-300 focus:ring-red-700' : 'border-gray-300'
              }`}
              placeholder="Enter your full name"
              required
              aria-describedby={errors.name ? 'name-error' : undefined}
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={0.2}>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address <span className="text-red-500" aria-label="required">*</span>
            </label>
            <motion.input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 ${
                errors.email ? 'border-red-300 focus:ring-red-700' : 'border-gray-300'
              }`}
              placeholder="your@email.com"
              required
              aria-describedby={errors.email ? 'email-error' : undefined}
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatedSection animation="fadeUp" delay={0.3}>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number <span className="text-red-500" aria-label="required">*</span>
            </label>
            <motion.input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 ${
                errors.phone ? 'border-red-300 focus:ring-red-700' : 'border-gray-300'
              }`}
              placeholder="(650) 555-1234"
              required
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={0.4}>
            <label htmlFor="insuranceType" className="block text-sm font-medium text-gray-700 mb-2">
              Insurance Type <span className="text-red-500" aria-label="required">*</span>
            </label>
            <motion.select
              id="insuranceType"
              name="insuranceType"
              value={formData.insuranceType}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 ${
                errors.insuranceType ? 'border-red-300 focus:ring-red-700' : 'border-gray-300'
              }`}
              required
              aria-describedby={errors.insuranceType ? 'insurance-type-error' : undefined}
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <option value="">Select insurance type</option>
              {insuranceTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </motion.select>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fadeUp" delay={0.5}>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Additional Information
          </label>
          <motion.textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700"
            placeholder="Tell me about your insurance needs, current coverage, or any questions you have..."
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          />
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={0.6}>
          <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-blue-800 focus:outline-none focus-visible:outline-none active:outline-none disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="h-5 w-5" aria-hidden="true" />
              <span>Get My Free Quote</span>
            </>
          )}
          </motion.button>
        </AnimatedSection>
      </form>
    </motion.div>
  );
};

export default QuoteForm;