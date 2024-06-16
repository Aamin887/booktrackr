import { toast } from "react-toastify";
import instance from "../../config/axios";
import "./add.css";

import { Form, redirect, useLoaderData } from "react-router-dom";

export async function loader() {
  const amin = "amin";

  return amin;
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const bookData = Object.fromEntries(formData);

  if (!bookData.title || !bookData.author) {
    return toast.error("Fill title and author");
  }

  const bookInfo = {
    title: bookData?.title,
    author: bookData?.author,
    desc: bookData?.description,
    dateOfPublication: bookData?.dateOfPublication,
  };

  try {
    const res = await instance.post("", { ...bookInfo });
    console.log(res);
    toast.info("book added");
    return redirect(`/books/${res.data.book._id}`);
  } catch (error) {
    return toast.error(error.message);
    // return throw new Error(error);
  }
}

function Add() {
  const { amin } = useLoaderData;
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
        <Form method="POST" className="add__container-form">
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
          {/* date */}
          <div className="add__container-form_control">
            <label htmlFor="dateOfPublication">Date Of Publication</label>
            <input type="date" name="dateOfPublication" />
          </div>
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
