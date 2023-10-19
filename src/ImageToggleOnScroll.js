import React, { useState, useRef, useEffect } from "react";

function ImageToggleOnScroll({ primaryImg, secondaryImg }) {
  const imageRef = useRef(null);
  const [inView, setInView] = useState(false);

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = () => {
    setInView(isInView());
  };

  return <img src={inView ? secondaryImg : primaryImg} alt="" ref={imageRef} />;
}

export default ImageToggleOnScroll;