import React from 'react'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


const FinalSubmission = () => {
  return (
    <>
      <div className="card_item">
        <div className="d-flex flex-column align-items-center w-75 mt-2">
          <CheckCircleIcon
            sx={{ scale: "2.3", marginBottom: "25px" }}
            htmlColor={"rgb(90, 74, 209)"}
          />
          <h3 style={{ fontWeight: "bolder", textAlign: "center" }}>
            Congratulation, Eren!
          </h3>
          <p style={{ fontSize: "13px", color: "gray", textAlign: "center" }}>
            You have completed onboarding, you can start using the Eden!
          </p>
        </div>
      </div>
    </>
  );
}

export default FinalSubmission