import React from 'react';
import { strengthData } from "../data";

const StrengthLevel = ({ value }) => {
    const defaultSpans = Array.from({ length: 4 }, (_, index) => index + 1);

    let strengthLevel = '';
    let classLevel = '';

    if (value === 0) {
        strengthLevel = 'empty';
        classLevel = '';
    } else if (value >= 1 && value <= 5) {
        strengthLevel = 'too weak!';
        classLevel = 'lvl-too-weak';
    } else if (value >= 6 && value <= 10) {
        strengthLevel = 'weak';
        classLevel = 'lvl-weak';
    } else if (value >= 11 && value <= 15) {
        strengthLevel = 'medium';
        classLevel = 'lvl-medium';
    } else if (value >= 16 && value <= 20) {
        strengthLevel = 'strong';
        classLevel = 'lvl-strong';
    }

    const renderBlock = strengthData.find(item => item.strength === strengthLevel);

    return (
        <div className='strength__lvl'>
            <span
                className={value === 0 ? 'lvl-text opacity-0' : 'lvl-text'}
            >
                {strengthLevel}
            </span>
            <div className="lvl-blocks">
                <div className='lvl-outlined-blocks'>
                    {defaultSpans.map((_, index) => (
                        <span key={index} className="lvl-outlined"></span>
                    ))}
                </div>
                <div className="lvl-filled-blocks">
                    {renderBlock && Array.from({ length: renderBlock.level }, (_, index) => (
                        <span key={index} className={`lvl-filled ${classLevel}`}></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StrengthLevel;
