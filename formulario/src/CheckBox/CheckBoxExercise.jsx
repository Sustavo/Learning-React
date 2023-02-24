import { useState } from "react";

const coresArray = ["azul", "roxo", "laranja", "verde", "vermelho", "cinza"];

export default function CheckBoxExercise() {
  const [cores, setCores] = useState([]);

  const handleChange = ({ target }) => {
    if (target.checked) {
      setCores((prevCores) => [...prevCores, target.value]);
    } else {
      setCores((prevCores) => prevCores.filter((cor) => cor !== target.value));
    }
  };

  return (
    <div>
      <form>
        {coresArray.map((color, index) => (
          <label key={index}>
            <input
              type="checkbox"
              value={color}
              checked={cores.includes(color)}
              onChange={handleChange}
            />
            {color}
          </label>
        ))}
      </form>
    </div>
  );
}