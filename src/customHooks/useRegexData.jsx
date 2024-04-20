import { useState, useEffect } from 'react';
import { useRegexContext } from '../contexts/RegexContext';

const useRegexData = () => {
    const { regexData, setRegexData } = useRegexContext();
    const [checkedData, setCheckedData] = useState({});

    const handleCheckbox = (e) => {
        const { name, checked } = e.target;

        setCheckedData(prevData => ({
            ...prevData,
            [name]: checked
        }))
    };

    useEffect(() => {
        let convertedRegex = [];
        const regexMapping = {
            uppercase: 'A-Z',
            lowercase: 'a-z',
            numbers: '0-9',
            symbols: '\\W'
        };

        // Get keys of checkedData
        const checkedItems = Object.keys(checkedData).filter(key => checkedData[key]);

        // Map checkedItems keys
        if (checkedItems.length > 0) {
            convertedRegex = checkedItems.map(item => {
                return regexMapping[item]
            })
        }

        // Create a new regular expression constructor
        setRegexData(convertedRegex.length > 0 ? new RegExp(`[${convertedRegex.join('')}]`, 'g') : null);

    }, [checkedData]);

    return {checkedData, handleCheckbox};
};

export default useRegexData;