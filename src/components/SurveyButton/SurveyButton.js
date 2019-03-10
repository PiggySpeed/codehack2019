import React from 'react';
import checkmark from '../../SurveyScreen/logos/checkmark.svg';


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
    fontSize: '36pt',
    fontWeight: '800'
  },
  surveyLogos: {
    height: 100
  }
};

const SurveyButton = ({ painSurvey, onPainSurveyResponse, text, icon, style, isFinished, onFinish, ...rest }) => (
  <div {...rest} style={{...surveyBtnStyles.container, ...style}} className="survey-button">
    {isFinished && <img style={surveyBtnStyles.surveyLogos} src={checkmark} alt="check" />}
    {!isFinished && <p style={surveyBtnStyles.buttonText}>{text.toUpperCase()}</p>}
  </div>
);

export default SurveyButton;
