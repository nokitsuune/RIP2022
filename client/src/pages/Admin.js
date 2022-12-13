import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateItem from "../components/modals/CreateItem";

const Admin = () => {
    const [typeVisible, setTypeVisible] = useState(false)
    const [itemVisible, setItemVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                onClick={() => setTypeVisible(true)}
                variant={"outline-dark"}
                className="mt-2"
            >
                Добавить тип
            </Button>
            <Button
                onClick={() => setItemVisible(true)}
                variant={"outline-dark"}
                className="mt-2"
            >
                Добавить товар
            </Button>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateItem show={itemVisible} onHide={() => setItemVisible(false)}/>

        </Container>
    );
};

export default Admin;