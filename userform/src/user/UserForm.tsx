import type {IPerson} from "./model/IPerson.ts";
import {Submit} from "./Submit.tsx";
import type {SyntheticEvent} from "react";
import {countries} from "./model/countries.ts";

const register = (e: SyntheticEvent<Element, Event>) => {
    e.preventDefault();

    const form: EventTarget = e.target;
    const formData = new FormData(form);

    const name: string = formData.get('name') as string;
    const email: string = formData.get('email') as string;
    const age: number = Number(formData.get('age'));
    const consent: boolean = formData.get('consent') === 'on';
    const country: string = formData.get('country') as string;

    const person: IPerson = {name, email, age, consent, country};
    console.log('User Form', person);
}

export const defaultCountry: number = 1;

function UserForm() {
    return (
        <article>
            <h3>User Form</h3>
            <form onSubmit={register}>
                <section>
                    <label>Name:{' '}
                        <input type="text" name="name"/>
                    </label>
                </section>
                <section>
                    <label>e-Mail:{' '}
                        <input type="email" name="email"/>
                    </label>
                </section>
                <section>
                    <label>Age:{' '}
                        <input type="number" name="age" defaultValue={0}/>
                    </label>
                </section>
                <section>
                    <label>Consent:{' '}
                        <input type="checkbox" name="consent"/>
                    </label>
                </section>
                <section>
                    <fieldset>
                        <label>Country:{' '}
                            {
                                countries.map((c: string, index: number) =>
                                    <label key={c}>
                                        <input type="radio" name="country" value={c}
                                               defaultChecked={index === defaultCountry}/>{c}
                                    </label>
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

export default UserForm;