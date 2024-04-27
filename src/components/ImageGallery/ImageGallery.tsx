import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { ImageGalleryProps } from "./ImageGalleryTypes";
import { Image, selectedPhoto } from "../../AppTypes";

const ImageGallery = ({ items, onSelect }: ImageGalleryProps) => {
  return (
    <ul className={css.imgUl}>
      {items.map((item: Image) => {
        return (
          <li className={css.imgLi} key={item.id}>
            <ImageCard data={item} onSelect={onSelect} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;