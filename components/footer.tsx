"use client";

const Footer: React.FC = () => {
  // Smooth scroll handler function
  const smoothScroll = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="bg-black">
      <div className="max-w-screen-lg py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
        <div className="p-5 sm:w-2/12 border-r">
          <div className="text-sm uppercase text-white font-bold">Menu</div>
          <ul>
            <li className="my-2">
              <a
                onClick={(e) => smoothScroll(e, "home")}
                className="text-gray-400 hover:text-indigo-600 cursor-pointer"
              >
                Home
              </a>
            </li>
            <li className="my-2">
              <a
                onClick={(e) => smoothScroll(e, "about")}
                className="text-gray-400 hover:text-indigo-600 cursor-pointer"
              >
                About
              </a>
            </li>
            <li className="my-2">
              <a
                onClick={(e) => smoothScroll(e, "service")}
                className="text-gray-400 hover:text-indigo-600 cursor-pointer"
              >
                Services
              </a>
            </li>
            <li className="my-2">
              <a
                onClick={(e) => smoothScroll(e, "project")}
                className="text-gray-400 hover:text-indigo-600 cursor-pointer"
              >
                Projects
              </a>
            </li>
            <li className="my-2">
              <a
                onClick={(e) => smoothScroll(e, "contact")}
                className="text-gray-400 hover:text-indigo-600 cursor-pointer"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="p-5 sm:w-7/12 border-r text-center">
          <h3 className="font-bold text-xl text-white mb-4">Componentity</h3>
          <p className="text-gray-400 text-sm mb-10">
            Hello! As an AI web developer specializing in frontend design and full-stack development, I craft visually stunning,
            user-friendly websites tailored to your needs. Let's collaborate to create something amazing!
          </p>
        </div>
        <div className="p-5 sm:w-3/12">
          <div className="text-sm uppercase text-white font-bold">Contact Us</div>
          <ul>
            <li className="my-2">
              <a className="text-gray-400 hover:text-indigo-600" href="mailto:waleedmjaeed630@gmail.com">
                waleedmjaeed630@gmail.com
              </a>
            </li>
            <li className="my-2">
              <a className="text-gray-400 hover:text-indigo-600" href="tel:+923347905592">
                0334 7905592
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex py-5 m-auto text-white text-sm flex-col items-center border-t max-w-screen-xl">
        <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex"></div>
        <div className="my-5">&copy; Copyright 2025. Waleed Majeed. All Rights Reserved. Created with passion and code.</div>
      </div>
    </div>
  );
};

export default Footer;
