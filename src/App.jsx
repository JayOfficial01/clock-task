import "./App.css";
import secondsImage from "./assets/clock-secs.png";
import hoursImage from "./assets/hours.png";
import longNeedleImage from "./assets/clock-long-needle.png";
import smallNeedleImage from "./assets/clock-small-needle.png";
import secNeedleImage from "./assets/clock-sec-needle.png";
import needleHolderImage from "./assets/needle-holder.png";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  // const [currentTime, setCurrentTime] = useState("");

  // useEffect(() => {
  //   var time = new Date().toLocaleTimeString;
  //   setInterval(() => {
  //     setCurrentTime(time);
  //   }, 1000);
  // }, [currentTime]);

  return (
    <article>
      <h1>Clock Tasks</h1>

      <article className="clock-container">
        <article className="clock">
          <img src={secondsImage} alt="Sec" className="sec-img" />
          <img src={hoursImage} alt="Sec" className="hours-img" />
          <img src={longNeedleImage} alt="Sec" className="long-img" />
          <img src={smallNeedleImage} alt="Sec" className="small-img" />
          <img src={secNeedleImage} alt="Sec" className="sec-needle-img" />
          <img src={needleHolderImage} alt="Sec" className="sec-needle-img" />
        </article>
      </article>
    </article>
  );
}

export default App;
