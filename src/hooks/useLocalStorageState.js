import { useEffect, useState } from "react";

const useLocalStorageState = (initialValue, key) => {
    const [value, setValue] = useState(
        () => {
            const myStore = localStorage.getItem(key)
            return JSON.parse(myStore)
        }
    )

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value, key])


    return [value, setValue];
}

export default useLocalStorageState;