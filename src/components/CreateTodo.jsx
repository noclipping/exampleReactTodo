import { useState } from "react";

export default function CreateTodo({ createTodo }) {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          createTodo(text);
          setText("");
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
