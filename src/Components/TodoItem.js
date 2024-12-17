import React, { useRef } from "react";
import Checkbox from "@mui/material/Checkbox";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import RateReviewIcon from "@mui/icons-material/RateReview";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const TodoItem = ({ id, isEdit, isComplete, data, completeBtn, pressEnterKey, onChangeUpdate, editBtn, delBtn }) => {
  const editInputRef = useRef(null);

  return (
    <div key={id} className="listContainer">
      <li>
        <Checkbox
          style={{
            color: "#f71d83",
          }}
          icon={<CircleOutlinedIcon sx={{ fontSize: 25 }} />}
          checkedIcon={<CheckCircleIcon sx={{ fontSize: 25 }} />}
          onClick={() => completeBtn(id)}
        />
        {isEdit ? (
          <input
            className={`listInput ${isComplete ? "" : "complete"}`}
            type="text"
            defaultValue={data}
            onKeyPress={(event) => pressEnterKey(event, id)}
            ref={editInputRef}
            autoFocus="autofocus"
            onChange={(event) => onChangeUpdate(event, id)}
          />
        ) : (
          <div className={`listText ${isComplete ? "" : "complete"}`}>{data}</div>
        )}
      </li>
      <div className="btnContainer">
        {isComplete ? (
          <button className="listBtn addBtn" onClick={() => editBtn(id)}>
            <RateReviewIcon sx={{ fontSize: 25 }} />
          </button>
        ) : null}
        <button className={`listBtn ${isComplete ? "" : "moveBtn"}`} onClick={() => delBtn(id)}>
          <DeleteForeverIcon sx={{ fontSize: 30 }} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
