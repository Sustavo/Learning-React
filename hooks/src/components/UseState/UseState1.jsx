import { useState } from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";

function UseState1() {
    const [modal, setModal] = useState(false);
    return(
        <div>
            <div>
                {modal ? 'Modal Aberto' : 'Modal Fechado'}
            </div>
            <Modal modal={modal} setModal={setModal} />
            <ButtonModal setModal={setModal}/>
        </div>
    )
}

export default UseState1;