import {type ChangeEvent, type SyntheticEvent, useReducer} from "react";
import type {IPerson} from "./model/IPerson.ts";
import {Submit} from "./Submit.tsx";
import type {IAction} from "./model/IAction.ts";
import {countries} from "./model/countries.ts";


const reducer = (state: IPerson, action: IAction) => {
    switch (action.type) {
        case "Handle String":
            return {
                ...state,
                [action.field]: action.payload
            };
        case "Handle Consent":
            return {
                ...state,
                [action.field]: action.payload === "on"
            };
        default:
            return state;
    }
}

export const defaultCountry: number = 1;

const initialPersonState: IPerson = {
    name: '',
    email: '',
    age: 18,
    consent: false,
    country: countries[defaultCountry]
};

function UserFormWithReducer() {

    const [person, dispatch] = useReducer(reducer, initialPersonState);

    const register = (e: SyntheticEvent<Element, Event>): void => {
        e.preventDefault();
        console.log("User Form with Reducer", person);
    }

    const handleStringChange = (e: ChangeEvent<HTMLInputElement>): void => {
        dispatch({type: "Handle String", field: e.target.name, payload: e.target.value})
    }

    const handleCheckBoxChange = (e: ChangeEvent<HTMLInputElement>): void => {
        dispatch({type: "Handle Consent", field: e.target.name, payload: e.target.checked ? "on" : "off"})
    }

    return (
        <article>
            <h3>User Form with Reducer</h3>
            <form onSubmit={register}>
                <section>
                    <label>Name:{' '}
                        <input type="text" name="name" value={person.name}
                               onChange={(e: ChangeEvent<HTMLInputElement>) => handleStringChange(e)}
                        />
                    </label>
                </section>
                <section>
                    <label>EMail:{' '}
                        <input type="email" name="email" value={person.email}
                               onChange={(e: ChangeEvent<HTMLInputElement>) => handleStringChange(e)}
                        />
                    </label>
                </section>
                <section>
                    <label>Age:{' '}
                        <input type="number" name="age" value={person.age}
                               onChange={(e: ChangeEvent<HTMLInputElement>) => handleStringChange(e)}
                        />
                    </label>
                </section>
                <section>
                    <label>Consent:{' '}
                        <input type="checkbox" name="consent" checked={person.consent}
                               onChange={(e: ChangeEvent<HTMLInputElement>) => handleCheckBoxChange(e)}
                        />
                    </label>
                </section>
                <section>
                    <fieldset>
                        <label>Country:{' '}
                            {
                                countries.map((c: string) =>
                                    <section key={c}>
                                        <label>
                                            <input type="radio" name="country" value={c}
                                                   checked={person.country === c}
                                                   onChange={(e: ChangeEvent<HTMLInputElement>): void => handleStringChange(e)}
                                            />{c}
                                        </label>
                                    </section>
                                )
                            }
                        </label>
                    </fieldset>
                </section>
                <button type="reset">Reset</button>
                <Submit/>
            </form>
        </article>
    )
}

export default UserFormWithReducer;
