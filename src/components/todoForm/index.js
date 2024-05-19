import React, { useState } from 'react';

export function TodoForm(props) {
    const [text, setText] = useState('');

    const addItem = (event) => {
        event.preventDefault();
        if (text) {
            props.onAddItem(text);
            setText('');
        }
    };

    return (
        <form>
            <input
                type="text"
                maxLength="150"
                onChange={(e) => setText(e.target.value)}
                value={text}
            ></input>
            <button onClick={addItem}>adicionar</button>
        </form>
    );
}
