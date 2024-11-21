// Footer.jsx
import React from 'react';

const Footer = () => {
  const companyInfo = {
    title: "Demo Trade",
    description: "Your trusted platform for practicing and mastering trading strategies in a risk-free environment."
  };

  const quickLinks = [
    { name: "Products", href: "#" },
    { name: "Services", href: "#" },
    { name: "Account Types", href: "#" },
    { name: "Company", href: "#" },
  ];

  const supportLinks = [
    { name: "FAQ", href: "#" },
    { name: "Contact Us", href: "mailto:support@demotrade.com" },
    { name: "Feedback", href: "#" },
    { name: "Live Chat", href: "#" },
  ];

  const contact = [
    { name: "support@demotrade.com", href: "mailto:support@demotrade.com" },
    { name: "Live Chat Support", href: "#" },
  ];

  const footerLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Security", href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">{companyInfo.title}</h3>
            <p className="text-sm">{companyInfo.description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map(support => (
                <li key={support.name}>
                  <a href={support.href} className="hover:text-white transition-colors">{support.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-2">
              {contact.map(contactItem => (
                <li key={contactItem.name}>
                  <a href={contactItem.href} className="hover:text-white transition-colors">{contactItem.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © {new Date().getFullYear()} Demo Trade. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {footerLinks.map(link => (
                <a key={link.name} href={link.href} className="hover:text-white transition-colors">{link.name}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;