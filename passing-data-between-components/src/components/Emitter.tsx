import {useState} from "react";
import {EmitterContext} from "./context/EmitterContext.tsx";
import type {EmitterType} from "./model/EmitterType.ts";

type ListProps = {
    children: React.ReactElement;
};

function Emitter({children}: ListProps) {
    const [text, setText] = useState<string>('');
    const value:EmitterType = {text, setText}

    return (
        <EmitterContext value={value}>
            {children}
        </EmitterContext>
    )
}

export default Emitter;
