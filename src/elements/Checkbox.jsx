import useRegexData from "../customHooks/useRegexData";
import { checkboxData } from "../data";

const Checkbox = () => {
    const { checkedData, handleCheckbox } = useRegexData();

    return (
        <>
            {checkboxData.map(item => (
                <label key={item.id} className="checkbox" htmlFor={item.name}>
                    <input
                        className="checkbox__input"
                        type="checkbox"
                        id={item.name}
                        onChange={handleCheckbox}
                        name={item.name}
                        checked={checkedData[item.name] || false} // Initialize as false if not found
                    />
                    <span className="checkbox__check-mark"></span>
                    {item.text}
                </label>
            ))}
        </>
    );
};

export default Checkbox;