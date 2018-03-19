import React from 'react';
import logo from '../logo.svg';
import {Survey} from './Survey';
import './App.css';
import {defaultChoices} from '../helpers/default-survey';
import {AddChoice} from './AddChoice';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
class App extends React.Component {
  constructor(){
    super();
    this.state={
      survey: defaultChoices
    }
  }
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <div>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Web labs survey system with React JS</h1>
          </header>
        </div>
        <div className="App-Que">
          <strong>Vote for your favourite color....!</strong>
        </div>
        <div className="App-Data">
            <Survey survey={this.state.survey}/>
            <div className="App-addData">
              <AddChoice onAddChoice={this.onAddChoice}/>
            </div>
        </div>

      </div>
      </MuiThemeProvider>
    );
  }
  onAddChoice=(newSurveyData)=>{
      this.state.survey.push({
      id: Math.floor((Math.random()*10000 +1)),
      color: newSurveyData,
    });
    this.setState({survey: this.state.survey})
  }
}

export {App};