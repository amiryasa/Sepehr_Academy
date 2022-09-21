import React from "react";
import './HamBeer.css';

const HamBeer = () => {

  const handlerAnim = () => {
    var element = document.getElementById("item269");
    element.classList.toggle("active");
    console.log(element);
  }


  return (
    <>
      <svg>
        <defs>
          <filter id="gooeyness">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="2.2"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="gooeyness"
            />
            <feComposite in="SourceGraphic" in2="gooeyness" operator="atop" />
          </filter>
        </defs>
      </svg>
      <div className="plates">
        <div className="plate plate1" onClick="this.classNameList.toggle('active')">
          <svg
            className="burger"
            version="1.1"
            height="100"
            width="100"
            viewBox="0 0 100 100"
          >
            <path className="line line1" d="M 30,65 H 70" />
            <path
              className="line line2"
              d="M 70,50 H 30 C 30,50 18.644068,50.320751 18.644068,36.016949 C 18.644068,21.712696 24.988973,6.5812347 38.79661,11.016949 C 52.604247,15.452663 46.423729,62.711864 46.423729,62.711864 L 50.423729,49.152542 L 50.423729,16.101695"
            />
            <path
              className="line line3"
              d="M 30,35 H 70 C 70,35 80.084746,36.737688 80.084746,25.423729 C 80.084746,19.599612 75.882239,9.3123528 64.711864,13.559322 C 53.541489,17.806291 54.423729,62.711864 54.423729,62.711864 L 50.423729,49.152542 V 16.101695"
            />
          </svg>
          <svg
            className="x"
            version="1.1"
            height="100"
            width="100"
            viewBox="0 0 100 100"
          >
            <path className="line" d="M 34,32 L 66,68" />
            <path className="line" d="M 66,32 L 34,68" />
          </svg>
        </div>
        <div id='item269' className="plate plate2 active" onClick={handlerAnim}>
          <svg
            className="burger"
            version="1.1"
            height="100"
            width="100"
            viewBox="0 0 100 100"
          >
            <path
              className="line line1"
              d="M 50,65 H 70 C 70,65 75,65.198488 75,70.762712 C 75,73.779026 74.368822,78.389831 66.525424,78.389831 C 22.092231,78.389831 -18.644068,-30.508475 -18.644068,-30.508475"
            />
            <path
              className="line line2"
              d="M 50,35 H 70 C 70,35 81.355932,35.300135 81.355932,25.635593 C 81.355932,20.906215 78.841706,14.830508 72.881356,14.830508 C 35.648232,14.830508 -30.508475,84.322034 -30.508475,84.322034"
            />
            <path
              className="line line3"
              d="M 50,50 H 30 C 30,50 12.288136,47.749959 12.288136,60.169492 C 12.288136,67.738339 16.712974,73.305085 40.677966,73.305085 C 73.791674,73.305085 108.47458,-19.915254 108.47458,-19.915254"
            />
            <path
              className="line line4"
              d="M 50,50 H 70 C 70,50 81.779661,50.277128 81.779661,36.607372 C 81.779661,28.952694 77.941689,25 69.067797,25 C 39.95532,25 -16.949153,119.91525 -16.949153,119.91525"
            />
            <path
              className="line line5"
              d="M 50,65 H 30 C 30,65 17.79661,64.618439 17.79661,74.152543 C 17.79661,80.667556 25.093813,81.355932 38.559322,81.355932 C 89.504001,81.355932 135.59322,-21.186441 135.59322,-21.186441"
            />
            <path
              className="line line6"
              d="M 50,35 H 30 C 30,35 16.525424,35.528154 16.525424,24.152542 C 16.525424,17.535987 22.597755,13.559322 39.40678,13.559322 C 80.617882,13.559322 94.067797,111.01695 94.067797,111.01695"
            />
          </svg>
          <svg
            className="x"
            version="1.1"
            height="100"
            width="100"
            viewBox="0 0 100 100"
          >
            <path className="line" d="M 34,32 L 66,68" />
            <path className="line" d="M 66,32 L 34,68" />
          </svg>
        </div>
        <div className="plate plate3" onClick="this.classNameList.toggle('active')">
          <svg
            className="burger"
            version="1.1"
            height="100"
            width="100"
            viewBox="0 0 100 100"
          >
            <path
              className="line line1"
              d="M 50,35 H 30 C 6.9919512,35 5.5084746,123.72881 5.5084746,123.72881"
            />
            <path
              className="line line2"
              d="M 50,35 H 70 C 98.006349,35 92.796611,119.91525 92.796611,119.91525"
            />
            <path
              className="line line3"
              d="M 50,50 H 30 C 8.2796577,50 5.9322035,138.1356 5.9322035,138.1356"
            />
            <path
              className="line line4"
              d="M 50,50 H 70 C 91.152643,50 91.949152,133.21754 91.949152,133.21754"
            />
            <path
              className="line line5"
              d="M 50,65 C 50,65 47.570314,65 30,65 C 4.9857853,65 9.3220337,147.88136 9.3220337,147.88136"
            />
            <path
              className="line line6"
              d="M 50,65 H 70 C 91.937316,65 88.559322,144.91525 88.559322,144.91525"
            />
          </svg>
          <svg
            className="x"
            version="1.1"
            height="100"
            width="100"
            viewBox="0 0 100 100"
          >
            <path className="line" d="M 34,32 L 66,68" />
            <path className="line" d="M 66,32 L 34,68" />
          </svg>
        </div>
        <div className="plate plate4" onClick="this.classNameList.toggle('active')">
          <svg
            className="burger"
            version="1.1"
            height="100"
            width="100"
            viewBox="0 0 100 100"
          >
            <path className="line line1" d="M 50,35 H 30" />
            <path className="line line2" d="M 50,35 H 70" />
            <path className="line line3" d="M 50,50 H 30" />
            <path className="line line4" d="M 50,50 H 70" />
            <path className="line line5" d="M 50,65 H 30" />
            <path className="line line6" d="M 50,65 H 70" />
          </svg>
          <svg
            className="x"
            version="1.1"
            height="100"
            width="100"
            viewBox="0 0 100 100"
          >
            <path className="line" d="M 34,32 L 66,68" />
            <path className="line" d="M 66,32 L 34,68" />
          </svg>
        </div>
        <div className="plate plate5" onClick="this.classNameList.toggle('active')">
          <svg
            className="burger"
            version="1.1"
            height="100"
            width="100"
            viewBox="0 0 100 100"
          >
            <path className="line line1" d="M 30,35 H 70 " />
            <path className="line line2" d="M 50,50 H 30 L 34,32" />
            <path className="line line3" d="M 50,50 H 70 L 66,68" />
            <path className="line line4" d="M 30,65 H 70 " />
          </svg>
          <svg
            className="x"
            version="1.1"
            height="100"
            width="100"
            viewBox="0 0 100 100"
          >
            <path className="line" d="M 34,32 L 66,68" />
            <path className="line" d="M 66,32 L 34,68" />
          </svg>
        </div>
        <div className="plate plate6" onClick="this.classNameList.toggle('active')">
          <svg
            className="burger"
            version="1.1"
            height="100"
            width="100"
            viewBox="0 0 100 100"
          >
            <path
              className="line line1"
              d="M 50,35 H 30 M 50,35 H 70 V 38 H 30 V 41 H 70"
            />
            <path className="line line2" d="M 50,50 H 30 V 47 H 70 V 44 H 30" />
            <path className="line line3" d="M 50,50 H 70 V 53 H 30 V 56 H 70" />
            <path
              className="line line4"
              d="M 50,65 H 70 M 50,65 H 30 V 62 H 70 V 59 H 30"
            />
          </svg>
          <svg
            className="x"
            version="1.1"
            height="100"
            width="100"
            viewBox="0 0 100 100"
          >
            <path className="line" d="M 34,32 L 66,68" />
            <path className="line" d="M 66,32 L 34,68" />
          </svg>
        </div>
        <div className="plate plate7" onClick="this.classNameList.toggle('active')">
          <svg
            className="burger"
            version="1.1"
            height="100"
            width="100"
            viewBox="0 0 100 100"
          >
            <path
              className="line line1"
              d="M 30,35 H 60 C 63.595663,35 65,32.357023 65,30 C 65,27.642977 62.357023,25 60,25 C 57.642977,25 55,25.933659 55,30 V 77.828008"
            />
            <path
              className="line line2"
              d="M 70,35 H 50 C 46.404337,35 45,32.357023 45,30 C 45,27.642977 47.642977,25 50,25 C 52.357023,25 55,25.933659 55,30 V 77.828008"
            />
            <path
              className="line line3"
              d="M 30,50 H 55 C 58.595665,50 60.000005,47.357023 60.000005,45 C 60.000005,42.642977 57.357025,40 55,40 C 52.642977,40 50,40.933659 50,45 V 92.828008"
            />
            <path
              className="line line4"
              d="M 70,50 H 45 C 41.404337,50 40,47.357023 40,45 C 40,42.642977 42.642977,40 45,40 C 47.357023,40 50,40.933659 50,45 V 92.828008"
            />
            <path
              className="line line5"
              d="M 30,65 H 50 C 53.595665,65 55.000005,62.357023 55.000005,60 C 55.000005,57.642977 52.357025,55 50,55 C 47.642977,55 45,55.933659 45,60 V 107.82801"
            />
            <path
              className="line line6"
              d="M 70,65 H 40 C 36.404337,65 35,62.357023 35,60 C 35,57.642977 37.642977,55 40,55 C 42.357023,55 45,55.933659 45,60 V 107.82801"
            />
          </svg>
          <svg
            className="x"
            version="1.1"
            height="100"
            width="100"
            viewBox="0 0 100 100"
          >
            <path className="line" d="M 34,32 L 66,68" />
            <path className="line" d="M 66,32 L 34,68" />
          </svg>
        </div>
        <div className="plate plate8" onClick="this.classNameList.toggle('active')">
          <svg
            className="burger"
            version="1.1"
            height="100"
            width="100"
            viewBox="0 0 100 100"
          >
            <path
              className="line line1"
              d="M 50,35 H 30 C 30,35 20,33.951333 20,25 C 20,16.048667 30,15 30,15 C 38.261288,15 35.285955,25 40,25 C 44.714045,25 45.285955,15 50,15 C 54.714045,15 55.285955,25 60,25 C 64.714045,25 65.285955,15 70,15 C 74.714045,15 75.285955,25 80,25 C 84.714045,25 85.285955,15 90,15 C 94.714045,15 95.285955,25 100,25 C 104.71405,25 105.28595,15 110,15 C 114.71405,15 115.28595,25 120,25 C 124.71405,25 125.33898,15 130,15"
            />
            <path
              className="line line2"
              d="M 50,35 H 69.999999 C 69.999999,35 79.999999,36.048667 79.999999,45 C 79.999999,53.951333 69.999999,55 69.999999,55 C 61.738709,55 64.714049,45 59.999999,45 C 55.28596,45 54.71405,55 50,55 C 45.285955,55 44.714045,45 40,45 C 35.285955,45 34.714045,55 30,55 C 25.285955,55 24.714045,45 20,45 C 15.285955,45 14.714045,55 10,55 C 5.285955,55 4.714045,45 0,45 C -4.71405,45 -5.28595,55 -10,55 C -14.71405,55 -15.28595,45 -20,45 C -24.71405,45 -25.33898,55 -30,55"
            />
            <path
              className="line line3"
              d="M 50,50 H 30 C 30,50 20,48.95133 20,40 C 20,31.04867 30,30 30,30 C 38.261288,30 35.285955,40 40,40 C 44.714045,40 45.285955,30 50,30 C 54.714045,30 55.285955,40 60,40 C 64.714045,40 65.285955,30 70,30 C 74.714045,30 75.285955,40 80,40 C 84.714045,40 85.285955,30 90,30 C 94.714045,30 95.285955,40 100,40 C 104.71405,40 105.28595,30 110,30 C 114.71405,30 115.28595,40 120,40 C 124.71405,40 125.33898,30 130,30"
            />
            <path
              className="line line4"
              d="M 50,50 H 69.999999 C 69.999999,50 79.999999,51.04867 79.999999,60 C 79.999999,68.95133 69.999999,70 69.999999,70 C 61.738709,70 64.714049,60 59.999999,60 C 55.28596,60 54.71405,70 50,70 C 45.285955,70 44.714045,60 40,60 C 35.285955,60 34.714045,70 30,70 C 25.285955,70 24.714045,60 20,60 C 15.285955,60 14.714045,70 10,70 C 5.285955,70 4.714045,60 0,60 C -4.71405,60 -5.28595,70 -10,70 C -14.71405,70 -15.28595,60 -20,60 C -24.71405,60 -25.33898,70 -30,70"
            />
            <path
              className="line line5"
              d="M 50.000001,65 H 30.000001 C 30.000001,65 20.000001,63.95133 20.000001,55 C 20.000001,46.048664 30.000001,44.999997 30.000001,44.999997 C 38.261289,44.999997 35.285956,55 40.000001,55 C 44.714046,55 45.285956,44.999997 50.000001,44.999997 C 54.714046,44.999997 55.285956,55 60.000001,55 C 64.714046,55 65.285956,44.999997 70.000001,44.999997 C 74.714046,44.999997 75.285956,55 80.000001,55 C 84.714046,55 85.285956,44.999997 90.000001,44.999997 C 94.714046,44.999997 95.285956,55 99.999998,55 C 104.71405,55 105.28595,44.999997 110,44.999997 C 114.71405,44.999997 115.28595,55 120,55 C 124.71405,55 125.33898,44.999997 130,44.999997"
            />
            <path
              className="line line6"
              d="M 50.000001,65 H 70 C 70,65 80,66.04866 80,75 C 80,83.95133 70,85 70,85 C 61.73871,85 64.71405,75 60,75 C 55.285961,75 54.714051,85 50.000001,85 C 45.285956,85 44.714046,75 40.000001,75 C 35.285956,75 34.714046,85 30.000001,85 C 25.285956,85 24.714046,75 20.000001,75 C 15.285956,75 14.714046,85 10.000001,85 C 5.2859559,85 4.7140459,75 0,75 C -4.7140491,75 -5.2859491,85 -9.9999991,85 C -14.714049,85 -15.285949,75 -19.999999,75 C -24.714049,75 -25.338979,85 -29.999999,85"
            />
          </svg>
          <svg
            className="x"
            version="1.1"
            height="100"
            width="100"
            viewBox="0 0 100 100"
          >
            <path className="line" d="M 34,32 L 66,68" />
            <path className="line" d="M 66,32 L 34,68" />
          </svg>
        </div>
      </div>
    </>
  );
};

export { HamBeer };
