import { AppWrapper } from "../src/components/AppWrapper.styles";
import { Container } from "../src/components/Container.styles";
import Form from "./components/Form";
import { useState } from "react";
import Results from "../src/components/Results";
import { data } from "./data";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [results, setResults] =
    useState<Record<string, string | number>[]>(data);

  return (
    <AppWrapper>
      <Container>
        {showForm ? (
          <Form />
        ) : (
          <Results results={results} setShowForm={setShowForm} />
        )}
      </Container>
    </AppWrapper>
  );
};

export default App;
