import { Field, Form, Formik } from "formik";
import css from "./SearchBar.module.css";
import toast from "react-hot-toast";

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (values) => {
    if (!values.query.trim()) {
      return toast.error("Write anything");
    }
    onSearch(values.query);
  };
  return (
    <header className={css.headerSearch}>
      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        <Form className={css.formSearch}>
          <Field
            className={css.inputSearch}
            type="text"
            name="query"
            placeholder="Search images and photos"
          ></Field>
          <button className={css.btnSearch} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;