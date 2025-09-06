import type {User} from "../../user/model/User.ts";
import type {Action} from "../model/Action.ts";

export const userReducer = (state: User, action: Action) => {
    switch (action.type) {
        case "name":
            return {...state, name: action.value};

        case "email":
            return {...state, email: action.value};

        case "age":
            return {...state, age: Number(action.value)};

        case "consent":
            return {...state, consent: action.value === "on"};

        case "country":
            return {...state, country: action.value};

        default:
            throw new Error(`Action not supported: ${action.type}!`);
    }
}