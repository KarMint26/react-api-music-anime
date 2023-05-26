import React from "react";
import CarouselHero from "../components/CarouselHero";

const About = () => {
  return (
    <>
      <CarouselHero />
      <div className="wrapper flex dark:text-white mb-56 sm:mb-5 justify-center my-5 items-center flex-col">
        <div className="title">
          <h1 className="sm:text-4xl text-2xl font-primary font-bold">
            About Anmusic
          </h1>
        </div>
        <div className="content sm:px-60 text-center my-4">
          <p className="text-lg sm:text-xl px-5">
            Anmusic is a website that provides anime music services that has a
            lot of music data in it and supports links to listen to it on
            Spotify, YouTube, or iTunes.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
