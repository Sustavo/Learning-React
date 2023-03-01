import { useState } from "react";
import Input from "../Input/InputComponent";
import UseForm from "../../hooks/UseForm";

export default function Validation() {
  const cep = UseForm('cep');
  const email = UseForm('email');
  const nome = UseForm('nome');

  console.log(cep)
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if(cep.validate() && email.validate() && nome.validate()) {
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
          label="Nome"
          id="nome"
          {...nome}
        />
        <Input
          type="text"
          label="CEP"
          id="cep"
          placeholder="00000-00"
          {...cep}
        />
        <Input
          type="email"
          label="Email"
          id="email"
          {...email}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
}
