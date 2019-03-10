import './calendarscreen.css';
import React from 'react';
import { withRouter } from 'react-router-dom';
import history from '../history';
import {DAYS} from './constants';
import CalendarWound from './CalendarWound/CalendarWound';
import {CalendarStartButton} from './CalendarButton';

const styles = {
  container: {
    marginTop: '4rem',
    marginLeft: '8rem',
    marginRight: '8rem',
    border: '1px solid #BCBCBC',
    boxShadow: '0px 0px 10px #BCBCBC'
  }
};

const btnStyles = {
  container: {
    border: '1px solid red'
  }
};


export default class CalendarScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.container} id="review-screen" className="transition-item detail-page">
        <div className="calendar-grid">
          <CalendarStartButton />
          {DAYS.map((item, id) => (
            <CalendarWound
              key={id}
              id={item.id}
              label={item.label}
              title={item.title}
              text={item.text}
              module={item.module}
              options={item.options}
              isFinished={false}
            />
          ))}
        </div>

      </div>
    )
  }

}
