import React from "react";
interface props {
  onClickE: () => void;
  onClickP: () => void;
}

const Profile = ({ onClickE, onClickP }: props) => {
  return (
    <div>
      <div className="Profile">
        <div className="Profile-btn">
          <button className="btn1" onClick={onClickE}>
            <i className="bx bxs-envelope"></i>
            Email
          </button>
          <button className="btn2" onClick={onClickP}>
            <i className="bx bxs-phone"></i>
            Number
          </button>
        </div>
        <div className="profile-about">
          <div className="about">
            <p className="about-h1">About</p>
            <p className="p word">
              TOPIC Perception of use and challenges towards computer based test
              for final qualifying exam for nurses among student nurses in
              University of Nigeria Enugu Campus.
            </p>
          </div>
          <div className="others">
            <p className="about-h1">Other Informations</p>
            <p className="p word">
              The creation of computer-based examination has provided a
              methodical and technical replacement to the traditional hand
              written test format. Computer-based tests can be utilized as
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
