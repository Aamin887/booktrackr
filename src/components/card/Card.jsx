import "./card.css";

function Card({ book }) {
  const { title, author, description } = book;
  return (
    <article className="card">
      <div className="card__container">
        <h2>{title}</h2>
        <p>{author}</p>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default Card;
