import styled, { keyframes } from "styled-components";
import Modal from "react-modal";

export const Container = styled(Modal)`
  position: absolute;
  width: 550px;
  height: 450px;
  overflow: auto;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  outline: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 60px;
  // background-image: linear-gradient(-45deg, #4481eb 0%, #04befe 100%);
  background: blue;
  text-align: center;
  line-height: 60px;
`;
export const Title = styled.h3`
  padding: 0;
  margin: 0;
  color: #fff;
`;

export const Form = styled.form`
  padding: 40px 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin: 15px 0;
  width: 85%;
  height: 30px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-size: 15px;
  border: none;
  padding: 0 12px;
  &:focus {
    outline: none;
  }
  ::  placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const GroupBtn = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 200px;
  display: flex;
  flex-direction: row;
  // background: #ff0;
  justify-content: space-between;
`;

export const Submit = styled.button`
  padding: 7px 12px;
  border-radius: 12px;
  border: none;
  background: blue;
  color: #fff;
  outline: none;
  &:focus {
    outline: none;
  }
`;

export const Cancle = styled(Submit)`
  background: #fff;
  color: black;
  border: 1.5px solid blue;
`;
