import React from "react";

const Skills: React.FC = () => {
  return (
    <div className="h-screen text-white flex justify-center items-center bg-black">
      <div className="max-w-xl mx-auto w-full">
        <h4 className="text-3xl md:text-5xl text-white font-bold mb-6">Skills</h4>

        {/* Skill Bars */}
        {[
          { label: "Frontend Developer", value: 80, color: "#FF6464" },
          { label: "Backend Developer", value: 65, color: "#9272D4" },
          { label: "Typescript", value: 80, color: "#5185D4" },
          { label: "React Framework", value: 55, color: "#CA56F2" },
          { label: "React", value: 76, color: "#61DAFB" },
          { label: "Next.js", value: 85, color: "blue" },
          { label: "Node.js", value: 80, color: "#68A063" },
          { label: "Api Developement", value: 50, color: "#F7DF1E" },
        ].map((skill, index) => (
          <div key={index} className="mb-7">
            <div className="flex justify-between py-1">
              <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">{skill.label}</span>
              <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">{skill.value}%</span>
            </div>
            <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
              <path className="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth="3" fillOpacity="0"></path>
              <path
                className="rc-progress-line-path"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke={skill.color}
                strokeWidth="3"
                fillOpacity="0"
                style={{
                  strokeDasharray: `${(skill.value / 100) * 100}px, 100px`,
                  strokeDashoffset: "0px",
                  transition: "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                }}
              ></path>
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
