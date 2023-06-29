import { StyledImg, StyledLi } from './ImageGalleryIem.styled';

export const GalleryImageItem = ({ item }) => {
  return (
    <StyledLi>
      <StyledImg src={item.webformatURL} alt={item.tags} />
    </StyledLi>
  );
};
