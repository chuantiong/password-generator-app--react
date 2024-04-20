import React, { useState, createContext, useContext } from 'react';

const RegexContext = createContext();

const RegexProvider = ({ children }) => {
    const [regexData, setRegexData] = useState([]);

    return (
        <RegexContext.Provider value={{ regexData, setRegexData }}>
            {children}
        </RegexContext.Provider>
    );
};

const useRegexContext = () => useContext(RegexContext);
export { RegexProvider, useRegexContext };