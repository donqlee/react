import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "돈큐의 코딩 아카데미",
  ]);
  let [따봉, 따봉변경] = useState(0);

  let [누른제목, 누른제목변경] = useState(0);
  let [입력값, 입력값변경] = useState("");

  // [a (남자 코트 추천), b (남자 코트 추천 state 정정해주는 함수)]
  // state 는
  // 1. 변수 대신 쓰는 데이터 저장공간
  // 2. useState()를 이용해 만들어야함
  // 3. 문자, 숫자 ,array, Object 다 저장가능

  // state에 데이터 저장해놓는 이유 (state는 변경되면 HTML이 자동으로 재렌더링 된다.)

  let [modal, modal변경] = useState(false);
  // 모달창을 켜고 닫는 스위치

  let posts = "강남 고기 맛집";
  function 함수() {
    return 100;
  }
  function 제목바꾸기() {
    // state 데이터 수n정 테크닉
    // 수정된[데이터]를 만든후 state를 deep copy해서 수정
    var newArray = [...글제목];
    newArray[0] = "여자코트 추천";
    글제목변경(newArray);
  }
  function 제목정렬() {
    var newArray1 = [...글제목];
    newArray1.sort();
    글제목변경(newArray1);
  }
  function 모달창제어() {
    modal변경(!modal);
  }

  let arr = [2, 3, 4];
  let new_arr = arr.map(function (a) {
    return a * 2;
  });
  // 맵 함수 활용법

  function 반복된UI() {
    var 어레이 = [];
    for (var i = 0; i < 3; i++) {
      어레이.push(<div>안녕</div>);
    }
    return 어레이;
  }
  return (
    <div className="App">
      <div className="black-nav">
        {/* class 대신 className으로 써야함 */}
        <div>개발 Blog</div>
        {/* style 속성 집어넣을때 style={object 자료형으로 만든 스타일}
        속성명은 camelCase, 속성값은 글자취급 */}
      </div>
      <button onClick={제목바꾸기}>바꾸기버튼</button>
      <button onClick={제목정렬}>정렬버튼</button>
      {/* 데이터 바인딩이 쉽다. {변수명}
          함수, src, id, href, 클래스명 등의 속성에도 */}
      <div className="list">
        <h3>
          {글제목[0]}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>
          {따봉}
          {/* 
          이벤트 다루는법
          onClick={클릭될 때 실행할 함수}
          onClick={()=>{실행할내용}} 
          */}
        </h3>
        <p>2월 17일 발행</p>
        <hr></hr>
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>2월 17일 발행</p>
        <hr></hr>
      </div>
      <div className="list">
        <h3
          onClick={() => {
            modal변경(!modal);
          }}
        >
          {/* 모달 토글을 만들고 싶을때 위와 같이 만들면 된다 */}
          {글제목[2]}
        </h3>
        <p>2월 17일 발행</p>
        <hr></hr>
      </div>
      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h3
              onClick={() => {
                누른제목변경(i);
              }}
            >
              {a}
              <span
                onClick={() => {
                  따봉변경(따봉 + 1);
                }}
              >
                👍
              </span>
              {따봉}
            </h3>
            <p>2월 18일 발행</p>
            <hr></hr>
          </div>
        );
      })}
      {입력값}
      <input
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      ></input>
      <div className="publish">
        <input
          onChange={(e) => {
            입력값변경(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            var arrayCopy = [...글제목];
            arrayCopy.push(입력값);
            글제목변경(arrayCopy);
          }}
        >
          저장
        </button>
      </div>
      {/* HTML을 한단어로 줄여서 쓸수 있는 방법: 리액트의 Component 문법 */}
      {/* Componet 유의 사항
      1. 이름은 대문자
      2. return() 안에 있는건 태그 하나로 묶어야함 -> return() 내부를 묵을때 의미없는 <div> 쓰기 싫으면 <> </> 이걸쓴다 */}
      {/* 어떤걸 Component로 만드는게 좋을까
      - 반복출현하는 HTML 덩어리들
      - 자주 변경되는 HTML UI들
      - 다른 페이지 만들때도 컴포넌트로 만듬 */}
      {/* jsx에서는 if문을 삼항연산자로 주로 쓴다.
      1<3 ? console.log('맞아요') : console.log('틀려요') 
      참일 경우 맞아요, 거짓일 경우 틀려요를 뱉는다*/}
      {modal === true ? (
        <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
      ) : null}
      <button onClick={모달창제어}>모달제어</button>
      {/* 일반적인 반복문 쓰는법  */}

      <Profile></Profile>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
  // props로 자식에게 state  전해주는법
  // 1. <자식컴포넌트 작명={state명}/>
  // 2. 자식컴포넌트에서 props 파라미터 입력 후 사용
}

//예전 리엑트 컴포넌트 만드는법
class Profile extends React.Component {
  constructor() {
    super();
    // state 설정 방법
    this.state = { name: "Kim", age: 30 };
  }
  //함수 만드는 곳
  changeName() {
    this.setState({ name: "Park" });
  }

  render() {
    return (
      <div>
        <h3>프로필입니다.</h3>
        {/* state 꺼내는법 */}
        <p>저는 {this.state.name}</p>
        <button
          onClick={() => {
            // state 변경하는법
            this.setState({ name: "Park" });
          }}
        >
          버튼
        </button>
        <button onClick={this.changeName.bind(this)}>버튼2</button>
      </div>
    );
  }
}

export default App;
