import styled from "styled-components";
import React, { FC } from "react";

interface ButtonInterface {
  children: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonInterface> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
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

  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;
