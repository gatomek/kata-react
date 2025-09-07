import {useEffect, useState} from "react";

export function useGetRemoteData<T>(url: string) {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
            let cancelled = false;
            fetch(url)
                .then(rsp => {
                    if (rsp.ok) {
                        return rsp.json();
                    }

                    throw new Error(`Error ${rsp.status}: ${rsp.statusText}`)
                })
                .then(rsp => {
                        if (cancelled)
                            return;

                        setData(rsp)
                    }
                )
                .catch((e: Error) => {
                    if( cancelled)
                        return;

                    setError(e.message);
                })

            return (): void => {
                cancelled = true;
            }
        }
        , [url]);

    return {data, error};
}
