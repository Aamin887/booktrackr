import { Form, useLoaderData } from "react-router-dom";
import { Card } from "../../components";

export async function action({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data, formData.get("fName"));
  return null;
}

function Home() {
  const { res } = useLoaderData();

  console.log(res);
  return (
    <div className="home">
      <div className="home__container">
        {res?.map((book, idx) => {
          return <Card key={idx} book={book} />;
        })}
      </div>
      <Form method="POST">
        <input type="text" name="fName" />
        <button type="submit">Add</button>
      </Form>
    </div>
  );
}

export default Home;
