import { GET_ALL_DRIVERS, GET_DRIVER, GET_TEAMS, ORDER_NAME, ORDER_BIRTH, FILTER_BY_TEAM } from "./actions";


const initialState = {
    allDrivers: [],
    filteredDrivers: [],
    teams: [],
    driver: {},
    driverTeams:[],
}

const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_ALL_DRIVERS:{
            return {
                ...state,
                allDrivers: action.payload,
            }
        }

        case GET_DRIVER:{

            const driverTeams = action.payload.teams.split(",").map(el => el.trim());

            return{
                ...state,
                driver: action.payload,
                driverTeams: state.teams.filter((team)=>driverTeams.includes(team.name))
            }
        }

        case GET_TEAMS:{
            return{
                ...state,
                teams:[...action.payload]
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

                return action.payload === "A" ? aname.localeCompare(bname) : bname.localeCompare(aname);
                
            }) 
            return {
                ...state,
                filteredDrivers: orderDrivers 
            }
            
        }

        case ORDER_BIRTH:{

            const orderDrivers =[...state.filteredDrivers];

            orderDrivers.sort((a, b)=>{
                let abirth = new Date(a.dob);
                let bbirth = new Date(b.dob);

                return action.payload === "A" ? abirth - bbirth : bbirth - abirth;
                
            }) 
            return {
                ...state,
                filteredDrivers: orderDrivers 
            }

        }

        
        default:{
            return {...state};
        }
    }

}

export default rootReducer;