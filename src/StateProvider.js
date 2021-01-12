//setup the data layer
//keeps track of the user login

import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext() //empty data layer

//build a provider which returns the state of the data layer
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)