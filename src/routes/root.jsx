import { Outlet } from "react-router-dom";
import { Header, Navbar } from "../components";

function Root() {
  return (
    <div className="root__page">
      <div className="root__page-container">
        <Navbar />
        <Header />
      </div>
      <div className="root__page-container_content">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
