import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 60px;
  // background: #ffa;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  padding: 0 25px;
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
  // background-image: linear-gradient(to right, red, yellow);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const Title = styled.span`
  font-weight: 500;
  font-size: 20px;
  margin: 0 0 0 10px;
  padding: 0;
  color: #333;
`;

export const Linkk = styled(Link)`
  margin-left: auto;
  width: 40px;
  height: 40px;
  background: none;
  border:none;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
