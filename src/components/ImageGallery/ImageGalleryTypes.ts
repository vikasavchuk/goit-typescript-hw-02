import { Image, selectedPhoto } from "../../AppTypes";

export interface ImageGalleryProps {
  items: Image[];
  onSelect: (state: boolean, photo: selectedPhoto) => void;
}