import { GalleryImageItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(item => (
        <GalleryImageItem key={item.id} {...item} />
      ))}
    </ul>
  );
};
