import { useEffect } from "react";
import css from "./ImageSlider.module.css";
const ImageSlider = () => {
  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=2&limit=10")
      .then((res) => res.json())
      .then(console.log);
  }, []);

  return (
    <>
      <div className={`${css.main}`}></div>
    </>
  );
};

export default ImageSlider;
