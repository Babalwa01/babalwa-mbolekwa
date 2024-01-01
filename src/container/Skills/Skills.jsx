import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Skills.scss";

const Skills = () => {
  const experienceData = [
    {
      name: "Web Developer",
      company: "Rentoza",
      description: "Web Development",
      time: "January 2024 - Present",
    },
    {
      name: "Associate Engineer",
      company: "Zepz",
      description: "Fullstack Development",
      time: "January 2023 - December 2023",
    },
    {
      name: "Junior Frontend Developer",
      company: "ClearScore",
      description: "Enhanced and maintained the ClearScore website and the webapp",
      time: "May 2022 - November 2022",
    },
    {
      name: "Junior Ed-Tech Platform Developer",
      company: "Umuzi",
      description:
        "Enhanced and maintained a webapp learning platform called Tilde",
      time: "June 2021 - April 2022",
    },
    {
      name: "Web Development Bootcamp Learner",
      company: "Umuzi",
      description:
        "Web Development Learnership and Training",
      time: "September 2020 - May 2021",
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
      name: "NPM",
      icon: images.npm,
    },
    {
      name: "Git",
      icon: images.git,
    },
    {
      name: "Github",
      icon: images.github,
    },
    {
      name: "Sass",
      icon: images.sass,
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
      name: "Figma",
      icon: images.figma,
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
      name: "Confluence",
      icon: images.confluence,
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
