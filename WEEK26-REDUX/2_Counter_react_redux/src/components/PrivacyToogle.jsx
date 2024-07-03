import { useDispatch, useSelector } from "react-redux";
import { privacyActions } from "../store";

const PrivacyToggle = () => {
  const dispatch = useDispatch();
  const handlePrivacy = () => {
    console.log("privacy toggle invoked ");
    dispatch(privacyActions.toggle());
  };
  return (
    <>
      <button type="button" className="btn btn-danger" onClick={handlePrivacy}>
        PRIVACY TOGGLE
      </button>
    </>
  );
};

export default PrivacyToggle;
