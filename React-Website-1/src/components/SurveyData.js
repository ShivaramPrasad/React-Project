import React from 'react';
import PropTypes from 'prop-types';
import './Survey.css';

const SurveyData = (props) =>
        <ul key={props.id}>
            <input className="Survey-input" type="number" min="1" placeholder="1"/>
            {props.color}
        </ul>
   
SurveyData.propTypes={
    id: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
}
export{SurveyData};