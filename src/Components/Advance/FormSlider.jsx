import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import FinalSubmission from "../Basic/FinalSubmission";
import UsePurpose from "../Basic/UsePurpose";
import UserNameField from "../Basic/UserNameField";
import WorkspaceField from "../Basic/WorkspaceField";

const FormSlider = ({ title, src, cardData }) => {
  const [slideProgress, setSlideProgress] = useState(0);
  //  <span style={{ background: "white" }}>{index + 1}</span>;

  const SubmitButtonSx = {
    background: " rgb(90, 74, 209)",
    border: "none",
    position: "absolute",
    display: "flex",
    bottom: " 0",
    right: "13%",
    width: "76%",
    alignItems: "center",
    justifyContent: "center",
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (slideProgress === -cardData.length + 1) {
      const data = new FormData(event.target.parentElement);
      const userData = {
        full_name: data.get("full_name"),
        display_name: data.get("display_name"),
        workspace_name: data.get("workspace_name"),
        workspace_url: data.get("workspace_url"),
        use_purpose: data.get("use"),
      };
      console.log(userData);
      alert(JSON.stringify(userData));
    } else if (slideProgress === -cardData.length + 2) {
      event.target.innerHTML = "Launch";
      setSlideProgress((value) => value - 1);
    } else {
      setSlideProgress((value) => value - 1);
    }
  };

  return (
    <div className="box">
      {/* header-session */}
      <header className="w-100 h-auto pt-3 d-flex align-items-center justify-content-center gap-2">
        <img src={src} alt="logo" />
        <h2
          className="text-dark text-center pt-1"
          style={{ fontWeight: "bolder" }}
        >
          {title}
        </h2>
      </header>
      {/* {body-session} */}
      <Form className="holder mt-4">
        <div
          id="progress"
          style={{
            "--progressWidth": `${
              (Math.abs(slideProgress - 1) / cardData.length) * 100
            }%`,
          }}
        >
          {/*------- Circle progress ---------*/}
          {Array.from({ length: 4 }).map((el, index) =>
            Math.abs(slideProgress) >= index ? (
              <span
                style={{ background: "rgb(90, 74, 209)", color: "#F4F6F9" }}
              >
                {index + 1}
              </span>
            ) : (
              <span
                style={{
                  background: "#F4F6F9",
                  color: "black",
                  border: "1px solid rgba(0,0,0,0.1)",
                }}
              >
                {index + 1}
              </span>
            )
          )}
          {/* ------------------------ */}
        </div>
        <div
          className="slider"
          style={{ transform: `translateX(${slideProgress * 100}%)` }}
        >
          {/* -------Form fields------ */}
          <UserNameField />
          <WorkspaceField />
          <UsePurpose />
          <FinalSubmission />
          {/* ------------------ */}
        </div>
        <Button type="submit" style={SubmitButtonSx} onClick={submitHandler}>
          Create workspace
        </Button>
      </Form>
    </div>
  );
};

export default FormSlider;
