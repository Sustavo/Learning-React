import { useState } from "react";
import CheckBox from "./CheckBox/CheckBox";
import CheckBoxExercise from "./CheckBox/CheckBoxExercise";
import InputComponent from "./Components/Input/InputComponent";
import Input1 from "./Input/Input1";
import InputExercise from "./Input/InputExercise";
import Radio from "./Radio/Radio";
import Select from "./Select/Select";
import TextArea from "./textArea/TextArea";
import InputStructure from "./Components/Input/InputStructure";
import SelectStructure from "./Components/Select/SelectStructure";
import RadioStructure from "./Components/Radio/RadioStructure";
import RadioComponent from "./Components/Radio/RadioComponent";
import CheckBoxComponent from "./Components/CheckBox/CheckBoxComponent";
import Validation from "./Components/Validation/Validation";

function App() {
  return (
    <div className="App">
      <Validation />
    </div>
  );
}

export default App;
