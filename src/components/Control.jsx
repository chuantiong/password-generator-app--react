import React, { useState } from 'react';
import { useValueContext } from '../contexts/ValueContext';
import { useRegexContext } from '../contexts/RegexContext';
import TextField from './TextField';
import Slider from '../elements/Slider';
import Strength from './Strength';
import Checkbox from '../elements/Checkbox';
import Button from '../elements/Button';

const Control = () => {
    const { value } =  useValueContext();
    const { regexData } = useRegexContext();
    const [newPassword, setNewPassword] = useState('');

    const generateRandomPassword = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
        const passwordLength = value;
        const regex = regexData;
        let password = '';

        const validCharacters = characters.match(regex);

        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * validCharacters.length);
            const randomChar = validCharacters[randomIndex];
            password += randomChar;
        }

        return password;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let password = generateRandomPassword();
        setNewPassword(password);
    };

    return (
        <section className='control'>
            <TextField
                newPassword={newPassword}
            />
            <form className="form" onSubmit={handleSubmit}>
                <Slider />
                <div className="checkboxes">
                    <Checkbox />
                </div>
                <Strength />
                <Button />
            </form>
        </section>
    );
};

export default Control;
