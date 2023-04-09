import React from "react";
import "../css/Note.css";
import Notes from "./Notes";
import CreateNote from "./CreateNote";
function Note({ id, text, deleteNote }) {
    return (
      <div className="note">
        <div className="note__body">{text}</div>
        <div className="note__footer" style={{ justifyContent: "flex-end" }}>
          <button
            className="note__save"
            onClick={() => deleteNote(id)}
            aria-hidden="true"
          >delete</button>
        </div>
      </div>
    );
  }
export default Note;