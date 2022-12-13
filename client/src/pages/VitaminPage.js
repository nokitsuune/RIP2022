import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {fetchOneItem} from "../http/itemAPI";

const VitaminPage = () => {
    const [vitamin, setVitamin] = useState({info: []})
    const {id} = useParams()
    useEffect( () => {
        fetchOneItem(id).then(data => setVitamin(data))

    }, [])
        return (
        <Container className="mt-3">
            <Row>
                <Col md={5}>
                    <Image width={450} src={process.env.REACT_APP_API_URL + vitamin.img}/>
                    <h2>{vitamin.name}</h2>
                    <Row className="mt-3">
                        <Col>
                            <div>{vitamin.price} руб.</div>
                        </Col>
                        <Col>
                            <Button variant="success">Добавить в корзину </Button>

                        </Col>
                    </Row>
                </Col>
                <Col md={5} >
                    <h2>Характеристики</h2>
                    {vitamin.info.map(info =>
                        <Row className="mt-3" key={info.id}>
                            <h5>{info.title}:</h5>{info.description}
                        </Row>
                    )}


                </Col>
            </Row>

        </Container>
    );
};

export default VitaminPage;