import React from 'react';
import {ICONS} from '../../SurveyScreen/constants';


const surveyBtnStyles = {
  container: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 'none',
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: '24pt',
    fontWeight: '500'
  }
};

const SurveyButton = ({ text, icon, style, ...rest }) => (
  <div {...rest} style={{...surveyBtnStyles.container, ...style}} className="survey-button">
    {ICONS[icon]}
    <p style={surveyBtnStyles.buttonText}>{text}</p>
  </div>
);

export default SurveyButton;
