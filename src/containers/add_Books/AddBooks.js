import React from "react";
import { StyleAddBooks } from "../../styles/pages/styleAddBooks";
import addBookImg from "../../assets/images/books_img.png";

const AddBooks = () => {
  return (
    <StyleAddBooks className="add-books row">
      <div className="add-books__column col-6">
        <div className="add-books-book">
          <div className="add-books-book__top">
            <img src={addBookImg} alt="img" />
          </div>
          <p className="add-books-book__title">Ulugbek hazinasi</p>
          <button className="add-books-book__btn">Upload cover</button>
        </div>
      </div>
      <div className="add-books__column col-6">
        <div className="add-books-inputs">
          <input type="text" name="title" placeholder="Title" />
          <input type="text" name="pages" placeholder="Pages" />
          <input type="text" name="year" placeholder="Year" />
          <input type="text" name="price" placeholder="Price" />
          <input type="text" name="country" placeholder="Country" />
          <input type="text" name="auther" placeholder="Author" />
          <textarea name="description" placeholder="Description"></textarea>
        </div>
      </div>
    </StyleAddBooks>
  );
};

export default AddBooks;
