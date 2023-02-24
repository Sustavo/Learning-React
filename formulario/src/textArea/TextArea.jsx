import { useState } from "react";

export default function TextArea() {
  const [textarea, setTextarea] = useState("");

  return (
    <div>
      <textarea
        value={textarea}
        onChange={({ target }) => setTextarea(target.value)}
        rows="5"
      />
      {textarea}
    </div>
  );
}
