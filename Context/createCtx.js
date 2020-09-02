import React, { useReducer, createContext, useEffect } from "react";
const createCtx = (reducer, actions, initialState) => {
  const Context = createContext();
  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
      if (state.hasOwnProperty("count")) {
        const count = JSON.parse(localStorage.getItem("count"));
        dispatch({ type: "REHYDRATE", payload: { count } });
      }
    }, []);
    const boundActions = {};
    for (const key in actions) {
      boundActions[key] = actions[key](dispatch);
    }
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };
  return { Context, Provider };
};
export default createCtx;
