import React, { useState, createContext, useContext } from 'react';

const ValueContext = createContext();

const ValueProvider = ({ children }) => {
    const [value, setValue] = useState(10);

    return (
        <ValueContext.Provider value={{ value, setValue }}>
            {children}
        </ValueContext.Provider>
    );
};

const useValueContext = () => useContext(ValueContext);
export { ValueProvider, useValueContext };