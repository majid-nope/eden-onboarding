import React, { useRef, useState } from "react";
import { Container, Form } from "react-bootstrap";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";

const UsePurpose = () => {
  const selfElement = useRef();
  const teamElement = useRef();
  const [inputValue, setInputValue] = useState("");
  const switchRadio = (e) => {
    if (e.target.dataset.title === "team") {
      teamElement.current.click();
      setInputValue(e.target.dataset.title);
    } else if (e.target.dataset.title === "self") {
      selfElement.current.click();
      setInputValue(e.target.dataset.title);
    }
  };

  const style = {
    transition: "all 500ms",
  
    aspectRatio: "1/1",
    borderRadius: "8px",
    height: '45%',
    width: '45%',
    cursor: "pointer",
    border: "1px solid #ada8a842",
  };

  return (
    <>
      <div className="card_item">
        <h5 style={{ fontWeight: "bolder" }}>
          How are you planning to use Eden
        </h5>
        <p style={{ fontSize: "13px", color: "gray" }}>
          We'll streamline your setup experience accordingly
        </p>

        <Form.Group className="w-75">
          <div className="d-flex gap-4 align-items-center flex-row w-100 pt-5">
            <div
              onClick={switchRadio}
              data-title={"self"}
              className={inputValue === "self" ? "active" : ""}
              style={style}
            >
              <Container style={{ pointerEvents: "none" }}>
                <PersonIcon />
                
                  <h6>For myself</h6>
                  <p style={{ fontSize: "10px" }}>
                    Write better. Think more clearly. Stay Organized
                  </p>
              
              </Container>
              <input
                ref={selfElement}
                type="radio"
                className="opacity-0"
                name="use"
                checked
                value={"self"}
              />
            </div>
            <div
              onClick={switchRadio}
              style={style}
              data-title={"team"}
              className={inputValue === "team" ? "active" : ""}
            >
              <Container style={{ pointerEvents: "none" }}>
                <GroupsIcon/>
                <h6>For myself</h6>
                <p style={{ fontSize: "10px" }}>
                  Write better. Think more clearly. Stay Organized
                </p>
              </Container>
              <input
                ref={teamElement}
                className="opacity-0"
                type="radio"
                name="use"
                value={"team"}
              />
            </div>
          </div>
        </Form.Group>
      </div>
    </>
  );
};

export default UsePurpose;
