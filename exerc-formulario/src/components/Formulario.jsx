import { useState } from "react";

const perguntas = [
    {
      pergunta: 'Qual método é utilizado para criar componentes?',
      options: [
        'React.makeComponent()',
        'React.createComponent()',
        'React.createElement()',
      ],
      resposta: 'React.createElement()',
      id: 'p1',
    },
    {
      pergunta: 'Como importamos um componente externo?',
      options: [
        'import Component from "./Component"',
        'require("./Component")',
        'import "./Component"',
      ],
      resposta: 'import Component from "./Component"',
      id: 'p2',
    },
    {
      pergunta: 'Qual hook não é nativo?',
      options: ['useEffect()', 'useFetch()', 'useCallback()'],
      resposta: 'useFetch()',
      id: 'p3',
    },
    {
      pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
      options: ['set', 'get', 'use'],
      resposta: 'use',
      id: 'p4',
    },
  ];

export default function Formulario() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [counter, setCounter] = useState(0);
    const [optionValue, setOptionValue] = useState(0);


    const handleOptionChange = ({target}) => {
        const newValue = target.value;

        setSelectedOption((prevValue) => {
            if (prevValue === newValue) {
                return null;
            } else {
                return newValue;
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(selectedOption === perguntas[optionValue].resposta) {
            setCounter((counter) => counter + 1)
        } else {
        }
        setOptionValue((option) => option + 1);
        setSelectedOption(null)
    }


    return(
   
    )
}