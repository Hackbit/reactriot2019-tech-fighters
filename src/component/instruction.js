import React from "react";
import "./instruction.css";

const Instruction = () => {
  return (
    <div>
      <div className="InsBg">
          <div className="InsContent">
        <h1>instruction</h1>
        <ul>
          <li>Get 5 questions right to proceed to the next level.</li>
          <li>Get 5 questions wrong and you lose</li>
          <li>
            After writing down your answer click, the "ok" button with the mouse
          </li>
          <li>
            Reach the end of the arcade mode to unlock all the other modes
          </li>
          <li>
            Your score will only make it to the questions, the lower your score
            will be
          </li>
          <li>
            There is a bonus mini game available if you manage to not get any
            answers wrong while completing the arcade mode
          </li>
          <li>Use the other modes to see all the animations</li>
        </ul>
        <h3>important:</h3>
        <p>all questions must be answered in small caps</p>
        <p>remember to switch to small caps</p>
        <button className="InstBtn">Proceed</button>

        </div>
      </div>
    </div>
  );
};

export default Instruction;
