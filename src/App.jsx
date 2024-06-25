import { useLoaderData } from "react-router-dom";
import "./App.css";

import { useEffect, useState } from "react";
import instance from "./config/axios";
import { Card } from "./components";

export async function loader() {
  try {
    const res = await instance.get("/");
    const books = res.data.books;
    return books;
  } catch (error) {
    return error.message;
  }
}
export async function action() {}

function App() {
  const books = useLoaderData();

  console.log(books);

  const [booksData, setBooksData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const totalBooks = booksData.length;
  const pageSize = 5;
  const pages = Math.floor(totalBooks / pageSize);

  // prev page

  const goToPrev = () => {
    const prevPage = Math.max(currentPage - 1, 1);
    setCurrentPage(prevPage);
  };

  // next page
  const goToNext = () => {
    const nextPage = Math.min(currentPage + 1, pages);
    setCurrentPage(nextPage);
    console.log(booksPerPage);
  };

  const start = pageSize * (currentPage - 1);
  const end = pageSize * currentPage;

  const booksPerPage = booksData.slice(start, end);

  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < pages;

  useEffect(() => {
    setBooksData([...books]);
  }, []);

  return (
    <div className="books">
      <div className="books__container section__padding">
        <div className="books__container-header">
          <h2 className="section__heading">All books</h2>
          <p className="section__text">
            Just go through the list of books to find the book that best suit
            your reading interests.
          </p>
        </div>
        <div className="books__container-content">
          {booksPerPage?.map((book, idx) => {
            return <Card book={book} key={idx} />;
          })}
        </div>
        <div className="books__container-footer">
          <button
            onClick={() => goToPrev()}
            className="main__btn"
            // disabled={!canGoPrev}
          >
            Previous
          </button>
          <button
            onClick={() => goToNext()}
            className="main__btn"
            // disabled={!canGoNext}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
