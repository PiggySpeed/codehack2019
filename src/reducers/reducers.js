import {
  ON_PAIN_RESPONSE,
  ON_SUBMIT_RESULTS,
} from '../actions/actions';

const initialState = {
  painSurvey: {
    questionID: '0',
    type: 'PAIN',
    value: -1,
    text: '',
  },
  feedbackResults: {

  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ON_PAIN_RESPONSE:
      return {
        painSurvey: action.payload
      };
    case ON_SUBMIT_RESULTS:
      return {
        ...state,
        feedbackResults: action.payload
      };
    default:
      return state;
  }
}
