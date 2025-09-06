import type {Dispatch, SetStateAction} from "react";

export type EmitterType = {
    text: string,
    setText: Dispatch<SetStateAction<string>>
}