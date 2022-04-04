import React, {useState} from "react";
import { Container, Row, Col, ListGroup} from "react-bootstrap";
import ReactDOM from "react-dom";

import { NavLink, Routes, Route, HashRouter } from "react-router-dom";
import strawberry from '../images/Strawberry-Smoothie.jpg'
import bananna from '../images/banana.jpg'
import blueberry from '../images/blueberry.jpg'
import cucumber from '../images/Cucumber.jpg'
import mango from '../images/mango.jpg'
import pom from '../images/pom.jpg'
import brownie from '../images/brownie.jpeg'
import cake from '../images/cake.jpeg'
import bread from '../images/bread.jpg'
import blissballs from '../images/blissballs.jpg'
import muffin from '../images/muffin.jpg'
import popcorn from '../images/popcorn.jpg'

import "../index.css"

import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

class Videos extends React.Component {

    state={
        openModal : false
    }

    onClickButton = e =>{
        e.preventDefault()
        this.setState({openModal : true})
    }

    onCloseModal = ()=>{
        this.setState({openModal : false})
    }
    render() {
        return(
            <>
                <Row>
                    <Col>
                        <div className="video-card">
                            <button onClick={this.onClickButton}>
                                <img alt="" src={brownie} className="text-center"></img>
                            </button>
                            <ul>
                                <li>4 Eggs</li>
                                <li>Chocolate Hazelnut spread</li>
                                <li>Self rising flour</li>
                                <li>Raspberries</li>
                            </ul>
                        </div>
                        <Modal open={this.state.openModal} onClose={this.onCloseModal}>
                            <img alt="" src={brownie} className="text-center"></img>
                            <ul>
                                <li>4 Eggs</li>
                                <li>Chocolate Hazelnut spread</li>
                                <li>Self rising flour</li>
                                <li>Raspberries</li>
                            </ul>
                        </Modal>
                    </Col>
                    <Col>
                        <div className="video-card">
                            <button onClick={this.onClickButton}>
                                <img alt="" src={bread} width="200rem" height="200"></img>
                            </button>
                            <ul>
                                <li>Overripe Bananas</li>
                                <li>Sugar</li>
                                <li>Self rising flour</li>
                                <li>whole egg mayo</li>
                            </ul>
                        </div>
                        <Modal open={this.state.openModal} onClose={this.onCloseModal}>
                            <img alt="" src={bread} className="text-center"></img>
                            <ul>
                                <li>Overripe Bananas</li>
                                <li>Sugar</li>
                                <li>Self rising flour</li>
                                <li>whole egg mayo</li>
                            </ul>
                        </Modal>
                    </Col>
                    <Col>
                        <div className="video-card">
                            <button onClick={this.onClickButton}>
                                <img alt="" src={blissballs} width="200rem" height="200"></img>
                            </button>
                            <ul>
                                <li>Cumbled Madeira cakes</li>
                                <li>Vanilla frosting</li>
                                <li>Milk chocolate</li>
                                <li>Coconut</li>
                            </ul>
                        </div>
                        <Modal open={this.state.openModal} onClose={this.onCloseModal}>
                            <img alt="" src={blissballs} className="text-center"></img>
                            <ul>
                                <li>Cumbled Madeira cakes</li>
                                <li>Vanilla frosting</li>
                                <li>Milk chocolate</li>
                                <li>Coconut</li>
                            </ul>
                        </Modal>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="video-card">
                            <button onClick={this.onClickButton}>
                                <img alt="" src={cake} className="text-center"></img>
                                </button>
                            <ul>
                                <li>Butter</li>
                                <li>Dark chocolate</li>
                                <li>4 eggs</li>
                                <li>Sugar</li>
                            </ul>
                        </div>
                        <Modal open={this.state.openModal} onClose={this.onCloseModal}>
                            <img alt="" src={cake} className="text-center"></img>
                            <ul>
                                <li>Butter</li>
                                <li>Dark chocolate</li>
                                <li>4 eggs</li>
                                <li>Sugar</li>
                            </ul>
                        </Modal>
                    </Col>
                    <Col>
                        <div className="video-card">
                            <button onClick={this.onClickButton}>   
                                <img alt="" src={muffin} width="200rem" height="200"></img>
                                </button>
                            <ul>
                                <li>Strawberries and Cream icecream</li>
                                <li>Self raising flour</li>
                                <li>Chopped strawberres</li>
                                <li>Sprinkles</li>
                            </ul>
                        </div>
                        <Modal open={this.state.openModal} onClose={this.onCloseModal}>
                            <img alt="" src={muffin} className="text-center"></img>
                            <ul>
                                <li>Strawberries and Cream icecream</li>
                                <li>Self raising flour</li>
                                <li>Chopped strawberres</li>
                                <li>Sprinkles</li>
                            </ul>
                        </Modal>
                    </Col>
                    <Col>
                        <div className="video-card">
                            <button onClick={this.onClickButton}>
                                <img alt="" src={popcorn} width="200rem" height="200"></img>
                                </button>
                            <ul>
                                <li>Popping corn</li>
                                <li>Packet of Jersey Carmels</li>
                                <li>Milk</li>
                                <li>Sea Flakes</li>
                            </ul>
                        </div>
                        <Modal open={this.state.openModal} onClose={this.onCloseModal}>
                            <img alt="" src={popcorn} className="text-center"></img>
                            <ul>
                                <li>Popping corn</li>
                                <li>Packet of Jersey Carmels</li>
                                <li>Milk</li>
                                <li>Sea Flakes</li>
                            </ul>
                        </Modal>
                    </Col>
                </Row>
            </>
        )
    }
}

