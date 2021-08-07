import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <section className="error-section">
        <div className="error-div">
          <h1>404 Page not found...</h1>
          <Link to="/countries" className="error-link">
            Back to Countries
          </Link>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
