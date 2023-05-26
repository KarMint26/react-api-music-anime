import React from "react";
import { useState } from "react";
import CustomHooks from "../hooks/CustomHooks";
import { Tooltip } from "@material-tailwind/react";
import youtubeImg from "../assets/youtube.png";
import itunesImg from "../assets/itunes.png";
import spotifyImg from "../assets/spotify.png";
import Loading from "./Loading";
import { useEffect } from "react";

const ItemMusic = () => {
  const { loading, error, response } = CustomHooks();

  return (
    <>
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
      <div className="flex justify-center items-center gap-10 flex-wrap px-24 mb-10">
        {response && (
          <>
            {response.map((res, i) => {
              return (
                <div>
                  <div className="data-api" key={i}>
                    <div className="field dark:bg-slate-700 sm:h-[460px] sm:w-[300px] dark:shadow-slate-400 dark:shadow-md rounded-lg overflow-hidden bg-white shadow-lg">
                      <img
                        src={res.imageUrl}
                        className="w-[300px] hover:scale-105 hover:grayscale-[20%] transition"
                        alt="image-url"
                      />
                      <h1 className="text-lg sm:text-xl w-[80%] mx-auto font-primary font-bold py-3 text-center text-slate-700 dark:text-white">
                        {res.title}
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
                            <a href={res.mediaUrl.youtube} target="_blank">
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
                            <a href={res.mediaUrl.itunes} target="_blank">
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
                            <a href={res.mediaUrl.spotify} target="_blank">
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
          </>
        )}
      </div>
    </>
  );
};

export default ItemMusic;
