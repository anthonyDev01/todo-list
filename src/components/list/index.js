import React from 'react';
import { ItemList } from '../listItem';

export function List(props) {
    return (
        <ul>
            {props.item.map((item) => (
                <ItemList
                    key={item.id}
                    item={item}
                    onDone={props.onDone}
                    onItemDeleted={props.onItemDeleted}
                >

                </ItemList>
            ))}
        </ul>
    );
}
