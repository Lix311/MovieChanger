import React, {Component} from 'react';
import './App.css';
import MainContainer from './Containers/MainContainer'

class App extends Component {
  state = {}

  render(){
  return (
    <div className="App">
     <MainContainer/>
    </div>
  );
}
}

export default App;
