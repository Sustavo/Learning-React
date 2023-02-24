import { useState } from "react";

export default function Select() {
  const [select, setSelect] = useState("");

  return (
    <div>
      <form>
        <select
          value={select}
          onChange={({ target }) => setSelect(target.value)}
          id="produtos"
        >
          <option disabled value=""></option>
          <option value="notebook">Notebook</option>
          <option value="smartphone">Smartphone</option>
          <option value="tablet">Tablet</option>
        </select>
        {select}
      </form>
    </div>
  );
}
