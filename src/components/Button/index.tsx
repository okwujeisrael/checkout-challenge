import styled from "styled-components";
import { FC } from "react";

interface ButtonInterface {
  type: "button" | "link";
  children: string;
}

const Button: FC<ButtonInterface> = ({ type, children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  width: 150px;
  height: 50px;
  display: block;
  text-align: center;
  background-color: #4a4ae4;
  color: white;
  border-radius: 5px;
  border: none;
  font-weight: 600;
`;
