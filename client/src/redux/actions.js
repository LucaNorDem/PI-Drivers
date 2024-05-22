import axios from "axios";


const GET_ALL_DRIVERS = "GET_ALL_DRIVERS";
const GET_DRIVER = "GET_DRIVER";
const GET_TEAMS = "GET_TEAMS";
const ORDER_NAME = "ORDER_NAME";
const ORDER_BIRTH = "ORDER_BIRTH";
const FILTER_BY_TEAM = "FILTER_BY_TEAM";
const CLEAN_FILTERS = "CLEAN_FILTERS";
const POST_DRIVER = "POST_DRIVER";


const getAllDrivers = () => {
    const endpoint = "http://localhost:3001/drivers"

    return async (dispatch) => {
        try {
            const allDrivers = await axios(endpoint);

            dispatch({
                type: GET_ALL_DRIVERS,
                payload: allDrivers.data
            })
        } catch (error) {

        }
    }

}

const getDriver = (id) => {
    const endpoint = `http://localhost:3001/drivers/${id}`;

    return async (dispatch) => {
        try {
            const driver = await axios(endpoint);

            dispatch({
                type: GET_DRIVER,
                payload: driver.data
            })
        } catch (error) {

        }
    }

}

const getTeams = () => {
    const endpoint = `http://localhost:3001/teams`;

    return async (dispatch) => {
        try {
            const teams = await axios(endpoint);

            dispatch({
                type: GET_TEAMS,
                payload: teams.data,
            })
        } catch (error) {

        }
    }
}

const orderByName = (order) => {

    return { type: ORDER_NAME, payload: order };

}

const orderByBirth = (order) => {

    return { type: ORDER_BIRTH, payload: order };

}

const filterByTeam = (team) => {

    return (dispatch, getState) => {

        const currentOrder = getState().currentOrder;

        dispatch({
            type: FILTER_BY_TEAM,
            payload: team
        })

        if (currentOrder[0] === "N") {
            dispatch(orderByName(currentOrder));
        } else if (currentOrder[0] === "B") {
            dispatch(orderByBirth(currentOrder));
        }
    }
}

const cleanFilters = () => {

    return {
        type: CLEAN_FILTERS,
    }
}

const postDriver = (driver) => {
    const endpoint = "http://localhost:3001/drivers"

    return async (dispatch) => {
        try {
            const postDriver = await axios.post(endpoint, driver);

            dispatch({
                type: POST_DRIVER,
                payload: postDriver.data,
            })

        } catch (error) {

        }
    }
}


export {
    getAllDrivers, getDriver, orderByName, orderByBirth, filterByTeam, getTeams, cleanFilters, postDriver,
    GET_ALL_DRIVERS, GET_DRIVER, GET_TEAMS, ORDER_NAME, ORDER_BIRTH, FILTER_BY_TEAM, CLEAN_FILTERS, POST_DRIVER
};