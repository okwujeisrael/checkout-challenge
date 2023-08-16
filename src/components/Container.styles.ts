import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  height: 400px;
  background-color: white;
  padding: 2rem;

  @media only screen and (max-width: 500px) {
    height: 500px;
  }
`;
