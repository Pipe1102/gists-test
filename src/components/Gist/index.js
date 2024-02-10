import React from "react";
import "./index.css";

const Gist = (props) => {
  const { gist, selected } = props;

  const getFileName = (data) => {
    const fileName = Object.keys(data.files)[0];
    return fileName;
  };

  return (
    <div className="gistWrapper">
      <img
        src={gist.owner.avatar_url}
        alt="avatar"
        className={`gistImg ${
          selected === gist.id ? "selectedImg fade-in-out" : ""
        } `}
      />
      <p className={`${selected === gist.id ? "selectedTitle" : ""} `}>
        {getFileName(gist)}
      </p>
    </div>
  );
};

export default Gist;
