import './thankyouscreen.css';
import React from 'react';
import { withRouter } from 'react-router-dom';
import history from '../history';

const NextBtn = withRouter(({children }) => (
  <button
    type='button'
    onClick={() => { history.push('/') }}
  >
    {children}
  </button>
));

export default class ThankYouScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="thankyou-screen" className="transition-item detail-page">
        <h1 onClick={() => history.pop()}>Hello thank you screen</h1>
        <NextBtn>Finish</NextBtn>
      </div>
    )
  }

}
