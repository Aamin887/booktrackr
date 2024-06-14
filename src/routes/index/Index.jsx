import { useLoaderData } from "react-router-dom";
import { Card } from "../../components";
import instance from "../../config/axios";
import "./index.css";

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

  console.log(books);
  return (
    <div className="home">
      <div className="home__container section__padding">
        {books?.map((book, idx) => {
          return <Card key={idx} book={book} />;
        })}
      </div>
    </div>
  );
}

export default Home;
