import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Choices from './Choices';
import defaultChoices from '../defaultChoices';
import AddChoice from './AddChoice';
import choiceHelper from '../helpers/choiceHelper';

class App extends React.Component
{
  constructor()
  {
    super();

    this.state = {
      choices: defaultChoices};
  }

  render() 
  {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">SURVEY</h1>
        </header>
        <p className="App-intro">
          <strong>How many brothers/sisters do you have?</strong>
        </p>
       
        <Choices choices = {this.state.choices} updateChoice={this.updateChoice}/> 
        <AddChoice addChoice = {this.addChoiceToState}/>
      </div>    
    )
  }

  addChoiceToState = (name) =>
  {
    const newChoicesList = choiceHelper.addChoice(this.state.choices, name);
    this.setState({choices: newChoicesList});
  }

  updateChoice = (id, updatedChosen) => 
  {
    var updatedChoices = choiceHelper.updateChoice(this.state.choices,id,updatedChosen,);
    this.setState({choices: updatedChoices});

    var arrayChosen =(Array.from(updatedChoices.map(t => t.chosen)));//we pick the number of people that have answered each choice
    var total = arrayChosen.reduce(function(a,b){return a+b},0);//we calculate the total people that have answered
    
    updatedChoices = choiceHelper.calcPer(updatedChoices,total);//we calculate the %
    this.setState({choices: updatedChoices});//we update the value of the percentage field     
  }
}

export default App;
