import React from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./About.scss";

const abouts = [
  {
    title: "Frontend Development",
    description:
      "I've got passion for creating beautiful websites and web applications.",
    imgUrl: images.about01,
  },
  {
    title: "React Development",
    description:
      "I build user-facing features consisting of reusable components using React.",
    imgUrl: images.about02,
  },
  {
    title: "Open Source Contribution",
    description:
      "I enjoy contributing to open source projects and sharing knowledge.",
    imgUrl: images.about03,
  },
  {
    title: "UI Design",
    description: "I enjoy creating UI designs using Figma.",
    imgUrl: images.about04,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I Know That <span>Good Apps</span>
        <br />
        mean <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
