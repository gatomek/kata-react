import styled from 'styled-components'
import {EmitterContext} from "./context/EmitterContext.tsx";
import {use} from "react";

const Container = styled.div`
    text-align: center;
`

function OutputPanel() {
    const {text} = use(EmitterContext);

    return (
        <Container>
            <h3>Output panel</h3>
            <div>{text}</div>
        </Container>
    )
}

export default OutputPanel;