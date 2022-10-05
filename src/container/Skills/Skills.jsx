import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Skills.scss";

const Skills = () => {
  const experienceData = [
    {
      name: "Junior Frontend Developer",
      company: "ClearScore",
      description: "Enhance and maintain the ClearScore website and the webapp",
      time: "May 2022 - Present",
    },
    {
      name: "Junior Web Developer",
      company: "Umuzi",
      description:
        "Enhanced and maintained a webapp learning platform called Tilde",
      time: "September 2020 - May 2022",
    },
    {
      name: "Space Technology Intern",
      company: "Astrofica Technologies",
      description: "Developed and maintained a website",
      time: "March 2020 - August 2020",
    },
  ];

  const skillsData = [
    {
      name: "HTML",
      icon: images.html,
    },
    {
      name: "CSS",
      icon: images.css,
    },
    {
      name: "JavaScript",
      icon: images.javascript,
    },
    {
      name: "React",
      icon: images.react,
    },
    {
      name: "TypeScript",
      icon: images.typescript,
    },
    {
      name: "Git",
      icon: images.git,
    },
    {
      name: "Sass",
      icon: images.sass,
    },
    {
      name: "Figma",
      icon: images.figma,
    },
    {
      name: "Material UI",
      icon: images.mu5,
    },
    {
      name: "Storybook",
      icon: images.storybook,
    },
    {
      name: "APIs",
      icon: images.api,
    },
    {
      name: "Notion",
      icon: images.notion,
    },
    {
      name: "Jira",
      icon: images.jira,
    },
    {
      name: "Slack",
      icon: images.slack,
    },
    {
      name: "Zoom",
      icon: images.zoom,
    },
    {
      name: "MacOS",
      icon: images.macOS,
    },
  ];
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setExperience(experienceData);
    setSkills(skillsData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className="app__flex" style={{ backgroundColor: "#F0F2F5" }}>
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-exp">
          {experience.map((work) => (
            <>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-exp-work"
                data-tip
                data-for={work.name}
                key={work.name}
              >
                <h4 className="bold-text">{work.name}</h4>
                <p className="p-text">{work.company}</p>
                <p className="p-text">{work.time}</p>
              </motion.div>
              <ReactTooltip
                id={work.name}
                effect="solid"
                arrowColor="#fff"
                className="skills-tooltip"
              >
                {work.description}
              </ReactTooltip>
            </>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
