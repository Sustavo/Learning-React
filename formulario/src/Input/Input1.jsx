import { useState } from "react";

export default function Input1() {
  const [form, setForm] = useState({
    nome: '',
    email: ''
  })

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event)
    }

    const handleChange = ({target}) => {
        const {id, value} = target;
        console.log(id, value);
        setForm({
           ...form, [id]: value
        })

        console.log(form)
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          name="nome"
          type="text"
          value={form.nome}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
        <button>enviar</button>
      </form>
    </div>
  );
}
