import React from 'react';
import checkmark from './checkmark.svg';

const styles = {
  container: (isDark) => ({
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 'none',
    width: '100%',
    backgroundColor: isDark ? '#3cbba5' : '#6ac5b4'
    // height: 150
  }),
  buttonText: {
    color: '#FFFFFF',
    fontSize: '36pt',
    fontWeight: '800'
  },
  surveyLogos: {
    height: 100
  },
  startBtnText: {
    color: '#767676',
    fontSize: '36pt',
    fontWeight: '800'
  },
  startBtnContainer: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 'none',
    width: '100%',
    backgroundColor: '#FFFFFF',
    // height: 150

  }
};

const DARK_CELLS = [1, 4, 6, 7, 9, 12];

export const CalendarButton = ({ id, painSurvey, onPainSurveyResponse, label, title, text, icon, style, isFinished, ...rest }) => (
  <div {...rest} style={{...styles.container(DARK_CELLS.includes(id)), ...style}} className="survey-button">
    {isFinished && <img style={styles.surveyLogos} src={checkmark} alt="check" />}
    {!isFinished && <p style={styles.buttonText}>{label.toUpperCase()}</p>}
  </div>
);

export const CalendarStartButton = ({ }) => (
  <div style={{...styles.startBtnContainer}} className="survey-button-start">
    <p style={styles.startBtnText}>DAY</p>
  </div>
);
