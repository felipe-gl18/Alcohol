import styled from "styled-components";

const StyledHeadline = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 48px;
  color: white;
  padding: 100px;
  min-width: 482px;

  @media (max-width: 700px) {
    display: flex;
    min-width: fit-content;
    padding: 60px;
  }
`;

const HeadlineText = styled.div`
  display: flex;
  flex-direction: column;
  color: white;

  h1,
  span {
    text-align: start;
    margin: 0;
  }

  h1 {
    font-size: 4rem;
  }

  span {
    font-size: 1.1rem;
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 3rem;
    }
    span {
      font-size: 1.1rem;
    }
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 120px;
  font-size: 1.3rem;
  color: #13678a;
  font-weight: 600;
  outline: none;
  border: none;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: none;
  }
`;

export default function Headline() {
  return (
    <StyledHeadline>
      <HeadlineText>
        <h1>
          ONE AND ONLY <br />
          FRESHK
        </h1>
        <span>Stay away from problems with Freshk</span>
      </HeadlineText>
      <Button>View Products</Button>
    </StyledHeadline>
  );
}
