import { useState } from "react";
import InputComponent from "./InputComponent";

export default function InputStructure() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <form>
        <InputComponent
          id="nome"
          label="Nome"
          value={nome}
          setValue={setNome}
          required
        />
        <InputComponent
          id="email"
          label="Email"
          value={email}
          setValue={setEmail}
        />
        <button>enviar</button>
      </form>
    </div>
  );
}
