import { useState } from "react";
import "./style.css";

const formFields = [
  {
    id: "nome",
    label: "Nome",
    type: "text",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
  },
  {
    id: "senha",
    label: "Senha",
    type: "password",
  },
  {
    id: "cep",
    label: "Cep",
    type: "text",
  },
  {
    id: "rua",
    label: "Rua",
    type: "text",
  },
  {
    id: "numero",
    label: "Numero",
    type: "text",
  },
  {
    id: "bairro",
    label: "Bairro",
    type: "text",
  },
  {
    id: "cidade",
    label: "Cidade",
    type: "text",
  },
  {
    id: "estado",
    label: "Estado",
    type: "text",
  },
];

export default function InputExercise() {
  const [form, setForm] = useState(
    formFields.reduce((acc, field) => {
      console.log(acc)
      return {
        ...acc,
        [field.id]: "",
      };
    }, {})
  );

  const [response, setResponse] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "https://ranekapi.origamid.dev/json/api/usuario",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }
    );
    setResponse(response);
  };

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setForm((prevForm) => ({ ...prevForm, [id]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({ id, label, type }) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input
            type={type}
            id={id}
            value={form[id]}
            onChange={handleChange}
          />
        </div>
      ))}
      {response?.ok && <p>Formulário Enviado</p>}
      <button type="submit">Enviar</button>
    </form>
  );
}