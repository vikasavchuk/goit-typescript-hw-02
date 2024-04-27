import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement(document.getElementById("root"));
const ImageModal = ({ isOpen = false, photo, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => closeModal(false)}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      preventScroll={true}
    >
      <img src={photo.src} alt={photo.description} />
      <p>{photo.description}</p>
    </Modal>
  );
};

export default ImageModal;