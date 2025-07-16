import {LevelContext} from "./LevelContext.tsx";


export default function Section({level, children}) {
    return (
        <section>
            <LevelContext value={level}>
                {children}
            </LevelContext>
        </section>
    )
}