class Liked extends React.Component {
    state={
        openModal : false
    }

    onClickButton = e =>{
        e.preventDefault()
        this.setState({openModal : true})
    }

    onCloseModal = ()=>{
        this.setState({openModal : false})
    }
    render() {
        return(
            <>
                <Row>
                    <Col>
                        <div className="video-card">
                        <button onClick={this.onClickButton}>
                            <img alt="" src={strawberry} className="text-center"></img>
                            </button>
                            <ul>
                                <li>Frozen straweberries</li>
                                <li>Fresh banana's</li>
                                <li>Greek Yogurt</li>
                                <li>Milk</li>
                            </ul>
                        </div>
                        <Modal open={this.state.openModal} onClose={this.onCloseModal}>
                            <img alt="" src={strawberry} className="text-center"></img>
                            <ul>
                                <li>Frozen straweberries</li>
                                <li>Fresh banana's</li>
                                <li>Greek Yogurt</li>
                                <li>Milk</li>
                            </ul>
                        </Modal>
                    </Col>
                    <Col>
                        <div className="video-card">
                        <button onClick={this.onClickButton}>
                            <img alt="" src={mango} width="200rem" height="200"></img>
                        </button>
                            <ul>
                                <li>Mangoes</li>
                                <li>Banana</li>
                                <li>Yogurt</li>
                                <li>Milk</li>
                            </ul>
                        </div>
                        <Modal open={this.state.openModal} onClose={this.onCloseModal}>
                            <img alt="" src={mango} className="text-center"></img>
                            <ul>
                                <li>Mangoes</li>
                                <li>Banana</li>
                                <li>Yogurt</li>
                                <li>Milk</li>
                            </ul>
                        </Modal>
                    </Col>
                    <Col>
                        <div className="video-card">
                        <button onClick={this.onClickButton}>
                            <img alt="" src={blueberry} width="200rem" height="200"></img>
                            </button>
                            <ul>
                                <li>Blueberries</li>
                                <li>Plain Yogurt</li>
                                <li>Reduced Fat Milk</li>
                                <li>White sugar</li>
                            </ul>
                        </div>
                        <Modal open={this.state.openModal} onClose={this.onCloseModal}>
                            <img alt="" src={blueberry} className="text-center"></img>
                            <ul>
                                <li>Blueberries</li>
                                <li>Plain Yogurt</li>
                                <li>Reduced Fat Milk</li>
                                <li>White sugar</li>
                            </ul>
                        </Modal>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="video-card">
                        <button onClick={this.onClickButton}>
                            <img alt="" src={bananna} className="text-center"></img>
                            </button>
                            <ul>
                                <li>Banana</li>
                                <li>Greek Yogurt</li>
                                <li>Apples</li>
                                <li>Water or Milk</li>
                            </ul>
                        </div>
                        <Modal open={this.state.openModal} onClose={this.onCloseModal}>
                            <img alt="" src={bananna} className="text-center"></img>
                            <ul>
                                <li>Banana</li>
                                <li>Greek Yogurt</li>
                                <li>Apples</li>
                                <li>Water or Milk</li>
                            </ul>
                        </Modal>
                    </Col>
                    <Col>
                        <div className="video-card">
                        <button onClick={this.onClickButton}>
                            <img alt="" src={cucumber} width="200rem" height="200"></img>
                            </button>
                            <ul>
                                <li>Cucumber</li>
                                <li>Banana</li>
                                <li>Frozen Pineapple</li>
                                <li>Spinach</li>
                            </ul>
                        </div>
                        <Modal open={this.state.openModal} onClose={this.onCloseModal}>
                            <img alt="" src={cucumber} className="text-center"></img>
                            <ul>
                                <li>Cucumber</li>
                                <li>Banana</li>
                                <li>Frozen Pineapple</li>
                                <li>Spinach</li>
                            </ul>
                        </Modal>
                    </Col>
                    <Col>
                        <div className="video-card">
                            <button onClick={this.onClickButton}>
                                <img alt="" src={pom} width="200rem" height="200"></img>
                            </button>
                            <ul>
                                <li>Pomegranate seeds</li>
                                <li>Frozen pineapple</li>
                                <li>Ice</li>
                                <li>Greek Yogurt</li>
                            </ul>
                        </div>
                        <Modal open={this.state.openModal} onClose={this.onCloseModal}>
                        <img alt="" src={pom} width="200rem" height="200"></img>
                            <ul>
                                <li>Pomegranate seeds</li>
                                <li>Frozen pineapple</li>
                                <li>Ice</li>
                                <li>Greek Yogurt</li>
                            </ul>
                        </Modal>
                    </Col>
                </Row>
            </>
        )
    }
}

class Account extends React.Component {
    render() {
        return(
            <Row>
                <Col></Col>
                <Col xs={6}>
                    <ul>
                        <li>Name: Justin Cepeda</li>
                        <li>Account Type: User</li>
                        <li>Account Created: 3/8/2022</li>
                    </ul>
                </Col>
                <Col></Col>
            </Row>
        )
    }
}


export default class Main extends React.Component {
    render() {
        return(
            <HashRouter>
                <>
                    <Row className="separation">
                        <Col xs={2}>
                        <ListGroup className="text-center">
                            <ListGroup.Item>
                                <NavLink to="/" className="navlink">For you</NavLink>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <NavLink to="/liked" className="navlink">Liked</NavLink>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <NavLink to="/account" className="navlink">Account</NavLink>
                            </ListGroup.Item>
                        </ListGroup>
                        </Col>
                        <Col xs={9}>
                            <>
                                <Routes>
                                    <Route exact={true} path="/" element={<Videos />}/>
                                    <Route path="/liked" element={<Liked />}/>
                                    <Route path="/account" element={<Account />}/>
                                </Routes>
                            </>
                        </Col>
                    </Row>
                </>
            </HashRouter>
        )
    }
}

ReactDOM.render(<Main/>, document.getElementById('root'));