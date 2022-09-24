import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

import "./Work.scss";

const Work = () => {
  const worksData = [
    {
      title: "Food ordering App",
      description: "A modern UI Design built with Figma",
      projectLink:
        "https://www.figma.com/proto/ChL0kuCyHiqkgIeuaZLMBO/Food-ordering-App?node-id=2%3A2&scaling=scale-down&page-id=0%3A1",
      codeLink:
        "https://www.figma.com/file/ChL0kuCyHiqkgIeuaZLMBO/Food-ordering-App?node-id=0%3A1",
      imgUrl: images.about01,
      tags: ["UI Design", "All"],
    },
    {
      title: "Memory Game",
      description: "A cool memory game built with HTML, CSS and JavaScript",
      projectLink: "https://babalwa01.github.io/memory-game/",
      codeLink: "https://github.com/Babalwa01/memory-game",
      imgUrl: images.about02,
      tags: ["Website", "All"],
    },
    {
      title: "Tic Tac Toe Game",
      description:
        "A cool tic tac toe game built with HTML, CSS and JavaScript",
      projectLink: "https://babalwa01.github.io/tic-tac-toe/",
      codeLink: "https://github.com/Babalwa01/tic-tac-toe",
      imgUrl: images.about03,
      tags: ["Website", "All"],
    },
  ];
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    setWorks(worksData);
    setFilterWork(worksData);
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span>
      </h2>
      <div className="app__work-filter">
        {["UI Design", "Web App", "Website", "React JS", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
