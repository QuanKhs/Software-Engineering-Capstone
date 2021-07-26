import Header from "../../components/header";
import SizeBar from "./components/sizeBar";
import MainProfile from "./components/main";
import * as SC from "./style";

const UserProfile = (props) => {
  return (
    <>
      <SC.Container>
        <Header />
        <SC.SubCotainer>
          <SizeBar />
          <MainProfile />
          <div style={{ width: "220px" }} />
        </SC.SubCotainer>
      </SC.Container>
    </>
  );
};

export default UserProfile;
