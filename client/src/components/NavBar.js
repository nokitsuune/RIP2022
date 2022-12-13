import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {NavLink} from "react-router-dom"
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";


const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()


    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="secondary" expand="lg">
            <Container>
                <NavLink className="" style={{color:"darkgray", fontSize: 30, fontWeight: "bold"}} to={SHOP_ROUTE}>Витамины</NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    {user.isAuth ?
                        <Nav
                            className="ms-lg-auto"
                            style={{ maxHeight: '150px' }}
                            navbarScroll
                        >

                            <Button
                                variant={'outline-dark'}
                                onClick={() => history.push(ADMIN_ROUTE)}
                            >
                                Админ панель
                            </Button>

                            <Button
                                onClick={() => logOut()}
                                variant={'outline-dark'}
                                className="ms-lg-2"
                            >
                                Выйти
                            </Button>
                        </Nav>:
                        <Nav
                            className="ms-lg-auto"
                            style={{ maxHeight: '150px' }}
                            navbarScroll
                        >
                            <Button variant={'outline-dark'} onClick={() => history.push(LOGIN_ROUTE)}>Вход</Button>
                        </Nav>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
})

export default NavBar;