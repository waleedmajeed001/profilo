import React from "react";
import Image from "next/image";

// Define service items
const services = [
  { title: "Frontend Developer", imgSrc: "/frontend.png" },
  { title: "Backend Developer", imgSrc: "/backend.png" },
  { title: "Typescript", imgSrc: "/typescript.png" },
  { title: "React Framework", imgSrc: "/react.png" },
  { title: "FullStack Development", imgSrc: "/fullstack.png" },
  { title: "Next.js Expert", imgSrc: "/Next.png" },
  { title: "API Development", imgSrc: "/apii.png" },
  { title: "AI Integration", imgSrc: "/ai.png" },
];

const Service: React.FC = () => {
  return (
    <section className="py-12 bg-black text-white" id="service">
      <div className="max-w-screen-2xl mx-auto px-6">
        <h3 className="text-4xl font-semibold text-center mb-8">
          My Service
        </h3>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {services.map((service, idx) => (
            <ServiceCard key={idx} title={service.title} imgSrc={service.imgSrc} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  title: string;
  imgSrc: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, imgSrc }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-900 rounded-xl border border-gray-700 shadow-lg transition-transform duration-300 transform hover:scale-105 hover:bg-blue-600">
      <div className="relative w-32 h-32 mb-4">
        <Image
          src={imgSrc}
          alt={title}
          layout="fill"
          objectFit="contain"
          className="rounded-full border-2 border-gray-700"
        />
      </div>
      <p className="text-lg font-semibold">{title}</p>
    </div>
  );
};

export default Service;
