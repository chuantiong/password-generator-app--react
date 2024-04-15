const Checkbox = (props) => {
    const {id, text} = props;

    return (
        <label className="checkbox" htmlFor={id}>
            <input className="checkbox__input" type="checkbox" id={id}/>
            <span class="checkbox__check-mark"></span>
            {text}
        </label>
    );
};

export default Checkbox;