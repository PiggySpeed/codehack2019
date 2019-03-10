import './surveyscreen.css';
import React from 'react';
import { withRouter } from 'react-router-dom';
import history from '../history';
import {Button} from 'semantic-ui-react';
import SurveyButtons from '../components/SurveyButtons/SurveyButtons';
import SurveyPain from './SurveyPain/SurveyPain';
import {PAIN_OPTIONS, SURVEY_BUTTONS} from './constants';
import Doctor from './logos/doctor.svg';

const styles = {
  container: {
    display: 'flex',
    flex: 'none',
    paddingTop: '5rem',
    paddingBottom: '10rem',
    justifyContent: 'center',
    flexFlow: 'column',
    alignItems: 'center',
    overflowY: 'scroll'
  },
  surveyGrid: {
    flex: 'none',
    maxWidth: '45rem',
    height: 'min-content',
    width: '100%',
  },
  header: {
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
  }
};


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

    this.state = {
      completed: [0],
      anim: false
    };

    this.showAnim = this.showAnim.bind(this);
    this.getSurvey = this.getSurvey.bind(this);
    this.handleFinishSurvey = this.handleFinishSurvey.bind(this);

  }

  getSurvey(type) {
    return {
      PAIN: <SurveyButtons options={PAIN_OPTIONS} />
    }[type]
  }

  showAnim() {
    this.setState({ anim: true });
  }

  handleFinishSurvey(id) {
    const finishedSurveys = this.state.completed.slice();
    finishedSurveys.push(id);
    this.setState({ completed: finishedSurveys});

  }

  render() {
    return (
      <div style={styles.container} id="survey-screen" className="transition-item detail-page">
        <div style={{ height: 'min-content', width: '100%', display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
          <div style={styles.header}>
            <img style={styles.doctorLogo} src={Doctor} alt="doctor" />
            <div className="speech-bubble">
              <div style={{height: 'min-content', display: 'flex', flexFlow: 'column', alignItems:'flex-start' }}>
                <h1 style={{fontFamily: 'Montserrat, Arial', color: '#767676', fontSize: 42, fontWeight: 700, margin: 0}}>CHECK IN</h1>
                <p style={{fontFamily: 'Montserrat, Arial', color: '#767676', fontSize: 22, fontWeight: 400, margin: 0}}>Fill out the survey below</p>
                <p style={{fontFamily: 'Montserrat, Arial', color: '#767676', fontSize: 22, fontWeight: 400, margin: 0}}>to track your recovery progress</p>
              </div>
            </div>
          </div>

        {/* Survey Buttons */}
        <div className="grid" style={styles.surveyGrid}>
          {SURVEY_BUTTONS.map((item, id) => <SurveyPain
            key={id}
            id={item.id}
            text={item.text}
            icon={item.icon}
            showAnim={this.showAnim}
            style={item.style}
            isFinished={this.state.completed.indexOf(item.id) >= 0}
            onFinish={this.handleFinishSurvey}
          />)}
        </div>

          {/* Animation */}
          {/*<div style={{ position: 'absolute',  }}>*/}
          {/*</div>*/}


          <Button style={{marginTop: '2rem', width: '400px', height: '150px', backgroundColor: '#3cbba5', color: '#FFFFFF'}} onClick={() => history.push('/review')}>NEXT</Button>

        </div>
      </div>
    )
  }

}
