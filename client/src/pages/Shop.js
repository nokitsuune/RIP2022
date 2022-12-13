import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import VitaminList from "../components/VitaminList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchItems, fetchTypes} from "../http/itemAPI";
import Pages from "../components/Pages";

const Shop = observer( () => {
    const {vitamins} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => vitamins.setTypes(data))
        fetchItems(null,1,3).then(data => {
                vitamins.setVitamins(data.rows)
                vitamins.setTotalCount(data.count)
        })
    }, [])
    useEffect(() => {
        fetchItems(vitamins.selectedType.id, vitamins.page,8).then(data => {
            vitamins.setVitamins(data.rows)
            vitamins.setTotalCount(data.count)
        })
    }, [vitamins.page, vitamins.selectedType])
    return (
        <Container>
            <Row className="mt-3">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <VitaminList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;