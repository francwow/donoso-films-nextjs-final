/* eslint-disable jsx-a11y/media-has-caption */
"use client";

import { useEffect, useState } from "react";
import Video from "./Video";
import Audio from "./Audio";

const videoArr = [
  { src: "/video/reel-final2.mp4", type: "mp4" },
  { src: "/video/reel-final.mov", type: "mov" },
];

const IntroReel = () => {
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const translate = () => {
      let scrollY = window.scrollY;
      setTranslateY(scrollY);
    };

    window.addEventListener("scroll", translate);

    return () => {
      window.removeEventListener("scroll", translate);
    };
  }, []);

  return (
    <section className="intro-reel">
      <div
        style={{ opacity: `${0 + translateY / 1200}` }}
        className="reel-overlay"
      ></div>
      <div className="intro-video-wrapper">
        <Audio />
        <Video videoArr={videoArr} />
      </div>
    </section>
  );
};

export default IntroReel;
