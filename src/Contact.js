import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-fade-in">Get In Touch</h2>
        <p className="text-lg mb-10 animate-fade-in-delay">
          Have a question or want to work together? Feel free to reach out!
        </p>
        <form className="space-y-6 animate-fade-in-up">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-gray-700 bg-opacity-50 border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-gray-700 bg-opacity-50 border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              rows="6"
              className="w-full p-4 rounded-lg bg-gray-700 bg-opacity-50 border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-400 text-gray-900 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-500 transition-all duration-300 transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
        <div className="mt-12 flex justify-center space-x-6 animate-fade-in-delay-2">
          <a href="https://github.com/devpatel03" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors duration-300">
            <Github className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/devpatel341/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors duration-300">
            <Linkedin className="w-8 h-8" />
          </a>
          <a href="https://www.instagram.com/devpatel_14/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors duration-300">
            <Instagram className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
