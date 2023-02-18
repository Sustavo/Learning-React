import { useState } from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";

function UseState1() {
    const [modal, setModal] = useState(false);
    const [items, setItems] = useState(true);

    const handleClick = () => {
        setItems(!items)
        console.log(items)
    }

    return(
        <div>
            <button onClick={handleClick}>Clicar</button>
            {items}
            <Modal modal={modal} setModal={setModal} />
            <ButtonModal setModal={setModal} />
        </div>
    )

}

export default UseState1;