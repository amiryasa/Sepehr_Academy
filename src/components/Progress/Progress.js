import { useEffect } from "react";

import "./Progress.css";

const Progress = () => {
  const goUpHandler = () => {
    var rootElement1 = document.documentElement;
    var rootElement2 = document.body;
    rootElement1.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    rootElement2.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    
    const position = window.pageYOffset;
    var scroolSize = Math.ceil((position/4662.0001) * 100);
    var scrooler = 1562.31 - (scroolSize * 15.6231);

    document.getElementById('progressBar1').style.strokeDashoffset = scrooler;

    console.log(position);
    if(position > 300){
      document.getElementById('progressBar1').style.opacity = 1;
      document.getElementById('progressBar1').style.visibility = 'visible';
    }

    else{
      document.getElementById('progressBar1').style.opacity = 0;
      document.getElementById('progressBar1').style.visibility = 'hidden';
    }
  };

  useEffect(() => {
      window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
        width="60"
        viewBox="0 0 600 600"
        className="progressBar"
        id="progressBar1"
      >
        <g
          id="news_detail_2"
          data-name="news detail – 2"
          clip-path="url(#clip-news_detail_2)"
        >
          <rect width="600" height="600" fill="rgba(255,255,255,0)" />
          <g
            id="Ellipse_119"
            data-name="Ellipse 119"
            transform="translate(51 50)"
            fill="none"
            stroke="#00adef"
            stroke-width="2.5"
          >
            <circle cx="250" cy="250" r="250" stroke="none" />
            <circle
              onClick={goUpHandler}
              id="cir02"
              cx="250"
              cy="250"
              r="248.75"
              fill="none"
            />
          </g>
          <g
            id="iconfinder-icon_2_"
            data-name="iconfinder-icon (2)"
            transform="translate(45.445 46)"
          >
            <g
              id="Group_1701"
              data-name="Group 1701"
              transform="translate(-0.311 -1)"
            >
              <rect
                id="canvas_background"
                width="511"
                height="511"
                transform="translate(-0.134)"
                fill="none"
              />
            </g>
            <g
              id="Group_1702"
              data-name="Group 1702"
              transform="translate(153.909 196.918)"
            >
              <path
                id="svg_2"
                d="M7,108.223,106.223,9l99.223,99.223"
                transform="translate(-7 -9)"
                fill="none"
                stroke="#00adef"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="35"
                onClick={goUpHandler}
              />
            </g>
          </g>
        </g>
      </svg>
    </>
  );
};

export { Progress };
