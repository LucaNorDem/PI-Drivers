import { useSelector, useDispatch  } from "react-redux";
import { searchDrivers, updateSearch, getDriver } from "../../redux/actions";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./SearchBar.module.css";


const SearchBar = () =>{

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const inputRef = useRef(null);
    const ulRef = useRef(null);

    const searchBarResults = useSelector((state) => state.searchBarResults);
    const [search, setSearch] =useState("");
    
    const clearInput = () =>{
        setSearch("");
    }

    const handleChange = (e) =>{
        setSearch(e.target.value);
        if(e.target.value.trim()){
            dispatch(searchDrivers(e.target.value));
        }
        
    }

    const handleClick = (e) =>{
        const { dataset } = e.target;
        const id = dataset.id;
        const element = e.target;
        const name = element.getAttribute("name")

        if(Number(id) !== 0){
            dispatch(getDriver(id));
            navigate(`/details?name=${name}`);
            clearInput(); 
        }
        
    }

    const handleSearchClick = () =>{

        if(search.length > 0) {         
            dispatch(updateSearch());
            navigate(`/results?s=${search}`);
            clearInput();
        }

    }

    useEffect(()=>{
        if(inputRef.current && ulRef.current){
            ulRef.current.style.width = `${inputRef.current.offsetWidth}px`
        }
    }, [searchBarResults, search])


    return ( 
        <div className={style.container}>
            <div ref={inputRef}className={style.barbtn}>
                <input  type="search" placeholder="Search driver." value={search} onChange={handleChange} />
                <button onClick={handleSearchClick} >buscar</button>
            </div>            
            <div ref={ulRef} className={style.resultsContainer}>
                {searchBarResults.length > 0 && search.length > 0 ? (
                    <ul className={style.searchUl}>
                        {searchBarResults.map((driver)=>(
                            <li key={driver.id} data-id={driver.id} name={driver.name} onClick={handleClick}>{driver.name}</li>
                        ))}
                    </ul>
                ): null}
            </div>
        </div>
    )

}

export default SearchBar;