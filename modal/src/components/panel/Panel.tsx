import {Modal} from "../modal/Modal.tsx";
import {useState} from "react";
import {createPortal} from "react-dom";

export function Panel() {
    const [isModalShown, setIsModalShown] = useState(false);
    const modal = createPortal(<Modal onCloseFunction={() => setIsModalShown(false)}/>, document.body)

    return (
        <>
            <div>App with modal Dialog</div>
            <button onClick={() => setIsModalShown(true)}>Show</button>
            {isModalShown && modal}
        </>
    )
}
