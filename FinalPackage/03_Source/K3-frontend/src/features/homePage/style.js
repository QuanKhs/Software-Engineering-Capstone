import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 50px 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  // padding: 0 24px;
`;

export const SearchBar = styled.div`
  width: 80%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 0.7px solid black;
  border-radius: 7px;
  padding: 0 15px;
`;

export const SearchBtn = styled.img`
  width: 20px;
  height: 20px;
`;

export const SearchInput = styled.input`
  padding: 15px;
  border: none;
  height: 35px;
  outline: none;
  // background: #ffa;
  &:focus {
    outline: none;
  }
`;

export const GroupBtn = styled.div`
  position: relative;
  margin: 10px 0 0 0;
  width: 80%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  // border-radius: 7px;
  // padding: 0 15px;
`;
export const Pain = styled.div`
  padding: 0 0 0 10px;
`;

export const CreateBucket = styled.button`
  height: 36px;
  // text-transform: uppercase;
  // box-shadow: 5px 15px 20px black;
  letter-spacing: 1px;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  border: none;
  background: blue;
  bõ-shadow:
  outline: none;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;

export const CreateBucketIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const CreateBucketText = styled.span`
  color: #fff;
  font-size: 15px;
`;

export const OtherBtn = styled(CreateBucket)`
  // margin-left: 10px;
  color: blue;
  border: 1.5px solid blue;
  background: #fff;
`;

export const TheNumberOfBucket = styled.span`
  font-size: 28px;
  font-weight: 600;
  margin-left: auto;
  margin-right: 60px;
`;
export const BucketText = styled.span`
  position: absolute;
  right: 0;
  bottom: 0;
`;

