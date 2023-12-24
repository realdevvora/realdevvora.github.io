import React, { useEffect, useState } from 'react';

export default function Header() {
  const [scrollOpacity, setScrollOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headerHeight = 64; // Adjust this based on your actual header height

      // Calculate the opacity based on the scroll position
      const opacity = Math.min(1, scrollPosition / headerHeight);

      setScrollOpacity(opacity);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToProjects = () => {
    document.getElementById('nextSection1').scrollIntoView({
      behavior: 'smooth',
    });
  };

  const scrollToSkills = () => {
    document.getElementById('nextSection2').scrollIntoView({
      behavior: 'smooth',
    });
  };

  const scrollToInvolvement = () => {
    document.getElementById('nextSection3').scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-10">
      <nav
        className={`border-gray-200 bg-orange-300 transition-opacity duration-300`}
        style={{ opacity: scrollOpacity }}
      >
        <div className="flex justify-between items-center mx-auto max-w-screen-xl p-4">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Dev Vora
          </span>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a onClick={scrollToProjects} className="text-sm text-gray-500 dark:text-white hover:underline">
              Projects
            </a>
            <a onClick={scrollToSkills} className="text-sm text-gray-500 dark:text-white hover:underline">
              Skills
            </a>
            <a onClick={scrollToInvolvement} className="text-sm text-gray-500 dark:text-white hover:underline">
              Involvement
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
