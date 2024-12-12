import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function SocialShare() {
  const socialLinks = [
    { icon: <Facebook />, label: "Facebook", href: "#" },
    { icon: <Twitter />, label: "Twitter", href: "#" },
    { icon: <Instagram />, label: "Instagram", href: "#" },
    { icon: <Linkedin />, label: "LinkedIn", href: "#" },
  ];

  return (
    <div>
      <h4 className="text-lg font-medium mb-4">Compartilhe</h4>
      <div className="flex space-x-4">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            className="text-gray-600 hover:text-green-600 transition"
            aria-label={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
}