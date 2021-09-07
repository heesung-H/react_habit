import React, { memo } from 'react';

const HabitAddForm = memo(props => {
  
    const formRef = React.createRef();
    const inputRef = React.createRef();

    const onSubmit = event => {
        event.preventDefault();

        const name = inputRef.current.value;
        name && props.onAdd(name);
        formRef.current.reset();
    }

    return (
        <>
            <form className="add-form" ref={formRef} onSubmit={onSubmit}>
                <input ref={inputRef} className="habit-add-text" placeholder="Habit" type="text"/>
                <button className="habit-add-btn">Add</button>
                <button onClick={props.onReset} className="habit-reset-btn">reset</button>
            </form>
        </>
    );
});

export default HabitAddForm;