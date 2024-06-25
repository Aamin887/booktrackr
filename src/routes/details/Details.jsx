import "./details.css";
import instance from "../../config/axios";
import cover from "../../assets/cover.jpg";

import { Link, useLoaderData } from "react-router-dom";
import {
  MdCategory,
  MdOutlineDateRange,
  MdOutlineSupervisedUserCircle,
} from "react-icons/md";

export async function loader({ params }) {
  try {
    const { bookId } = params;
    const res = await instance.get("/" + bookId);
    console.log(res);
    const book = res.data;
    return book;
  } catch (error) {
    console.log(error);
  }
}
export async function action() {}

function Details() {
  const { book } = useLoaderData();
  console.log(book);

  return (
    <div className="details">
      <div className="details__container section__padding">
        <div className="details__container-header">
          <div className="details__container-header_img">
            <img src={cover} alt="" />
          </div>
          <div className="details__container-header_text">
            <h4>{book?.title}</h4>
            <h6>
              <MdOutlineSupervisedUserCircle className="icons" size={20} />
              by: {book?.author}
            </h6>
            <div className="sub">
              <p>
                {" "}
                <MdCategory className="icons" size={20} /> genre: genre
              </p>
              <p>
                <MdOutlineDateRange className="icons" size={20} />
                published: {book?.dateOfPublication || 2002}
              </p>
            </div>
          </div>
        </div>
        <div className="details__container-content">
          <p>
            {book?.description ||
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, veritatis vero temporibus iste odio, voluptatum veniam repellendus reiciendis quidem ducimus voluptas ut fugit in quam amet tenetur officia quia similique!"}
          </p>
        </div>
        <div className="details__container-footer">
          <Link to={"/edit"} className="main__btn">
            Edit
          </Link>
          <Link to={"/generate"} className="main__btn">
            generate
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Details;
