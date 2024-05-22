import { useSelector, useDispatch  } from "react-redux";
import { searchDrivers, cleanSearch, getDriver } from "../../redux/actions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SearchBar = () =>{

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchReasult = useSelector((state) => state.searchResults);
    const [search, setSearch] =useState("");
    
    const clearInput = () =>{
        setSearch("");
        dispatch(cleanSearch());
    }

    const handleChange = (e) =>{
        setSearch(e.target.value);
        if(e.target.value.trim()){
            dispatch(searchDrivers(e.target.value));
        }
        if(!e.target.value){
            dispatch(cleanSearch());
        }
    }

    const handleClick = (e) =>{
        const { dataset, name} = e.target;
        const id = dataset.id;

        if(id !== 0){
            dispatch(getDriver(id));
            navigate(`/details?name=${name}`);
            clearInput(); 
        }
        
    }


    return ( 
        <div>
            <div>
                <input type="search" placeholder="Search driver." value={search} onChange={handleChange} />
            <button>buscar</button>
            </div>            
            <div>
                {searchReasult.length > 0 && (
                    <ul>
                        {searchReasult.map((driver)=>(
                            <li key={driver.id} data-id={driver.id} name={driver.name} onClick={handleClick}>{driver.name}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )

}

export default SearchBar;