import TextField from './TextField';

const Control = () => {
    return (
        <section className='control'>
            <TextField />
            <form className="control container">
                <div className="character-length"></div>
                <div className="checkbox"></div>
                <div className="strength"></div>
                <button type='submit'>GENERATE</button>
            </form>
        </section>
    );
};

export default Control;