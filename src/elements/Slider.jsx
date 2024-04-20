import React, { useState } from 'react';
import { useValueContext } from '../contexts/ValueContext';

const Slider = () => {
    const { value, setValue } = useValueContext();
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
        <div className="slider-idle">
            <div className='slider-idle__texts'>
                <span className="cl-text">character length</span>
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
    );
};

export default Slider;