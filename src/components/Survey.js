import React from 'react';
import {SurveyData} from './SurveyData';
import PropTypes from 'prop-types';
import './Survey.css';

const renderSurvey=(props)=>{
    return props.survey.map(t=> 
       <SurveyData key={t.id} {...t}/>
    );
}
const Survey= (props)=> 
        <div className="Survey-display">
            {renderSurvey(props)}
        </div>
        
Survey.propTypes={
    survey: PropTypes.array.isRequired,
}
export {Survey};