import './App.css'
import Section from "./content/Section.tsx";
import Heading from "./content/Heading.tsx";

function App() {

    return (
        <Section level={1}>
            <Heading>Miasto</Heading>
            <Heading>Miasto</Heading>
            <Heading>Miasto</Heading>
            <Section level={2}>
                <Heading>Ulica</Heading>
                <Heading>Ulica</Heading>
                <Heading>Ulica</Heading>
                <Section level={3}>
                    <Heading>Budynek</Heading>
                    <Heading>Budynek</Heading>
                    <Heading>Budynek</Heading>
                </Section>
            </Section>
        </Section>
    )
}

export default App
