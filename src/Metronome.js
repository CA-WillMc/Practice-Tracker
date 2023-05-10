import React, { useState, useEffect } from "react";
import "./Metronome.css";

function Metronome() {
  const [bpm, setBpm] = useState(100);
  const [playing, setPlaying] = useState(false);
  const [count, setCount] = useState(0);
  const [click1] = useState(
    new Audio("https://daveceddia.com/freebies/react-metronome/click1.wav")
  );
  const [click2] = useState(
    new Audio("https://daveceddia.com/freebies/react-metronome/click1.wav")
  );
  const [timer, setTimer] = useState(null);

  const updateInterval = () => {
    const bmpSpeed = (60 * 1000) / bpm;
    setTimer(setInterval(playClick, bmpSpeed));
  };

  const handleBPM = (event) => {
    const newBpm = event.target.value;
    if (playing) {
      clearInterval(timer);
      updateInterval();
      setCount(0);
      setBpm(newBpm);
    } else {
      setBpm(newBpm);
    }
  };

  const playClick = () => {
    if (count === 0) click2.play();
    else click1.play();
    setCount(count + 1);
  };

  const startStop = () => {
    if (playing) {
      clearInterval(timer);
      setPlaying(false);
    } else {
      updateInterval();
      setCount(0);
      setPlaying(true);
      playClick();
    }
  };

  useEffect(() => {
    return () => {
      clearInterval(timer);
    };
  }, [timer]);

  return (
    <div class="metronome">
      <h1>Metronome</h1>
      <Slider class="bpm-slider" bpm={bpm} handleChange={handleBPM} />
      <Button handleClick={startStop} currentState={playing} />
    </div>
  );
}

function Button(props) {
  return (
    <button onClick={props.handleClick}>
      {props.currentState ? "Stop" : "Start"}
    </button>
  );
}

function Slider(props) {
  return (
    <div id="bpm-slider">
      <div>{props.bpm} BPM</div>
      <input
        type="range"
        min="30"
        max="240"
        value={props.bpm}
        onChange={props.handleChange}
      />
    </div>
  );
}

export default Metronome;
