import './introscreen.css';
import React from 'react';
import { withRouter } from 'react-router-dom';
import history from '../history';

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
      <div id="intro-screen" className="transition-item detail-page">
        <h1 onClick={() => history.pop()}>Hello intro screen</h1>
        <NextBtn>Next</NextBtn>
      </div>
    )
  }

}
