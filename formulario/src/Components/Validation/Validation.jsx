import { useState } from "react";
import Input from "../Input/InputComponent";

export default function Validation() {
  const [cep, setCep] = useState("");
  const [error, setError] = useState(null);

  const validadeCep = (value) => {
    if(value.length === 0) {
      setError("preencha um valor")
      return false;
    } else if(!/^\d{5}-?\d{3}$/.test(value)) {
      setError("preencha um CEP válido");
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  const handleBlur = ({target}) => {
    validadeCep(target.value)
  }

  const handleChange = ({target}) => {
    if(error) {
      validadeCep(target.value)
    }
    setCep(target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(validadeCep(cep)) {
      console.log("Enviou");
    } else {
      console.log("não enviar")
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          label="CEP"
          id="cep"
          placeholder="00000-00"
          value={cep}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {error && <p>{error}</p>}
        <button>Enviar</button>
      </form>
    </div>
  );
}
