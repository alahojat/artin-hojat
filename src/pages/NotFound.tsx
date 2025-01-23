import { Footer } from "./Footer";
import { Menu } from "./Menu";
import { GoBackBtn } from "../components/GoBackBtn";

export const NotFound = () => {
  return (
    <>
      <Menu></Menu>
      <div className="base col relative items-start bg-ice">
        <GoBackBtn></GoBackBtn>
        <div className="m-12 items-center justify-center">
          <h2 className="subheading">Sorry!</h2>
          <h2 className="subheading-alt">
            The page you're looking for could not be found.
          </h2>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
