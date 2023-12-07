import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

import "./Work.scss";

const Work = () => {
  const worksData = [
    {
      title: "My Portfolio Website",
      description:
        "A website about my skills and work experience in Web Development, which I built using React",
      projectLink: "https://babalwambolekwa.netlify.app/",
      codeLink: "https://github.com/Babalwa01/babalwa-mbolekwa",
      imgUrl: images.work01,
      tags: ["React/TypeScript", "All"],
    },
    {
      title: "Bayathandwa Day Care Website",
      description:
        "Non-Profit Organization Bayathandwa Day Care website, built using TypeScript and React",
      projectLink: "https://bayathandwadaycare.org/",
      codeLink: "https://github.com/Babalwa01/bayathandwa-day-care",
      imgUrl: images.daycare,
      tags: ["React/TypeScript", "All"],
    },
    {
      title: "Restaurant Landing page",
      description:
        "A restaurant website with content about food and entertainment, which I built using React",
      projectLink: "https://babalwa01.github.io/grooveavenue/",
      codeLink: "https://github.com/Babalwa01/grooveavenue",
      imgUrl: images.work02,
      tags: ["React/TypeScript", "All"],
    },
    {
      title: "Memory Game",
      description: "A cool memory game built with HTML, CSS and JavaScript",
      projectLink: "https://babalwa01.github.io/memory-game/",
      codeLink: "https://github.com/Babalwa01/memory-game",
      imgUrl: images.about02,
      tags: ["HTML, CSS, JS", "All"],
    },
    {
      title: "YouTube Clone App",
      description:
        "A responsive YouTube clone app which I built using React, Material UI and the YouTubev3 API",
      projectLink: "https://babalwayoutubeclone.netlify.app/",
      codeLink: "https://github.com/Babalwa01/youtube-clone",
      imgUrl: images.work03,
      tags: ["React/TypeScript", "All"],
    },
    {
      title: "Tic Tac Toe Game",
      description:
        "A cool tic tac toe game built with HTML, CSS and JavaScript",
      projectLink: "https://babalwa01.github.io/tic-tac-toe/",
      codeLink: "https://github.com/Babalwa01/tic-tac-toe",
      imgUrl: images.about03,
      tags: ["HTML, CSS, JS", "All"],
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
        {["HTML, CSS, JS", "React/TypeScript", "All"].map((item, index) => (
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
                <a
                  href={work.codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="app__work-hover_github"
                >
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
