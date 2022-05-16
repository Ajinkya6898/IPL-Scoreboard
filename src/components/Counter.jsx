import React, { useState } from "react";
import "./Counter.css";
import { Button } from "./Styled-Components";

export const Counter = () => {
  const [score, Setscore] = useState(57);
  const [miscore, Setmiscore] = useState("207/4");
  const [over, Setover] = useState(5);
  const [ball, Setball] = useState(0);
  const [wicket, Setwicket] = useState(0);

  const handleone = () => {
    if (score > 207) {
      return;
    }
    Setscore(score + 1);
  };

  const handltwo = () => {
    if (score > 207) {
      return;
    }
    Setscore(score + 2);
  };

  const handlthree = () => {
    if (score > 207) {
      return;
    }
    Setscore(score + 3);
    if (score > 207) {
      return;
    }
  };

  const handlfour = () => {
    if (score > 207) {
      return;
    }
    Setscore(score + 4);
  };

  const handlsix = () => {
    if (score > 207) {
      return;
    }
    Setscore(score + 6);
  };

  const handlewicket = () => {
    if (wicket === 10) {
      return;
    }
    Setwicket(wicket + 1);
  };

  const handleball = () => {
    Setball(ball + 1);
    if (ball === 5) {
      Setover(over + 1);
      Setball(0);
    }
  };

  return (
    <div className="container">
      <div className="details">
        <h1>Tata IPL 2022 Score Board</h1>
      </div>

      <div className="margin-div">
        <div className="flex">
          <div className="csk-score">
            <img
              src="https://i.pinimg.com/originals/85/52/f8/8552f811e95b998d9505c43a9828c6d6.jpg"
              alt=""
              width={"200px"}
            />
            <div className="score">
              <h1>
                Score : {score}/{wicket}
              </h1>
              <h3>
                Overs : {over}.{ball}
              </h3>
            </div>
          </div>
          <div className="csk-score">
            <img
              src="https://www.betrallyindia.com/wp-content/uploads/2021/03/mumbai-indians-logo.png"
              alt=""
              width={"200px"}
            />
            <div className="score">
              <h1>Score : {miscore}</h1>
              <h3>Overs : 20</h3>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text">
            CSK NEEDS {207 - score} Runs TO WIN AGAINS MI.
          </h1>
          <div className="buttons-div">
            <Button onClick={handleone}>1 Run</Button>
            <Button onClick={handltwo}>2 Runs</Button>
            <Button onClick={handlthree}>3 Runs</Button>
            <Button onClick={handlfour}>4 Runs</Button>
            <Button onClick={handlsix}>6 Runs</Button>
            <Button onClick={handleball}>Ball</Button>
            <Button onClick={handlewicket}>Wicket</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
