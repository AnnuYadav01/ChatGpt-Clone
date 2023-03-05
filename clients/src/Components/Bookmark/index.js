import "./index.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Bookmark = function (props) {
  return (
    <>
      {props.savedModels.map((model) => {
        return (
          <div
            className="box"
            onClick={() => {
              props.setCurrentModel(model.id);
            }}
            key={model.id}
            value={model.id}
          >
            {model.id}
          </div>
        );
      })}
    </>
  );
};

export default Bookmark;
