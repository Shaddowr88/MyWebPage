import React, { useState } from 'react';
import '../../App.css'

const ImageGridZoom = (props) => {
  const [zoomedImage, setZoomedImage] = useState(null);

  const handleImageClick = (imageName) => {
    setZoomedImage(imageName);
  };

  const handleZoomOut = () => {
    setZoomedImage(null);
  };

  return (
    <div className="image-grid">
      {props.images.map((image) => (
        <img
          key={image}
          src={image}
          alt={image}
          className="grid-image"
          onClick={() => handleImageClick(image)}
        />
      ))}

      {zoomedImage && (
        <div className="zoom-overlay" onClick={handleZoomOut}>
          <img
            src={zoomedImage}
            alt={zoomedImage}
            className="zoomed-image"
          />
        </div>
      )}
    </div>
  );
};

export default ImageGridZoom;