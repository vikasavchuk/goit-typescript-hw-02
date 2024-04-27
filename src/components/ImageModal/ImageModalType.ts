import { selectedPhoto } from "../../AppTypes";

export interface ImageModalProps {
  isOpen: boolean;
  closeModal: (state: boolean) => void;
  photo: selectedPhoto;
}