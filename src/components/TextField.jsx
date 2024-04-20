import React, { useState } from 'react';
import copyIcon from '../assets/images/icon-copy.svg';

const TextField = (props) => {
    const { newPassword } = props;
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        setTimeout(() =>setIsCopied(true), 250);
        setTimeout(() =>setIsCopied(false), 500);
        return navigator.clipboard.writeText(newPassword);
    };

    return (
        <div className='text-field'>
            <span
                className={newPassword ? 'text-field__text' : 'text-field__text placeholder'}
            >
                {newPassword ? newPassword : 'P4$5W0rD!'}
            </span>
            <span className='text-field__helper-text'>
                {isCopied ? 'copied' : ''}
            </span>
            <img
                className={newPassword ? 'text-field__trailing-icon' : 'text-field__trailing-icon disabled'}
                src={copyIcon}
                alt="Copy icon"
                onClick={handleCopy}
            />
        </div>
    );
};

export default TextField;