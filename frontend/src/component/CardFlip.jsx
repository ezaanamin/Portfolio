import React, { useContext } from 'react';
import { cardStyle, cardWrapperStyle, cardFaceStyle } from "../styles/index";


function CardFlip(props) {


  const { isFlipped, setFlipped, cardtheme, flippedBackgroundColor, frontBackgroundColor, backImage, children } = props;

  const handleCardFlip = () => {
 
    setFlipped(!isFlipped);
  };

  const wrapperStyle = cardWrapperStyle(isFlipped);
  const faceStyle = cardFaceStyle({
    isFlipped,
    flippedBackgroundColor,
    frontBackgroundColor,
    backImage,
    is3D: true,
  });

  return (
    <div style={cardStyle} onClick={handleCardFlip}>
      <div style={wrapperStyle}>
        <div style={faceStyle}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default CardFlip;
