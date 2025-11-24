import "./App.css";
import Navbar from "./components/Navbar";
import Headline from "./components/Headline";
import Beer from "./components/Beer";
import styled from "styled-components";

const StyledApp = styled.div``;

const StyledMain = styled.div`
  display: flex;
  justify-content: space-between;
`;

function App() {
  return (
    <StyledApp>
      <Navbar />
      <StyledMain>
        <Headline />
        <Beer />
      </StyledMain>
    </StyledApp>
  );
}

export default App;
