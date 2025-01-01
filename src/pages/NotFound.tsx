import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <div className="error-page">
        <h2>ERROR</h2>;
        <Link to={`/`}>
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
          <span>Hem</span>
        </Link>
      </div>
    </>
  );
};
