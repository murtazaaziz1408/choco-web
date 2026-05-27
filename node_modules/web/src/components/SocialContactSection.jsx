import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

const SocialContactSection = () => {
  return (
    <div className="py-16 px-6 bg-secondary/30 rounded-3xl my-12 text-center max-w-4xl mx-auto">
      <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-4">
        Ready to place an order with Choco Charm?
      </h3>
      <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
        Connect with us directly to customize your order or inquire about our latest seasonal specials.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a 
          href="https://wa.me/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 w-full sm:w-auto justify-center"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp Us
        </a>
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-8 py-4 bg-gradient-to-tr from-[#fd5949] to-[#d6249f] hover:opacity-90 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 w-full sm:w-auto justify-center"
        >
          <Instagram className="w-5 h-5" />
          Follow on Instagram
        </a>
      </div>
    </div>
  );
};

export default SocialContactSection;