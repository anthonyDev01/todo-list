import React from "react";
import { Card } from "../card";
import lixeira from "../../assets/lixeira.png";
import off from "../../assets/off.png";
import on from "../../assets/on.png";

export function ItemList(props) {
    function DoneImage(props) {
        if (props.done) return <img src={on}></img>;

        return <img src={off}></img>;
    }

    return (
        <li className={props.item.done ? "done" : ""}>
            <Card>
                {props.item.text}
                <div>
                    <button
                        className="btnList"
                        onClick={() => {
                            props.onItemDeleted(props.item);
                        }}
                    >
                        <img src={lixeira} alt="delete"></img>
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
