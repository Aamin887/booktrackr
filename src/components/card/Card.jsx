import "./card.css";
import coverImg from "../../assets/cover.jpg";
import { Link } from "react-router-dom";

function Card({ book }) {
  const { _id, title, author } = book;
  return (
    <article className="card">
      <div className="card__container">
        <div className="card__container-img">
          <img src={coverImg} alt="book cover" />
        </div>
        <div className="card__container-text">
          <h2 className="card__container-text_title">{title}</h2>
          <p className="card__container-text_author">by: {author}</p>
          <p className="card__container-text_desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            eligendi omnis...
          </p>

          <Link className="card__container-text_link" to={"/" + _id}>
            Read more
          </Link>
        </div>
      </div>
    </article>
  );
}

export default Card;
