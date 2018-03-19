import React from 'react';
import PropTypes from 'prop-types';

const Choice = (props) =>
(
    <li>  
        {props.name} <input type="number" min='0' onChange={(e)=>props.updateChoice(props.id, Number(e.target.value))}/>
        People that have answered this choice: {props.chosen}
        Percentage: {props.perc}%
    </li>

);

Choice.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    chosen: PropTypes.number.isRequired,
    perc: PropTypes.number.isRequired
}

export default Choice;