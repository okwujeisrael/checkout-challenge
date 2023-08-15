import styled from "styled-components";

const TextArea = () => {
  return <StyledTextArea />;
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
`;
