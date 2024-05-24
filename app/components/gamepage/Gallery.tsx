"use client";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Game } from "../../types/game-details.types";
import useGallery from "../../hooks/use-gallery";

export default function Gallery({ slug }: Game) {
  const { formattedScreenshots } = useGallery({ slug });

  return (
    <>
      {!formattedScreenshots && <div>No gallery</div>}
      {!!formattedScreenshots && (
        <ImageGallery items={formattedScreenshots} showPlayButton={false} />
      )}
    </>
  );
}
