/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from 'styled-components'
import './Detail.scss'

let Box = styled.div`
  padding : 20px;
`;
let Title = styled.h4`
  font-size : 25px;
  color : ${props => props.색상}
`;

class Detail2 extends React.Component {

  componentDidMount() {
    //Detail2 컴포넌트가 Mount(등장) 되었을 때 실행할 코드
  }
  componentWillUnmount() {
    //Detail2 컴포넌트가 Unmount(해지) 되기 직전에 실행할 코드
  }

}

function Detail(props) {
  let [alert, setAlert] = useState(true);
  let [inputData, setInputData] = useState('');
  useEffect(() => {
    // useEffect 훅 (컴포넌트가 mount 되었을 때, 컴포넌트가 update 될때, 특정코드를 실행할 수 있음)
    let timer = setTimeout(() => {
      setAlert(false);
    }, 2000)
    console.log("alert 변경시에만 실행")
    return () => { clearTimeout(timer) } // 타이머 해제 스킬
  }, [alert]); // alert라는 state가 변경이 될때만, 빈칸시 업데이트시 실행 안됌

  useEffect(() => {
    return (() => { console.log("") })
    // useEffect 훅 2 return (컴포넌트가 사라질때 코드를 실행)
  })
  // useEffect 훅 3 여러개를 사용하고 싶다면 여러개 적으면 되고 적은 순서대로 실행 된다.

  let { id } = useParams();
  let shoe = props.shoes.find(function (s) {
    return s.id == id;
  });
  let history = useHistory();
  return (
    <div className="container">
      <Box>
        <Title 색상={'blue'}>Detail</Title>
        {/* <Title 색상="red">Detail</Title>
        <Title className="red">scss 확인용</Title> */}
        {inputData}
        <input onChange={(e) => { setInputData(e.target.value) }}></input>
        {
          alert === true
            ? (<div className="my-alert my-alert-yellow">
              <p>재고가 얼마 남지 않았습니다.</p>
            </div>)
            : null
        }



      </Box>
      <div className="row">
        <div className="col-md-6">
          <img src={shoe.url} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{shoe.title}</h4>
          <p>{shoe.content}</p>
          <p>{shoe.price}원</p>
          <button className="btn btn-danger">주문하기</button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack();
              //history.push('/') 해당경로로 이동시켜줌
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
