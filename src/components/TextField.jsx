import copyIcon from '../assets/images/icon-copy.svg';

const TextField = () => {
    return (
        <div className="container">
            <div className='text-field'>
                <span className="text-field__text">P4$5W0rD!</span>
                <span className='text-field__helper-text'>
                    copied
                </span>
                <img
                    className="text-field__trailing-icon"
                    src={copyIcon}
                    alt="Copy icon" />
            </div>
        </div>
    );
};

export default TextField;