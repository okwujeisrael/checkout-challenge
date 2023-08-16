import { LevelOneHeader } from "../Text.styles";
import Button from "../Button";
import styled from "styled-components";
import { FC } from "react";
import Chart from "../Chart";

interface ResultsInterface {
  results: Record<string, string | number>[];
  setShowForm: (showForm: boolean) => void;
}

const Results: FC<ResultsInterface> = ({ results, setShowForm }) => {
  const handleClick = () => {
    setShowForm(true);
  };

  return (
    <>
      <Flex>
        <LevelOneHeader>Feedback Results</LevelOneHeader>
        <Button onClick={handleClick}>Go back</Button>
      </Flex>
      <Chart results={results} />
      <LevelTwoHeader>Latest comments</LevelTwoHeader>
      <CommentWrapper>
        {results.map((result) => (
          <Comment key={`${result.name}-${result.comment}`}>
            <Paragraph>{result.email}</Paragraph>
            <Paragraph>{result.comment}</Paragraph>
          </Comment>
        ))}
      </CommentWrapper>
    </>
  );
};

export default Results;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    margin-bottom: 2rem;
  }
`;

const LevelTwoHeader = styled.h2`
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 0.8rem;
  margin-bottom: 5px;
`;

const Comment = styled.div`
  margin-bottom: 2rem;
`;

const CommentWrapper = styled.div`
  height: 100px;
  overflow-y: scroll;
`;
