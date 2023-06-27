export const GalleryImageItem = ( image ) => {
    console.log(image.webformatURL);
  return (
    <li
    // class="gallery-item"
    >
      <img src={image.webformatURL} alt="" />
    </li>
  );
};