import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import choiceHelper from '../helpers/choiceHelper'

//Check renders
it('Renders OK', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

//Check if my defaultChoices are OK
it('Default choices OK', () =>
{
  const initialChoices = 
  [
    {id: 1, name: 'First Option', chosen: 1},
    {id: 2, name: 'Second Option', chosen: 0}
  ]

  const expectedChoices = [...initialChoices];
  choiceHelper.updateChoice(initialChoices, 1);
  expect(initialChoices).toEqual(expectedChoices);
}
);

//Check if our options are updated
it('Updated choices OK', () =>
  {
    const initialChoices = 
    [
      {id: 1, name: 'First Option', chosen: 1},
      {id: 2, name: 'Second Option', chosen: 0}
    ]

    const newChoices = choiceHelper.updateChoice(initialChoices,1);

    const expectedChoices = 
    [
      {id: 1, name: 'First Option', chosen: 2},
      {id: 2, name: 'Second Option', chosen: 0} 
    ]
    
    expect(newChoices).toEqual(expectedChoices);
  }
);
