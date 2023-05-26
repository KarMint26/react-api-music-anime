import React from "react";
import CarouselHero from "../components/CarouselHero";
import { useState } from "react";
import CustomHooks from "../hooks/CustomHooks";
import youtubeImg from "../assets/youtube.png";
import itunesImg from "../assets/itunes.png";
import spotifyImg from "../assets/spotify.png";
import { Tooltip } from "@material-tailwind/react";
import Loading from "../components/Loading";

const Home = () => {
  const { loading, error, response } = CustomHooks();
  return (
    <div>
      {loading && (
        <>
          <Loading />
        </>
      )}
      {error && (
        <>
          <Error />
        </>
      )}
      {response && (
        <>
          <CarouselHero />
          <div className="text-center my-10">
            <h1 className="font-semibold dark:text-white sm:text-4xl text-xl font-primary">
              Welcome to Anime Music
            </h1>
            <p className="dark:text-white font-primary text-sm sm:text-lg">
              Listen to Your Best Music
            </p>
          </div>
          <div className="flex justify-center items-center gap-10 flex-wrap px-24 mb-10">
            {response.slice(0, 9).map((data, i) => {
              return (
                <div>
                  <div className="data-api" key={i}>
                    <div className="field dark:bg-slate-700 dark:shadow-slate-400 dark:shadow-md rounded-lg overflow-hidden bg-white shadow-lg">
                      <img
                        src={data.imageUrl}
                        className="w-[300px] hover:scale-105 hover:grayscale-[20%] transition"
                        alt="image-url"
                      />
                      <h1 className="text-lg sm:text-xl font-primary font-bold py-3 text-center text-slate-700 dark:text-white">
                        {data.title}
                      </h1>
                      <div className="listen-link flex justify-center p-5 items-center gap-4">
                        <Tooltip
                          content={
                            <div className="bg-slate-700 text-white dark:text-black dark:bg-slate-300 p-2 px-4 rounded-lg">
                              Youtube
                            </div>
                          }
                          animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0, y: 25 },
                          }}
                          placement="bottom-end"
                        >
                          <div className="youtube">
                            <a href={data.mediaUrl.youtube} target="_blank">
                              <img
                                className="scale-125"
                                src={youtubeImg}
                                alt="youtube-img"
                              />
                            </a>
                          </div>
                        </Tooltip>
                        <Tooltip
                          content={
                            <div className="bg-slate-700 text-white dark:text-black dark:bg-slate-300 p-2 px-4 rounded-lg">
                              iTunes
                            </div>
                          }
                          animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0, y: 25 },
                          }}
                          placement="bottom-end"
                        >
                          <div className="itunes">
                            <a href={data.mediaUrl.itunes} target="_blank">
                              <img
                                className="scale-90"
                                src={itunesImg}
                                alt="itunes-img"
                              />
                            </a>
                          </div>
                        </Tooltip>
                        <Tooltip
                          content={
                            <div className="bg-slate-700 text-white dark:text-black dark:bg-slate-300 p-2 px-4 rounded-lg">
                              Spotify
                            </div>
                          }
                          animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0, y: 25 },
                          }}
                          placement="bottom-end"
                        >
                          <div className="spotify">
                            <a href={data.mediaUrl.spotify} target="_blank">
                              <img
                                src={spotifyImg}
                                className="scale-90"
                                alt="spotify-img"
                              />
                            </a>
                          </div>
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
