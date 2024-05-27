"use client";
import Image from "next/image";
import { Game } from "../../types/game-details.types";
import useGameDetails from "../../hooks/use-game-details";

// Itt nincsenek meg a típusok

export default function GameDetails({ description, platforms, website }: Game) {
  const { modifiedGameDescription, isPlatformPc, reqMinimum, reqRecommended } =
    useGameDetails({ description, platforms });

  return (
    <div className="flex flex-nowrap pb-10 gap-4 max-md:flex-wrap">
      <div
        className="text-justify md:w-1/2"
        dangerouslySetInnerHTML={{ __html: modifiedGameDescription || "" }}
      ></div>
      <div className="md:w-1/2">
        <h2 className="text-2xl text-secondary">Platforms: </h2>
        <div className="grid grid-cols-6 max-lg:grid-cols-8 max-md:grid-cols-3 pt-5">
          {platforms.map(({ platform }) => {
            const platformIcon = `/images/platform-icons/${platform.slug}.svg`;
            return (
              <div key={platform.id}>
                <Image
                  className="w-14"
                  src={platformIcon}
                  alt={platform.name}
                  title={platform.name}
                  width="200"
                  height="200"
                />
              </div>
            );
          })}
        </div>
        <div>
          <h2 className="text-2xl text-secondary pt-10">
            System requirements:{" "}
          </h2>
          {isPlatformPc ? (
            <>
              {!reqMinimum && !reqRecommended && (
                <div>No system requirements data.</div>
              )}
              {reqMinimum && <div className="text-justify">{reqMinimum}</div>}
              {reqRecommended && (
                <div className="text-justify pt-5">{reqRecommended}</div>
              )}
            </>
          ) : (
            <div>No system requirements data.</div>
          )}
          {website.length > 0 && (
            <div className="pt-10">
              <h3 className="text-2xl text-secondary">Website:</h3>
              <a className="underline" href={website} target="_blank">
                {website}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}