import './surveyscreen.css';
import React from 'react';
import { withRouter } from 'react-router-dom';
import history from '../history';

import SurveyButtons from '../components/SurveyButtons/SurveyButtons';
import SurveyPain from './SurveyPain/SurveyPain';
import {PAIN_OPTIONS, ICONS} from './constants';


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
    width: '100%'
  },
  title: {
    fontSize: '45pt',
    color: '#000000',
    marginBottom: '2rem'
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


const SURVEY_BUTTONS = [
  { text: 'Pain', icon: 'MOCK', style: { backgroundColor: '#6cff8a' }  },
  { text: 'Pain', icon: 'MOCK', style: { backgroundColor: '#83d9ff' }  },
  { text: 'Pain', icon: 'MOCK', style: { backgroundColor: '#ff8a62' }  },
  { text: 'Pain', icon: 'MOCK', style: { backgroundColor: '#ff8afd' }  },
  { text: 'Pain', icon: 'MOCK', style: { backgroundColor: '#6cff8a' }  },
  { text: 'Pain', icon: 'MOCK', style: { backgroundColor: '#83d9ff' }  },
  { text: 'Pain', icon: 'MOCK', style: { backgroundColor: '#ff8a62' }  },
  { text: 'Pain', icon: 'MOCK', style: { backgroundColor: '#ff8afd' }  },
  { text: 'Pain', icon: 'MOCK', style: { backgroundColor: '#6cff8a' }  }
];


export default class SurveyScreen extends React.Component {
  constructor(props) {
    super(props);
    this.getSurvey = this.getSurvey.bind(this);
  }

  getSurvey(type) {
    return {
      PAIN: <SurveyButtons options={PAIN_OPTIONS} />
    }[type]
  }

  render() {
    return (
      <div style={styles.container} id="survey-screen" className="transition-item detail-page">
        <div style={{ height: 'min-content', width: '100%', display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
        <h1 style={styles.title}>Progress</h1>

        {/* Survey Buttons */}
        <div className="grid" style={styles.surveyGrid}>
          {SURVEY_BUTTONS.map((item, id) => <SurveyPain key={id} text={item.text} icon={item.icon} style={item.style}/>)}
        </div>

        </div>
      </div>
    )
  }

}
