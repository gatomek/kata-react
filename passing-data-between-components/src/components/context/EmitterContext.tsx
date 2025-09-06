import {createContext} from "react";
import type {EmitterType} from "../model/EmitterType.ts";

const initialValue: EmitterType = {
    text: '',
    setText: () => {}
}

// table can be used as well instead of object of EmitterType
export const EmitterContext = createContext<EmitterType>(initialValue);
