import css from "./ImageCard.module.css";

const ImageCard = ({ data, onSelect }) => {
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