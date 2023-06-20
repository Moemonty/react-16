import {Fragment, useRef} from "react";

export default function Useref() {
  
  const topSection = useRef(null);
  const handleClick = () => {
    window.scrollTo(0, topSection.current.offsetTop);
  };

  const style = {
    "height": "100px",
    "border": "#000 solid 1px",
    "padding:": "20px",
    "margin": "100px"
  }
  
  return (
    <Fragment>
      <div style={style} ref={topSection}>
        Top Section
      </div>
      <div style={style}>
        Content
      </div>
      <div style={style}>
        Content
      </div>
      <div style={style}>
        Content
      </div>
      <div style={style}>
        Content
      </div>
      <div style={style}>
        Content
      </div>
      <div style={style}>
        Content
      </div>
      <div style={style}>
        Content
      </div>
      <div style={style}>
        Content
      </div>
      <div style={style}>
        Content
      </div>
      <div style={style}>
        Content
      </div>
      <button onClick={handleClick}>
        Scroll to Top
      </button>
    </Fragment>
  );
}