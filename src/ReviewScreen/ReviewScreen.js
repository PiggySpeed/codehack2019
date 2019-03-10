import './reviewscreen.css';
import React from 'react';
import { withRouter } from 'react-router-dom';
import history from '../history';
import Doctor from './doctor.svg';
import Phone from './phone.svg';
import {Button} from 'semantic-ui-react';

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  header: {
    marginTop: '4rem',
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '45rem',
    height: 'min-content',
    width: '100%',
    padding: '2rem',
    paddingLeft: '1rem',
    paddingRight: '1rem'
  },
  title: {
    fontSize: '45pt',
    color: '#000000',
    marginBottom: '2rem'
  },
  doctorLogo: {
    width: 150
  },

  body: {
    marginTop: '4rem',
    marginBottom: '10rem',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneLogo: {
    width: 250
  },
  bodyText: {
    fontFamily: 'Montserrat, Arial',
    color: '#767676',
    fontSize: 28,
    fontWeight: 700,
    margin: 0,
    width: 400
  },
  button: {
    backgroundColor: '#3cbba5',
    color: '#FFFFFF',
    margin: '2rem',
    marginBottom: '0rem',
    fontSize: '22pt',
    height: 'min-content',
    width: 250
  }
};

const BODY_TEXT_1 = 'Expect a call from your ';
const BODY_TEXT_2 = 'community nurse ';
const BODY_TEXT_3 = 'within the next 24 hours.';

export default class ReviewScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.container} id="review-screen" className="transition-item detail-page">
        <div style={styles.header}>
          <img style={styles.doctorLogo} src={Doctor} alt="doctor" />
          <div className="speech-bubble">
            <div style={{height: 'min-content', display: 'flex', flexFlow: 'column', alignItems:'flex-start', marginLeft: '1rem' }}>
              <h1 style={{fontFamily: 'Montserrat, Arial', color: '#767676', fontSize: 42, fontWeight: 700, margin: 0}}>SUGGESTIONS</h1>
              <p style={{fontFamily: 'Montserrat, Arial', color: '#767676', fontSize: 22, fontWeight: 400, margin: 0, textAlign: 'start'}}>Here are my suggestions based on your survey responses below</p>
            </div>
          </div>
        </div>

        <div style={styles.body}>
          <img style={styles.phoneLogo} src={Phone} alt="phone" />
            <p style={styles.bodyText}>{BODY_TEXT_1}<br/><em style={{color: '#3cbba5', fontStyle: 'normal'}}>{BODY_TEXT_2}</em>{BODY_TEXT_3}</p>
          <Button style={styles.button} onClick={() => history.push('/thankyou')}>Got it!</Button>
        </div>

      </div>
    )
  }

}
