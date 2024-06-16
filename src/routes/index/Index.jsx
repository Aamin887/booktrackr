import "./index.css";

import instance from "../../config/axios";

import { useLoaderData, useNavigate, Form, Link } from "react-router-dom";
import { Card, Spinner } from "../../components";

// imgs
import cover from "../../assets/header-cover.png";

export async function action({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data, formData.get("fName"));
  return null;
}

export async function loader() {
  const res = await instance.get("/");
  const books = res.data;
  return books;
}

function Home() {
  const { books } = useLoaderData();
  const navigate = useNavigate();

  if (navigate.state === "loading") {
    return <Spinner />;
  }

  return (
    <div className="home">
      <div className="home__container section__padding">
        <div className="home__container-header">
          <div className="home__container-header_illustration">
            <div className="header__container-header_illustration-text">
              <h1>Welcome to Book Haven</h1>
              <p>
                At Book Haven, we believe that the right book at the right time
                can change your life. Our mission is to connect you with stories
                that inspire, entertain, and enlighten. Whether you're a fan of
                gripping thrillers, heartwarming romances, mind-bending sci-fi,
                or insightful non-fiction, you'll find your perfect match here.
              </p>

              <Link to={"/books/add"} className="main__btn">
                Add a book
              </Link>
            </div>
            <div className="home__container-header_illustration-img">
              <img src={cover} alt="header cover" />
            </div>
          </div>
        </div>
        <div className="home__container-content">
          <div className="home__container-content_title">
            <h3>Some books in the collections</h3>
          </div>
          {books.slice(0, 3)?.map((book, idx) => {
            return <Card key={idx} book={book} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
