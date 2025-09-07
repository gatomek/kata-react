import {type ReactNode} from "react";
import type {Country} from "../model/Country.ts";
import {useGetRemoteData} from "../hooks/useGetRemoteData.ts";

export function CountryPanel() {
    const {data: remoteCountries, error} = useGetRemoteData<Country>("/countries.json");
    return (
        <>
            <h2>Country Panel</h2>
            {error ?
                <div>{JSON.stringify(error)}</div>
                :
                remoteCountries.map((c: Country): ReactNode => {
                    return <div key={c.name}>{`${c.name} (${c.id})`}</div>
                })
            }
        </>
    )
}
