import React from 'react';
import profileImage from './assets/profile-image.jpg';

const Home = ({ scrollToSection }) => {
    return (
         <section id="home" className="relative min-h-screen flex items-center justify-center text-center bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden pt-16 px-4">
            <div className="absolute inset-0 z-0 opacity-10">
                {/* Animate background circles */}
                <div className="absolute w-48 h-48 bg-gray-700 rounded-full animate-pulse-slow top-1/4 left-1/4"></div>
                <div className="absolute w-32 h-32 bg-gray-700 rounded-full animate-pulse-slow bottom-1/3 right-1/3 animation-delay-2000"></div>
                <div className="absolute w-64 h-64 bg-gray-700 rounded-full animate-pulse-slow top-1/2 right-1/4 animation-delay-4000"></div>
            </div>
            <div className="realtive z-10 p-6 max-w-4x1 mx-auto">
                <img
                src={profileImage}
                alt="Profile Picture"
                className="object-cover w-30 h-30 md:w-48 md:h-48 rounded-full mx-auto mb-6 shadow-lg transform transition-transform duration-300 hover:scale-105 animate-fade-in"
                />
                <h1 className="text-4x1 md:text-6x1 font-extrabold mb-4 animate-slide-up">
                    Hi, I'm Dev Patel.
                </h1>
                <p className="text-lg md:text-2x1 mb-8 animate-fade-in-delay">
                    I'm a software engineer with a passion for building responsive and user-friendly applications.
                    I value collaboration and attention to detail and tend to continuously learn new tools to improve the way I develop software.
                    My journey into coding began with a curiosity for how websites work,
                    which quickly evolved into a drive to build them myself. I love solving complex
                    problems and continuously learning new technologies to enhance my skills.
                </p>
                <button 
                onClick={() => scrollToSection('projects')}
                className="bg-blue-400 text-gray-900 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 animate-pop-in"
                >
                    View My Work
                </button>
            </div>
         </section>
  );
};

export default Home;