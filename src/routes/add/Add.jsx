import { toast } from "react-toastify";
import instance from "../../config/axios";
import "./add.css";
import { BsFillInfoSquareFill } from "react-icons/bs";

import { Form, redirect } from "react-router-dom";
import { useEffect, useState } from "react";

export async function loader() {
  const amin = "amin";
  return amin;
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const bookData = Object.fromEntries(formData);

  const image = formData.get("coverImage");

  console.log(image);

  if (!bookData.title || !bookData.author) {
    return toast.error("Fill title and author");
  }

  const testData = new FormData();

  testData.append("title", bookData?.title);
  testData.append("author", bookData?.author);
  testData.append("genre", bookData?.genre);
  testData.append("desc", bookData?.desc);
  testData.append("imgfile", image);
  testData.append("dateOfPublication", bookData?.dateOfPublication);

  // const bookInfo = {
  //   title: bookData?.title,
  //   author: bookData?.author,
  //   desc: bookData?.description,
  //   coverPath: image,
  //   dateOfPublication: bookData?.dateOfPublication,
  // };

  try {
    const res = await instance.post("/", testData);

    if (res.data) {
      toast.info("book added");
    }

    return redirect(`/${res.data.book._id}`);
  } catch (error) {
    console.log(error);
    return toast.error(error.message);
  }
}

function Add() {
  const YEAR_REGEX = /^\d{4}$/;

  const [coverPreview, setCoverPreview] = useState("");

  const [year, setYear] = useState("");
  const [validYear, setValidYear] = useState(false);

  const handleChange = (e) => {
    setCoverPreview(URL.createObjectURL(e.target.files[0]));
  };

  useEffect(() => {
    setValidYear(YEAR_REGEX.test(year));
  }, [year]);

  return (
    <div className="add section__margin">
      <div className="add__container section__padding">
        <div className="add__container-header">
          <div className="add__container-header_left">
            <h2>Fill form to add a book</h2>
          </div>
          <div className="add__container-header_right">
            <p className="section__text">
              Simply fill out the details below to add book. Whether it&apos;s a
              recent read or a cherished favorite, adding it to your list helps
              other readers find a book to read. Happy reading!
            </p>
          </div>
        </div>
        <Form
          method="POST"
          className="add__container-form"
          encType="multipart/form-data"
        >
          {/* title */}
          <div className="add__container-form_control">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" />
          </div>

          {/* author */}
          <div className="add__container-form_control">
            <label htmlFor="author">Author</label>
            <input type="text" name="author" />
          </div>

          {/* genre*/}
          <div className="add__container-form_control">
            <label htmlFor="genre">Genre</label>
            <input type="text" name="genre" />
          </div>

          {/* img */}
          <div className="add__container-form_control">
            {coverPreview && (
              <div className="add__container-form_thumbnail">
                <img src={coverPreview} alt="preview book cover" />
              </div>
            )}
            <label htmlFor="author">Add cover photo</label>
            <input type="file" name="coverImage" onChange={handleChange} />
          </div>

          {/* date */}
          <div className="add__container-form_control">
            <label htmlFor="dateOfPublication">Year Of Publication</label>
            <input
              type="text"
              name="dateOfPublication"
              onChange={(e) => setYear(e.target.value)}
              value={year}
            />
          </div>
          <div className="add__container-form_control-icon">
            <p className={year && !validYear ? "instructions" : "offscreen"}>
              <BsFillInfoSquareFill className="icon" />
              4 characters .
              <br />
              Must all be numbers, E.g 2024.
              <br />
              Letters, underscores, hyphens not allowed, E.g 12-2001.
            </p>
          </div>

          {/* desc */}
          <div className="add__container-form_control">
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description"></textarea>
          </div>

          <div className="add__container-form_footer">
            <button type="submit" className="main__btn">
              Add Book
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Add;
