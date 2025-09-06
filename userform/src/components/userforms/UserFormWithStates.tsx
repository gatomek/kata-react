import {type ChangeEvent, type SyntheticEvent, useState} from "react";
import type {User} from "../user/model/User.ts";
import {Submit} from "./Submit.tsx";
import {countries} from "../user/model/countries.ts";

export const defaultCountry: number = 1;

function UserFormWithStates() {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [age, setAge] = useState<number>(18);
    const [consent, setConsent] = useState<boolean>(false);
    const [country, setCountry] = useState<string>(countries[defaultCountry]);

    const register = (e: SyntheticEvent<Element, Event>) => {
        e.preventDefault();

        const person: User = {name, email, age, consent, country};
        console.log("User Form with State", person);
    }

    return (
        <article>
            <h3>User Form with States</h3>
            <form onSubmit={register}>
                <section>
                    <label>Name:{' '}
                        <input type="text" name="name" value={name}
                               onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                        />
                    </label>
                </section>
                <section>
                    <label>EMail:{' '}
                        <input type="email" name="email" value={email}
                               onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        />
                    </label>
                </section>
                <section>
                    <label>Age:{' '}
                        <input type="number" name="age" value={age}
                               onChange={(e: ChangeEvent<HTMLInputElement>) => setAge(Number(e.target.value))}
                        />
                    </label>
                </section>
                <section>
                    <label>Consent:{' '}
                        <input type="checkbox" name="consent" checked={consent}
                               onChange={(e: ChangeEvent<HTMLInputElement>): void => {
                                   setConsent(e.target.checked)
                               }}
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
                                                   checked={country === c}
                                                   onChange={(e: ChangeEvent<HTMLInputElement>): void => {
                                                       setCountry(e.target.value)
                                                   }}
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

export default UserFormWithStates;
