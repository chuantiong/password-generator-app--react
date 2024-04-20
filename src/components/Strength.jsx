import StrengthLevel from './StrengthLevel';
import { useValueContext } from '../contexts/ValueContext';

const Strength = () => {
    const { value } = useValueContext();

    return (
        <div className="strength">
            <span className='strength__text'>strength</span>
            <StrengthLevel
                value={value}
            />
        </div>
    );
};

export default Strength;