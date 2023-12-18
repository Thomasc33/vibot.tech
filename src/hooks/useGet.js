import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const useGet = (url) => {
    const [ data, setData ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }

        getData();
    }, [url]);

    return [ data, isLoading, error ];
}

export default useGet;
