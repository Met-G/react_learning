import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Hello from "./Hello";

function formatName(user) {
  return user.firstName + ' ' + user.lastName
}

const user = {
  firstName: 'Peter',
  lastName: 'Parker'
};

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

function People(props) {
  return (
    <div>
      <h1>name:{props.name} age:{props.age}</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Welcome name="Alice"/>
      <Welcome name="Bob"/>
      <Welcome name="Clark"/>
      <h1>formatName(user)</h1>
      <People name={"alibaba"} age={20}/>
      <Hello></Hello>
      <Clock date={new Date()}/>
    </div>
  )
}

function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <App className="test"/>,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);

const data = ['A', 'B', 'C']
const VDOM = (
  <div>
    <ul>
      {
        data.map((item, index) => {
          return <li key={index}>{item}</li>
        })
      }
    </ul>
  </div>
)
ReactDOM.render(VDOM, document.querySelector('#root'))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
