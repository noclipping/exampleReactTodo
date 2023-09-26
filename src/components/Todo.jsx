import { useState } from "react";

export default function Todo({
  text,
  id,
  completed,
  completeTodo,
  removeTodo,
  updateTodo,
}) {
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(text);
  return (
    <div>
      {editing ? (
        <div>
          <input
            type="text"
            placeholder={editText}
            value={editText}
            onChange={(e) => {
              setEditText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setEditing(!editing);
              updateTodo(id, editText);
            }}
          >
            Save
          </button>
        </div>
      ) : (
        <div>
          <span
            className="completeTask"
            onClick={() => {
              completeTodo(id);
            }}
          >
            👉
          </span>
          <span className={completed ? "completed" : ""}>
            id: {id} | text: {text}
            <span
              onClick={() => {
                console.log("clicked!");
                setEditing(!editing);
              }}
            >
              ✏️
            </span>
            <span
              onClick={() => {
                console.log("clicked!");
                removeTodo(id);
              }}
            >
              ❌
            </span>
          </span>
        </div>
      )}
    </div>
  );
}
