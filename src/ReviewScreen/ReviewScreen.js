import './reviewscreen.css';
import React from 'react';
import { withRouter } from 'react-router-dom';
import history from '../history';

const NextBtn = withRouter(({ children }) => (
  <button
    type='button'
    onClick={() => { history.push('/thankyou') }}
  >
    {children}
  </button>
));

export default class ReviewScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="review-screen" className="transition-item detail-page">
        <h1 onClick={() => history.pop()}>Hello review screen</h1>
        <NextBtn>Next</NextBtn>
      </div>
    )
  }

}
