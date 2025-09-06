import {LevelContext} from "./LevelContext.tsx";
import type {ListPropsWithLevel} from "./model/ListPropsWithLevel.ts";

export default function Section({level, children}: Readonly<ListPropsWithLevel>) {
    return (
        <section>
            <LevelContext value={level}>
                {children}
            </LevelContext>
        </section>
    )
}

