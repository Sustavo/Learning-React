import { useState } from "react";

export default function Radio() {
  const [radio, setRadio] = useState("");
  const [radioboolean, setRadioboolean] = useState(false);

  const handleChange = ({ target }) => {
    setRadio(target.value);
  };

  const handleChangeBoolean = ({ target }) => {
    setRadioboolean(target.value === "sim");
    console.log(radioboolean);
  };

  if (radioboolean) {
    return (
      <div>
        <form>
          <label>
            <input
              type="radio"
              value="notebook"
              checked={radio === "notebook"}
              onChange={handleChange}
            />
            Notebook
          </label>
          <label>
            <input
              type="radio"
              value="tablet"
              checked={radio === "tablet"}
              onChange={handleChange}
            />
            Table
          </label>
          <label>
            <input
              type="radio"
              value="smartphone"
              checked={radio === "smartphone"}
              onChange={handleChange}
            />
            SmartPhone
          </label>
        </form>
        <button onClick={() => setRadioboolean(!radioboolean)}>Voltar</button>
        {radio}
      </div>
    );
  }

  return (
    <div>
      <form>
        <label>
          <input
            type="radio"
            value="sim"
            checked={radioboolean === true}
            onChange={handleChangeBoolean}
          />
          Sim
        </label>
        <label>
          <input
            type="radio"
            value="nao"
            checked={radioboolean === false}
            onChange={handleChangeBoolean}
          />
          Não
        </label>
      </form>
      {radioboolean ? "true" : "false"}
    </div>
  );
}
