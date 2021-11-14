import logo from "./logo.svg";
import "./App.css";

function App() {
  let posts = "강남 고기 맛집";
  function 함수() {
    return 100;
  }
  return (
    <div className="App">
      <div className="black-nav">
        {/* class 대신 className으로 써야함 */}
        <div style={{ color: "blue", fontSize: "30px" }}>개발 Blog</div>
        {/* style 속성 집어넣을때 style={object 자료형으로 만든 스타일}
        속성명은 camelCase, 속성값은 글자취급 */}
      </div>
      {/* 데이터 바인딩이 쉽다. {변수명}
          함수, src, id, href, 클래스명 등의 속성에도 */}
      <h4>{posts}</h4>
    </div>
  );
}

export default App;
