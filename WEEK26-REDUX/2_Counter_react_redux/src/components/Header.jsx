import Controls from "./Controls";
import Display from "./Display";

const Header = () => {
  return (
    <div className="redux-counter-header-main">
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold text-body-emphasis">REDUX COUNTER</h1>
        <div className="col-lg-6 mx-auto">
          {/* DISPLAY  */}
          <Display></Display>
          <Controls></Controls>
        </div>
      </div>
    </div>
  );
};
export default Header;
