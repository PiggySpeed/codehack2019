import './thankyouscreen.css';
import React from 'react';
import { withRouter } from 'react-router-dom';
import history from '../history';

const styles = {
  container: {
    display: 'flex',
    flex: 'none',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: '10rem',
    height: '100%'
  },
  title: {
    fontFamily: 'Montserrat, Arial',
    color: '#3cbba5',
    fontSize: '56pt',
    fontWeight: 700,
    margin: 0,
  },
  text: {
    fontFamily: 'Montserrat, Arial',
    color: '#767676',
    fontSize: '36pt',
    fontWeight: 700,
    margin: 0,
    width: 400
  }
};

export default class ThankYouScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="thankyou-screen" style={styles.container} className="transition-item detail-page">
        <h1 style={styles.title}>THANK YOU!</h1>
        <p style={styles.text}>You may now close this window.</p>
      </div>
    )
  }

}
