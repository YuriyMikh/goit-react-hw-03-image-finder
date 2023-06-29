import { GalleryImageItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { StyledUl } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <StyledUl>
      {images.map(item => (
        <GalleryImageItem key={item.id} item={item} />
      ))}
    </StyledUl>
  );
};
