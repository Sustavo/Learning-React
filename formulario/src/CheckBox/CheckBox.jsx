import { useState } from "react";

export default function CheckBox() {
  const [cores, setCores] = useState([]);

  const handleChange = ({ target }) => {
    if(target.checked) {
        setCores([...cores, target.value])
    } else {
        setCores(cores.filter((cor) => {
                return cor !== target.value;
            })
        );
    }
  };
  console.log(cores)

  return (
    <div>
      <form>
        <label>
          <input
            type="checkbox"
            value="azul"
            checked={cores.includes('azul')}
            onChange={handleChange}
          />
          Azul
        </label>
        <label>
          <input
            type="checkbox"
            value="vermelho"
            checked={cores.includes('vermelho')}
            onChange={handleChange}
          />
          Vermelho
        </label>
      </form>
    </div>
  );
}
