import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('adds a color to my list', () => {

    const initialColor = [
      {id: 1, color: 'Red'},
      {id: 2, color: 'Blue'}
    ] 

    const newChoice = choiceHelper.addChoice(initialColor, 'Last Choice');

    const expectedChoice = [
      ...initialColor,
      newChoice[2] //our last choice...
    ]

    expect(newChoice).toEqual(expectedChoice);
});
