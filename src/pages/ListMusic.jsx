import React from "react";
import CarouselHero from "../components/CarouselHero";
import ItemMusic from "../components/ItemMusic";

const ListMusic = () => {
  return (
    <>
      <CarouselHero />
      <div className="text-center my-10">
        <h1 className="font-semibold text-2xl dark:text-white sm:text-4xl font-primary">
          List Anime Music
        </h1>
        <p className="dark:text-white font-primary text-sm sm:text-lg">
          Listen for Best Experience
        </p>
      </div>
      <ItemMusic />
    </>
  );
};

export default ListMusic;
