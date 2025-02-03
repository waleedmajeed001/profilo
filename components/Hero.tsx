"use client";
import Typed from 'typed.js';
import { useEffect } from 'react';
import Image from 'next/image'; // Import Image from next/image

const Home = () => {
  useEffect(() => {
    const typed = new Typed('.typing', {
      strings: ['', 'FullStack Development,', 'Frontend Development,', 'Backend Development,', 'Api Development', 'Agentic AI', 'ChatGPT Agents'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  

  return (
    <div className="w-full min-h-screen bg-black text-white" id='home'>
      {/* First Layer */}
      <div className="w-full mx-auto relative top-12 pb-20 xl:px-16 px-8 flex md:flex-row flex-col gap-4 justify-center items-center pb-10 pt-4">
        <div className="w-full relative">
          <Image
            className="shadow-2xl shadow-rose-600 animate-[spin_12s_linear_infinite] absolute left-0 right-0 rounded-full lg:max-w-[70%] max-w-[60%] mx-auto"
            src="/mypic.png" // Path to image inside the public folder
            alt="My Image"
            width={500}  // Adjust width as needed
            height={500} // Adjust height as needed
          />
          <Image
            className="relative z-10 rounded-full lg:max-w-[70%] max-w-[60%] mx-auto outline outline-[.7rem] outline-offset-[.1rem] outline-rose-400/30"
            src="/mypic.png" // Path to image inside the public folder
            alt="My Image"
            width={500}  // Adjust width as needed
            height={500} // Adjust height as needed
          />
        </div>
        <div className="w-full flex flex-col justify-center gap-4 md:text-left text-center text-white md:mt-0 sm:mt-8 mt-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-semibold font-serif">
            Hello, My name is Waleed Majeed
          </h1>
          <h3 className="capitalize text-rose-400">
            My Experience in <span className="typing text-green-500 dark:text-green-700 font-extrabold ">fullstack development</span>
          </h3>
          <p>
            Experienced in Frontend development with 5 months of expertise in Agentic AI, Next.js, Backend Development, API Development, ChatGPT Agents, and some TypeScript experience.
          </p>
        </div>
      </div>

      {/* Second Layer */}
      <div className="w-full mx-auto relative top-12 pb-20 xl:px-16 px-8 flex md:flex-row flex-col gap-4 justify-center items-center pb-10 pt-4">
        <div className="w-full flex flex-col justify-center gap-4 md:text-left text-center text-white md:mt-0 sm:mt-8 mt-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-semibold font-serif">
            About Me
          </h1>
          <p>
            I am passionate about creating seamless and efficient solutions. I specialize in web development, APIs, and AI-driven applications.
          </p>
        </div>
        <div className="w-full relative flex justify-center">
          {/* Image with bold outline */}
          <Image
            className="shadow-2xl shadow-rose-600 animate-[spin_12s_linear_infinite] absolute left-0 right-0 rounded-full lg:max-w-[70%] max-w-[60%] mx-auto"
            src="/mypic1.png" // Path to image inside the public folder
            alt="My Image"
            width={500}  // Adjust width as needed
            height={500} // Adjust height as needed
          />
          <Image
            className="relative z-10 rounded-full lg:max-w-[70%] max-w-[60%] mx-auto outline outline-[.7rem] outline-offset-[.1rem] outline-rose-400/30"
            src="/mypic1.png" // Path to image inside the public folder
            alt="My Image"
            width={500}  // Adjust width as needed
            height={500} // Adjust height as needed
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
