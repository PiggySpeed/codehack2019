// pain survey
export const ON_PAIN_RESPONSE = 'ON_PAIN_RESPONSE';

// general
export const ON_SUBMIT_RESULTS = 'ON_SUBMIT_RESULTS';

export const onPainSurveyResponse = (response) => dispatch => {
  console.log('RESPONSE IS ', response);
  dispatch({
    type: ON_PAIN_RESPONSE,
    payload: response
  })
};


export const onSubmitResults = ({}) => dispatch => {
  // TODO: insert API call here

  dispatch({
    type: ON_SUBMIT_RESULTS
  })
};
