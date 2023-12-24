import React from 'react';

export default function Hero() {
  const scrollToNextSection = () => {
    document.getElementById('nextSection1').scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div id="hero" className="min-h-screen flex items-center justify-center bg-blue-900 text-white">
      <div className="w-64 text-center">
        <h1 className="font-bold text-2xl mb-2">Hi! My name is Dev.</h1>
        <p>Welcome to my website</p>
        <button className="mt-4 bg-white text-blue-900 py-2 px-4 rounded-full animate-pulse" onClick={scrollToNextSection}>
          Learn more about me
        </button>
      </div>
      <img
        src="/project pfp.jpeg"
        alt="Picture of me"
        className="max-w-64 border-4 border-orange-300 rounded-full ml-4"
      />
    </div>
  );
}