import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

import "./Work.scss";

const Work = () => {
  const worksData = [
    {
      title: "My Portfolio Website v2",
      description:
        "A website about my skills, work and experience in Frontend Development which I built using React",
      projectLink: "https://babalwambolekwa.netlify.app/",
      codeLink: "https://github.com/Babalwa01/babalwa-mbolekwa",
      imgUrl: images.work01,
      tags: ["Website", "All"],
    },
    {
      title: "Restaurant Landing page",
      description:
        "(In progress): A restaurant landing page which I am currently building using React",
      projectLink: "https://babalwambolekwa.netlify.app/",
      codeLink: "https://github.com/Babalwa01/grooveavenue",
      imgUrl: images.work02,
      tags: ["Website", "All"],
    },
    {
      title: "My Portfolio Website v1",
      description:
        "A beginner website about my skills, work and experience which I built using HTML, CSS & JavaScript",
      projectLink: "https://babalwa01.github.io/",
      codeLink: "https://github.com/Babalwa01/Babalwa01.github.io",
      imgUrl: images.work01,
      tags: ["Website", "All"],
    },
    {
      title: "COVID-19 Tracker",
      description:
        "An app showing global COVID-19 statistics built with React, ChartJS, Material UI and RapidAPI",
      projectLink: "https://babalwa01.github.io/covid19-statistics/",
      codeLink: "https://github.com/Babalwa01/covid19-statistics",
      imgUrl: images.work03,
      tags: ["Web App", "All"],
    },
    {
      title: "Memory Game",
      description: "A cool memory game built with HTML, CSS and JavaScript",
      projectLink: "https://babalwa01.github.io/memory-game/",
      codeLink: "https://github.com/Babalwa01/memory-game",
      imgUrl: images.about02,
      tags: ["Web App", "All"],
    },
    {
      title: "Tic Tac Toe Game",
      description:
        "A cool tic tac toe game built with HTML, CSS and JavaScript",
      projectLink: "https://babalwa01.github.io/tic-tac-toe/",
      codeLink: "https://github.com/Babalwa01/tic-tac-toe",
      imgUrl: images.about03,
      tags: ["Web App", "All"],
    },
  ];
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    setWorks(worksData);
    setFilterWork(worksData);
    // eslint-disable-next-line
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
        {["Web App", "Website", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
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
