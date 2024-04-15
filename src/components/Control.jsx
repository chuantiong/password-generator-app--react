import React, { useState } from 'react';
import TextField from './TextField';
import Checkbox from '../elements/Checkbox';

const Control = () => {
    const [value, setValue] = useState(10);
    const [backgroundStyle, setBackgroundStyle] = useState('');

    const handleInputChange = (e) => {
        const newValue = parseInt(e.target.value);
        setValue(newValue);
        updateBackground(newValue);
    };

    const updateBackground = (value) => {
        const percent = (value / 20) * 100;
        setBackgroundStyle(
            `linear-gradient(to right, #A4FFAF 0%, #A4FFAF ${percent}%, #18171F ${percent}%, #18171F 100%)`
        );
    };

    return (
        <section className='control'>
            <TextField />
            <form className="container">
                <div className="slider-idle">
                    <div className='slider-idle__text'>
                        character length
                        <span className='length-number'>{value}</span>
                    </div>
                    <input
                        className='slider-idle__slider'
                        type="range"
                        min={0}
                        max={20}
                        defaultValue={value}
                        onChange={handleInputChange}
                        style={{ background: backgroundStyle}}
                    />
                </div>
                <div className="checkboxes">
                    <Checkbox
                        id="uppercase"
                        text="include uppercase letters"
                    />
                    <Checkbox
                        id="lowercase"
                        text="include lowercase letters"
                    />
                    <Checkbox
                        id="numbers"
                        text="include numbers"
                    />
                    <Checkbox
                        id="symbols"
                        text="include symbols"
                    />
                </div>
                <div className="strength"></div>
                <button type='submit'>GENERATE</button>
            </form>
        </section>
    );
};

export default Control;