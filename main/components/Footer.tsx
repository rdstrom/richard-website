import React from 'react';
import { Heart } from 'lucide-react';
import { USER_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-12 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-6">Let's Work Together</h2>
        <p className="text-slate-400 mb-8 max-w-lg mx-auto">
          Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a 
          href={`mailto:${USER_INFO.email}`} 
          className="inline-block px-8 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-200 transition-colors mb-12"
        >
          Say Hello
        </a>

        <div className="flex justify-center items-center gap-2 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} {USER_INFO.name}. All rights reserved.</p>
          <span>|</span>
          <p className="flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;