import { useEffect, useRef, useState } from "react";

const Search = ({ query, setQuery }) => {
    const inputEle = useRef(null)

    useEffect(() => {
        function enterFun(e) {
            if(document.activeElement===inputEle.current)
                return;

         
            if (e.code === 'Enter') {
                inputEle.current.focus();
                setQuery('')
            }
   
        }
        document.addEventListener('keydown', enterFun)

        // return()=> document.addEventListener('keydown', enterFun)



    }, [])

    return (

        <input
            className="search"
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            ref={inputEle}
        />
    );
}

export default Search;