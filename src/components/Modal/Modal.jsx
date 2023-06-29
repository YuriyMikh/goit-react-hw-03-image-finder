import { StyledDivModal, StyledDivOverlay } from "./Modal.styles";

export const Modal = ({ src, alt }) => {
  return (
    <StyledDivOverlay>
      <StyledDivModal>
        <img src={src} alt={alt} />
      </StyledDivModal>
    </StyledDivOverlay>
  );
};