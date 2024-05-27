import { GET_ALL_DRIVERS, GET_DRIVER, GET_TEAMS, ORDER_NAME, ORDER_BIRTH, FILTER_BY_TEAM, CLEAN_FILTERS, POST_DRIVER, SEARCH_DRIVERS, UPDATE_SEARCH } from "./actions";


const initialState = {
    allDrivers: [],
    filteredDrivers: [],
    currentOrder: "X",
    teams: [],
    driver: {},
    driverTeams:[],
    postDriver: {},
    searchBarResults: [],
    searchResults: [],
}

const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_ALL_DRIVERS:{
            return {
                ...state,
                allDrivers: action.payload,
                filteredDrivers: action.payload,
            }
        }

        case GET_DRIVER:{

            let driverTeams = action.payload.teams;

            if(driverTeams) {
                driverTeams = action.payload.teams.split(",").map(el => el.trim());

                driverTeams= state.teams.filter((team)=>driverTeams.includes(team.name))
            };

            
            return{
                ...state,
                driver: action.payload,
                driverTeams: driverTeams
            }
        }

        case GET_TEAMS:{
            return{
                ...state,
                teams:[...action.payload]
            }
        }

        case CLEAN_FILTERS:{
            return {
                ...state,
                filteredDrivers: state.allDrivers,
                currentOrder: "X"
            }
        }

        case FILTER_BY_TEAM:{
            const drivers = [...state.allDrivers];

            let filteredDrivers= [];
            
            if(action.payload === "All" ){
                filteredDrivers = drivers 
            }else{
                filteredDrivers = state.allDrivers.filter((driver)=> {
                    const dteam = driver.teams && driver.teams.split(",").map(el => el.trim());
                    return driver.teams && dteam.includes(action.payload);
                })
            }             

            return{
                ...state,
                filteredDrivers
            }
        }

        case ORDER_NAME:{

            const orderDrivers =[...state.filteredDrivers];

            

            orderDrivers.sort((a, b)=>{
                let aname = `${a.name.forename} ${a.name.surname}`;
                let bname = `${b.name.forename} ${b.name.surname}`;

                return action.payload === "NA" ? aname.localeCompare(bname) : bname.localeCompare(aname);
                
            }) 
            return {
                ...state,
                filteredDrivers: orderDrivers,
                currentOrder: action.payload, 
            }
            
        }

        case ORDER_BIRTH:{

            const orderDrivers =[...state.filteredDrivers];

            orderDrivers.sort((a, b)=>{
                let abirth = new Date(a.dob);
                let bbirth = new Date(b.dob);

                return action.payload === "BA" ? abirth - bbirth : bbirth - abirth;
                
            }) 
            return {
                ...state,
                filteredDrivers: orderDrivers,
                currentOrder: action.payload,  
            }

        }


        case POST_DRIVER:{
            return {
                ...state,
                postDriver: action.payload,
            }

        }

        case SEARCH_DRIVERS:{

            return{
                ...state,
                searchBarResults: action.payload,
            }
        }

        case UPDATE_SEARCH:{
            return{ 
                ...state,
                searchResults: state.searchBarResults,
            }
        }

        
        default:{
            return {...state};
        }
    }

}

export default rootReducer;