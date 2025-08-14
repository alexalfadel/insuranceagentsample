import React from 'react';
import { Shield, Phone, Mail, Clock, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-blue-400" aria-hidden="true" />
              <div>
                <h3 className="text-xl font-bold">Ethan Li Insurance</h3>
                <p className="text-gray-300 text-sm">Personal Lines Agent</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted insurance partner in San Mateo, protecting what matters most to you and your family.
            </p>
            <p className="text-xs text-gray-400">
              License #: 0A12345
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2" role="navigation" aria-label="Footer navigation">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none text-left"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <a
                href="tel:+16504651676"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none"
                aria-label="Call us at 650-465-1676"
              >
                <Phone className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                <span>(650) 465-1676</span>
              </a>
              <a
                href="mailto:alex@xelaweb.dev"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none"
                aria-label="Email us at ethan@ethanli.com"
              >
                <Mail className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                <span>ethan@ethanli.com</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                <span>San Mateo, CA</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                {/* <Clock className="h-4 w-4 flex-shrink-0" aria-hidden="true" /> */}
                <div>
                  <p className="text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-sm">Sat: 9:00 AM - 2:00 PM</p>
                  <p className="text-sm">Sun: By appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Ethan Li Insurance. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              {/* <a href="#" className="hover:text-white transition-colors duration-200 focus:outline-none">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200 focus:outline-none">
                Terms of Service
              </a> */}
              <a href='https://xelaweb.dev/' target='_blank' className='hover:text-white'>Designed & Developed by Xela Web</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;