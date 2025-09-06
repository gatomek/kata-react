import {type ChangeEvent, type SyntheticEvent, useReducer} from "react";
import type {User} from "../user/model/User.ts";
import {Submit} from "./Submit.tsx";
import {countries} from "../user/model/countries.ts";
import {userReducer} from "./reducer/userReducer.ts";

export const defaultCountry: number = 1;

const initialUser: User = {
    name: '',
    email: '',
    age: 18,
    consent: false,
    country: countries[defaultCountry]
};

export function UserFormWithReducer() {

    const [user, dispatch] = useReducer(userReducer, initialUser);

    const register = (e: SyntheticEvent<Element, Event>): void => {
        e.preventDefault();
        console.log("User Form with Reducer", user);
    }

    return (
        <article>
            <h3>User Form with Reducer</h3>
            <form onSubmit={register}>
                <section>
                    <label>Name:{' '}
                        <input type="text" name="name" value={user.name}
                               onChange={(e: ChangeEvent<HTMLInputElement>): void =>
                                   dispatch({type: "name", value: e.target.value})}
                        />
                    </label>
                </section>
                <section>
                    <label>EMail:{' '}
                        <input type="email" name="email" value={user.email}
                               onChange={(e: ChangeEvent<HTMLInputElement>): void =>
                                   dispatch({type: "email", value: e.target.value})}
                        />
                    </label>
                </section>
                <section>
                    <label>Age:{' '}
                        <input type="number" name="age" value={user.age}
                               onChange={(e: ChangeEvent<HTMLInputElement>): void =>
                                   dispatch({type: "age", value: e.target.value})}
                        />
                    </label>
                </section>
                <section>
                    <label>Consent:{' '}
                        <input type="checkbox" name="consent" checked={user.consent}
                               onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                   dispatch({type: "consent", value: e.target.checked ? "on" : "off"})}
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
                                                   checked={user.country === c}
                                                   onChange={(e: ChangeEvent<HTMLInputElement>): void =>
                                                       dispatch({type: "country", value: e.target.value})}
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
