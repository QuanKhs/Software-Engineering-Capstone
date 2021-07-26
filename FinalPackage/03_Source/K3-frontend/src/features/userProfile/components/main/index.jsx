import * as SC from "./style";
import Ripples from "react-ripples";

const MainProfile = (props) => {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <SC.Container>
      <SC.SetTing>
        <SC.Title>Setting</SC.Title>
        <SC.LogOut onClick={logout}>LogOut</SC.LogOut>
      </SC.SetTing>
    </SC.Container>
  );
};

export default MainProfile;
