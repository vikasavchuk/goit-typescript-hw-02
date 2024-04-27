import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
const ImageGallery = ({ items, onSelect }) => {
  return (
    <ul className={css.imgUl}>
      {items.map((item) => {
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