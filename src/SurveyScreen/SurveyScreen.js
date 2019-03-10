import './surveyscreen.css';
import React from 'react';
import { withRouter } from 'react-router-dom';
import history from '../history';

const NextBtn = withRouter(({ children }) => (
  <button
    type='button'
    onClick={() => { history.push('/review') }}
  >
    {children}
  </button>
));


export default class SurveyScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="survey-screen" className="transition-item detail-page">
        <h1 onClick={() => history.pop()}>Hello survey screen</h1>
        <NextBtn>Next</NextBtn>
      </div>
    )
  }

}
