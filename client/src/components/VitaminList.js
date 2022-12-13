import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import VitaminItem from "./VitaminItem";

const VitaminList = observer(() => {
    const {vitamins} = useContext(Context)
    return (
        <Row className="d-flex">
            {vitamins.vitamins.map(vitamin =>
                <VitaminItem key={vitamin.id} vitamin={vitamin}></VitaminItem>

            )}
        </Row>
    );
});

export default VitaminList;