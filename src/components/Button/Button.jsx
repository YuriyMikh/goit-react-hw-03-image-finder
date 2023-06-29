import { StyledButton } from "./Button.styled";

export const Button = ({ handleClickLoadMore }) => {
  return (
    <StyledButton type="button" onClick={handleClickLoadMore}>
      Load More
    </StyledButton>
  );
};
