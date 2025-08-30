import {useFormStatus} from "react-dom";

export function Submit(){
    const status = useFormStatus();
    return (
        <button type="submit" disabled={status.pending}>{status.pending ? 'Registering...' : 'Register'}</button>
    )
}
