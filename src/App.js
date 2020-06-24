import React , { Component } from 'react';
import { BrowserRouter , Route , Link } from 'react-router-dom';

// Routing start
const App = () => {
  return (
    <BrowserRouter>
        <Route exact path="/" component={Search} />
        <Route  path="/mypage/:info" component={Mypage} />
    </BrowserRouter>
  );
}
// Routing end

// 遷移前 start
/*const Search = () => {
  const param = "/mypage/" + document.querySelector("input").value;
  return (
    <div className="container  text-center mt-5">
      <input
        type="search"
        placeholder="メールアドレスを入力"
        className="col-4"
      />
      <Link to={param}><button className="col-2">進む</button></Link>
    </div>
  );
}*/

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value:''
    };
  }

  render(){
    let info = "/mypage/" + this.state.value
    return(
      <div className="container  text-center mt-5">
        <input
          type="search"
          placeholder="入力してね♡"
          className="col-4"
        />
        <Link to={info}>
          <button
            className="col-2"
            onClick={()=>{this.setState({value:document.querySelector('input').value})}}
          >
            進む
          </button>
        </Link>
      </div>
    )
  }
}
// 遷移前 end

// 遷移後 start
/*class After extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name:'未入力',
      sex:'未入力',
      birth:'未入力'
    }
  }

  render(){
    return(
      <div className="container text-center">
        <p>name:{this.state.name}</p>
        <p>sex:{this.state.sex}</p>
        <p>birth:{this.state.birth}</p>
        <Link to="/"><button>Homeへ</button></Link>
      </div>
    )
  }
}*/

const Mypage = (props) => {
  const { info } = props.match.params;
  return(
    <div className="container text-center">
      <p>name:{ info }</p>
      <p>sex:{ info }</p>
      <p>birth:{ info }</p>
      <Link to="/"><button>Homeへ</button></Link>
    </div>
  )
}
// 遷移後 end

export default App;
