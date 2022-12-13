import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";

const TypeBar = observer(()=> {
    const {vitamins} = useContext(Context)
    return (
        <ListGroup>
            {vitamins.types.map(type =>
                <ListGroup.Item
                    onClick={() => vitamins.setSelectedType(type)}
                    action variant="secondary"
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
})

export default TypeBar;