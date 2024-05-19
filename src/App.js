import React, { useEffect, useState } from 'react';
import { List } from './components/list';
import { TodoForm } from './components/todoForm';
import Item from './class/item';
import './App.css';

function App() {
    const SAVED_ITEMS = 'savedItems';

    const [items, setItem] = useState(() => {
        const savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));

        return savedItems ? savedItems : [];
    });

    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
        console.log(savedItems);
        if (savedItems) setItem(savedItems);
    }, []);

    useEffect(() => {
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
    }, [items]);

    const onAddItem = (text) => {
        let it = new Item(text);
        setItem((prevState) => [...prevState, it]);
    };

    const onItemDeleted = (item) => {
        let filteredItems = items.filter((it) => it.id !== item.id);
        setItem(filteredItems);
    };

    const onDone = (item) => {
        let updatedItems = items.map((it) => {
            if (it.id === item.id) {
                item.done = !it.done;
            }
            return it;
        });

        setItem(updatedItems);
    };

    return (
        <div className="container">
            <h1>Lista de Afazeres</h1>
            <TodoForm onAddItem={onAddItem}></TodoForm>
            <List
                onItemDeleted={onItemDeleted}
                item={items}
                onDone={onDone}
            ></List>
        </div>
    );
}

export default App;
