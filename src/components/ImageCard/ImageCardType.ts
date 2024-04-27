import { Image, selectedPhoto } from "../../AppTypes";

export type ImageProps = {
  data: Image;
  onSelect: (state: boolean, photo: selectedPhoto) => void;
};