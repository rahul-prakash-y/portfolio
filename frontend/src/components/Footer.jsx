import React from 'react';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = ({ developerInfo }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: developerInfo.social.github, label: 'GitHub' },
    { icon: Linkedin, href: developerInfo.social.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: developerInfo.social.twitter, label: 'Twitter' },
    { icon: Mail, href: `mailto:${developerInfo.email}`, label: 'Email' },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              {developerInfo.name}
            </h3>
            <p className="text-gray-400 mb-4">
              {developerInfo.tagline}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-emerald-500 hover:to-cyan-500 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href={`mailto:${developerInfo.email}`} className="hover:text-emerald-400 transition-colors">
                  {developerInfo.email}
                </a>
              </li>
              <li>
                <a href={`tel:${developerInfo.phone}`} className="hover:text-emerald-400 transition-colors">
                  {developerInfo.phone}
                </a>
              </li>
              <li className="text-gray-400">{developerInfo.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} {developerInfo.name}. All rights reserved.
            </p>
            <div className="text-gray-400 text-sm flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-red-500 fill-current" /> using MERN Stack
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
