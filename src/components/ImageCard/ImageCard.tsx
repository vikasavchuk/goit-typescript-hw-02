import css from "./ImageCard.module.css";
import { FC } from "react";
import { ImageProps } from "./ImageCardType";

const ImageCard: FC<ImageProps> = ({ data, onSelect }) => {
  return (
    <div>
      <img
        src={data.urls.small}
        alt={data.alt_description}
        onClick={() =>
          onSelect(true, {
            src: data.urls.regular,
            description: data.description,
          })
        }
      />
    </div>
  );
};

export default ImageCard;