import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import {createItems, fetchTypes} from "../../http/itemAPI";
import {observer} from "mobx-react-lite";

const CreateItem = observer( ({show, onHide}) => {
    const {vitamins} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchTypes().then(data => vitamins.setTypes(data))
    }, [])



    const addInfo = () => {
        setInfo([...info, {title:'', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }


    const selectFile = e => {
        setFile(e.target.files[0])
    }


    const addVitamin = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('typeId', vitamins.selectedType.id)
        // formData.append('info', JSON.stringify(info))
        createItems(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить товар
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{vitamins.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {vitamins.types.map(type =>
                                <Dropdown.Item
                                    onClick={() => vitamins.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-2"
                        placeholder={"Введите название товара"}
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className="mt-2"
                        placeholder={"Введите стоимость товара"}
                        type="number"
                    />
                    <Form.Control
                        className="mt-2"
                        type="file"
                        onChange={selectFile}
                    />
                    <hr/>
                    <Button
                        onClick={addInfo}
                        variant={"outline-dark"}
                    >
                        Добавить описание
                    </Button>
                    {info.map(i =>
                            <Row className="mt-3" key={i.number}>
                                <Col md={4}>
                                    <Form.Control
                                        value={i.title}
                                        onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                        placeholder={"Введите название характеристики"}
                                    />
                                </Col>
                                <Col md={4}>
                                    <Form.Control
                                        value={i.description}
                                        onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                        placeholder={"Введите описание характеристики"}
                                    />
                                </Col>
                                <Col md={4}>
                                    <Button
                                        onClick={() => removeInfo(i.number)}
                                        variant={"outline-danger"}
                                    >
                                        Удалить
                                    </Button>
                                </Col>
                            </Row>
                        )
                    }

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-dark"} onClick={onHide}>Закрыть</Button>
                <Button variant={"success"} onClick={addVitamin}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateItem;