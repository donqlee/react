/* eslint-disable */
import { mapToStyles } from "@popperjs/core/lib/modifiers/computeStyles";
import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Jumbotron,
  Button,
} from "react-bootstrap";
import "./App.css";
import Data from "./data";
import { Link, Route, Switch } from "react-router-dom";
import Detail from "./Detail";
import styled from 'styled-components'
import axios from 'axios';

let 박스 = styled.div`
  padding : 20px;
  background : black;
  width : 20px;
  height : 20px
`;

function App() {
  let [shoes, setShoes] = useState(Data);
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/detail">
                Detail
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <Jumbotron className="background">
            <h1>20% Season Off</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>
          <div className="container">
            <div className="row">
              {shoes.map((a, i) => {
                return <Card shoes={a} i={i} key={i} />;
              })}
            </div>
          </div>
        </Route>
        <Route path="/detail/:id">
          <Detail shoes={shoes} />
        </Route>
        {/* <Route path="/어쩌구" component={Modal}></Route> */}
        <Route path="/:id">
          {/* :id는 모든문자라는 경로를 의미 */}
          <div>아무거나적었을때 이거 보여주셈</div>
        </Route>
      </Switch>
      {/* Switch 컴포넌트 여러개가 맞아도 하나만 보여주세요 */}
      <button className="btn btn-primary" onClick={() => {
        //로딩중이라는 UI 띄움
        axios.get('https://codingapple1.github.io/shop/data2.json')
          //1. 버튼을 누르면 ajax 요청으로 데이터를 가져옴
          //2. 그걸 shoes라는 state에 추가 [... blah] -> 껍질을 벗김 
          .then((res) => {
            // 로딩중이라는 UI 띄움
            setShoes([...shoes, ...res.data]);

          })
          .catch(() => {
            console.log("실패했어요")
          })
      }}>더보기</button>
    </div >
  );
}
function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        width="100%"
      />
      <h4>{props.shoes.title}</h4>
      <p>
        {props.shoes.content} & {props.shoes.price}
      </p>
    </div>
  );
}

export default App;
