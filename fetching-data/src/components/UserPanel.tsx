import {type ReactNode} from "react";
import type {User} from "../model/User.ts";
import {useGetRemoteData} from "../hooks/useGetRemoteData.ts";


export function UserPanel() {
    const {data: remoteUsers, error} = useGetRemoteData<User>("/users.json");

    return (
        <>
            <h2>User Panel</h2>
            {
                error ?
                    <div>{JSON.stringify(error)}</div>
                    :
                    remoteUsers.map((u: User): ReactNode => {
                        return <div key={u.name}>{`${u.name} @ ${u.age} | ${u.country}`}</div>
                    })
            }
        </>
    )
}