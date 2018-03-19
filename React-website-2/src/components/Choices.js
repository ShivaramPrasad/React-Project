import React from 'react';
import Choice from './Choice'
import PropTypes from 'prop-types';


const displayChoices = (props) => props.choices.map(t => <Choice key={t.id}{...t} updateChoice={props.updateChoice}/>);
const Choices = (props) => <ul className = "choicesList"> {displayChoices({...props})} </ul>;

Choices.propTypes = {
    choices: PropTypes.array.isRequired
}

export default Choices;