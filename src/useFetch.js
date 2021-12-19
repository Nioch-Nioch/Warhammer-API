import { useState, useEffect } from 'react';

// It is my Hook for fetching database

const useFetch = (url) => {

    const [dataOfFatch, setDataOfFatch] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
        .then(res => {
            if(!res.ok){
                throw new Error('Dane nie zostały pobrane z serwera');
            }
            return res.json();
        }).then(data => {
            setDataOfFatch(data);
            setIsLoading(false);
        }).catch(err => {
            setIsLoading(false);
            setError(err.message);
        })
    }, [url]) ;

    return { dataOfFatch, isLoading, error}
}


export default useFetch;