import React, { useEffect, useState } from "react";
import * as SC from "./style";
import Logo from "../../common/image/K3.png";
import DefaulAvatar from "../../common/image/avatar4.png";

const Header = (props) => {
  return (
    <SC.Container>
      <SC.Logo src={Logo} />
      <SC.Title>K3</SC.Title>
      <SC.Linkk to="/userprofile">
        <SC.Avatar src={DefaulAvatar} />
      </SC.Linkk>
    </SC.Container>
  );
};

export default Header;
