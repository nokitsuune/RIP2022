import React from 'react';
import {Button, Card, Col, Image, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {VITAMIN_ROUTE} from "../utils/consts";

const VitaminItem = ({vitamin}) => {
    const history = useHistory()
    return (
        <Col md={3} className="mt-3 d-flex justify-content-between" onClick={() => history.push(VITAMIN_ROUTE + '/' + vitamin.id)}>
            <Card style={{width:500, cursor: 'pointer'}} border={"light"} className="m-lg-auto">
                <Image width={240} src={process.env.REACT_APP_API_URL+ vitamin.img}/>
                <div>
                    <div>{vitamin.name}</div>

                </div>
                <Row>
                    <Col>
                        <div className="mt-3">
                            <div>{vitamin.price} руб.</div>
                        </div>
                    </Col>
                    <Col>
                        <Button className="mt-3" variant="success"ы>
                            <div>Корзина</div>
                        </Button>
                    </Col>
                </Row>


            </Card>
        </Col>
    );
};

export default VitaminItem;