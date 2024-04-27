import css from "./LoadMoreBtn.module.css";

interface LoadMoreProps {
  onClick: () => void;
}

const LoadMoreBtn = ({ onClick }: LoadMoreProps) => {
  return (
    <button className={css.btnLoadMore} type="button" onClick={onClick}>
      LoadMoreBtn
    </button>
  );
};

export default LoadMoreBtn;