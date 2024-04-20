import copyIcon from '../assets/images/icon-copy.svg';

const TextField = (props) => {
    const { newPassword } = props;

    return (
        <div className='text-field'>
            <span
                className={newPassword ? 'text-field__text' : 'text-field__text placeholder'}
            >
                {newPassword ? newPassword : 'P4$5W0rD!'}
            </span>
            <span className='text-field__helper-text'>
                copied
            </span>
            <img
                className="text-field__trailing-icon"
                src={copyIcon}
                alt="Copy icon"
            />
        </div>
    );
};

export default TextField;