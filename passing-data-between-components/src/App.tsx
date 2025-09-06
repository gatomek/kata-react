import './App.css'
import InputPanel from "./components/InputPanel.tsx";
import styled from "styled-components";
import Emitter from "./components/Emitter.tsx";
import OutputPanel from "./components/OutputPanel.tsx";

const PaneContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2px;
    margin: 0;
    padding: 0;
`;

function App() {
    return (
        <Emitter>
            <PaneContainer>
                <InputPanel/>
                <OutputPanel/>
            </PaneContainer>
        </Emitter>
    )
}

export default App
