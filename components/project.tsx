const Projects: React.FC = () => {
  const projectList = [
    {
      title: "Project 1: Portfolio Website",
      description:
        "A personal portfolio website showcasing my skills and projects built with React and Next.js.",
      link: "https://your-portfolio-link.com", // Replace with your actual project link
      image: "/screenshotpic1.png", // Replace with your project image link
    },
    {
      title: "Project 2: E-Commerce Platform",
      description:
        "An e-commerce platform for online shopping, featuring product management, user authentication, and payment integration.",
      link: "https://e-commerce-ikni.vercel.app/", // Replace with your actual project link
      image: "/e-commerce.png", // Replace with your project image link
    },
    {
      title: "Project 3: Dine Market",
      description:
        "A fully-functional e-commerce website with the ability to sell items and all iteams details for cloth shopping.",
      link: "https://dinemarket-sandy.vercel.app/", // Replace with your actual project link
      image: "/dinemarket.png", // Replace with your project image link
    },
    {
      title: "Project 4: Blog Website",
      description:
        "A fully-functional Blog website with the ability to read mangas and all iteams details for manga reading shopping.",
      link: "https://mangwa.vercel.app/", // Replace with your actual project link
      image: "/blog.png", // Replace with your project image link
    },
  ];

  return (
    <div className="h-auto py-16 bg-gray-100 dark:bg-black" id="project">
      <div className="max-w-6xl mx-auto w-full">
        <h4 className="text-3xl md:text-5xl dark:text-white font-bold mb-6 text-center">My Projects</h4>

        {/* Projects List */}
        <div>
          {projectList.map((project, index) => (
            <div
              key={index}
              className={`flex items-center mb-10 p-6 bg-white dark:bg-gray-900 hover:bg-blue-600 transition-transform duration-100 transform hover:scale-105 rounded-lg shadow-lg ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className="w-full sm:w-1/2 p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg shadow-md w-full object-cover h-64"
                />
              </div>

              {/* Project Info */}
              <div className="w-full sm:w-1/2 p-4">
                <h5 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
                  {project.title}
                </h5>
                <p className="text-base text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Visit Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
