import styled from 'styled-components'
import {EmitterContext} from "./context/EmitterContext.tsx";
import {type ChangeEvent, type ChangeEventHandler, use} from "react";

const Container = styled.div`
    text-align: center;
`

function InputPanel() {
    const {text, setText} = use(EmitterContext);

    const changeHandler: ChangeEventHandler<HTMLInputElement> =
        (event: ChangeEvent<HTMLInputElement>) => setText(event.currentTarget.value);

    return (
        <Container>
            <h3>Input panel</h3>
            <input
                type="text"
                value={text}
                onChange={changeHandler}
            />
        </Container>
    )
}

export default InputPanel;