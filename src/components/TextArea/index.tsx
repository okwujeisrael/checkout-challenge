import styled from "styled-components";
import { FC } from "react";

interface TextAreaInterface {
  error: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name: string;
  placeholder: string;
  value: string;
}

const TextArea: FC<TextAreaInterface> = ({
  error,
  onChange,
  name,
  placeholder,
  value,
}) => {
  return (
    <StyledTextArea
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default TextArea;

const StyledTextArea = styled.textarea`
  width: 55%;
  height: auto;
  border-radius: 5px;
  border: 2px solid #b4b4ca;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  padding: 1rem;

  @media only screen and (max-width: 500px) {
    width: 100%;
    height: 150px;
  }
`;
