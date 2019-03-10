import './introscreen.css';
import React from 'react';
import { withRouter } from 'react-router-dom';
import history from '../history';

const styles = {
  container: {
    display: 'flex',
    flex: '1',
    flexFlow: 'column',
    justifyContent: 'center',
    height: '100%',
    weight: '100%',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    backgroundColor: '#d870ff',
  },
  title: {
    fontSize: '36px',
    color: '#FFFFFF'
  },
  text: {
    fontSize: '28px',
    color: '#FFFFFF'
  },
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
        <div>LOGO</div>
        <h1 style={styles.title}>Intro title</h1>
        <p style={styles.text}>Intro Text</p>
        <NextBtn>Next</NextBtn>

      </div>
    )
  }

}
