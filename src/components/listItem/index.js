import React from 'react';
import { Card } from '../card';

function DoneImage(props) {
    if (props.done) return <img src="../assets/on.png"></img>;

    return <img src="../assets/off.png"></img>;
}

export function ItemList(props) {
    return (
        <li className={props.item.done ? 'done' : ''}>
            <Card>
                {props.item.text}
                <div>
                    <button
                        className="btnList"
                        onClick={() => {
                            props.onItemDeleted(props.item);
                        }}
                    >
                        <img src="../assets/lixeira.png" alt="delete"></img>
                    </button>

                    <button
                        className="btnList"
                        onClick={() => {
                            props.onDone(props.item);
                        }}
                    >
                        <DoneImage done={props.item.done}></DoneImage>
                    </button>
                </div>
            </Card>
        </li>
    );
}
