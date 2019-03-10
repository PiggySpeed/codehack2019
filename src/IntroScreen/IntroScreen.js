import './introscreen.css';
import React from 'react';
import { withRouter } from 'react-router-dom';
import history from '../history';
import doctor from './doctor.svg';
import { Button } from 'semantic-ui-react';

const styles = {
  container: {
    display: 'flex',
    flex: 'none',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'min-content',
    weight: '100%',
    paddingLeft: '2rem',
    paddingRight: '2rem',
  },
  title: {
    fontSize: '42pt',
    fontWeight: 700,
    color: '#767676',
    margin: 0,
  },
  text: {
    fontSize: '42pt',
    fontWeight: 700,
    color: '#3cbba5',
    margin: 0,
  },
  logo: {
    height: 300,
    marginTop: '4rem'
  },
  button: {
    backgroundColor: '#3cbba5',
    color: '#FFFFFF',
    margin: '3rem',
    marginBottom: '0rem',
    fontSize: '26pt',
    height: 'min-content',
    width: 200
  }
};

// contentType: json

const NextBtn = withRouter(({ children }) => (
  <button
    type='button'
    onClick={() => { history.push('/survey/0') }}
  >
    {children}
  </button>
));

export default class IntroScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.container} id="intro-screen" className="transition-item detail-page">
        <img style={styles.logo} src={doctor} alt="logo" />
        <div className="speech-bubble-intro">
          <h1 style={styles.title}>Welcome to your personal</h1>
          <h1 style={styles.text}>Recovery Guide</h1>
          <Button style={styles.button} onClick={() => history.push('/survey/0')}>Start</Button>
        </div>

      </div>
    )
  }

}
