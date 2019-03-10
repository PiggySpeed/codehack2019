import React from 'react';
import Pikachu from './logos/pikachu.svg';

import Rattata from './logos/face_5.svg';
import Snorlax from './logos/face_4.svg';
import Meowth from './logos/face_3.svg';
import Charmander from './logos/face_2.svg';
import Eevee from './logos/face_1.svg';

const styles = {
  surveyLogos: {
    height: 100
  }
};

export const ICONS = {
  MOCK: <img style={styles.surveyLogos} src={Pikachu} alt="pikachu" />,
  LIKERT_0: <img style={styles.surveyLogos} src={Rattata} alt="face_5" />,
  LIKERT_1: <img style={styles.surveyLogos} src={Snorlax} alt="face_4" />,
  LIKERT_2: <img style={styles.surveyLogos} src={Meowth} alt="face_3" />,
  LIKERT_3: <img style={styles.surveyLogos} src={Charmander} alt="face_2" />,
  LIKERT_4: <img style={styles.surveyLogos} src={Eevee} alt="face_1" />,
};


export const PAIN_OPTIONS = [
  { text: 'option1', value: 0, icon: 'LIKERT_0' },
  { text: 'option2', value: 1, icon: 'LIKERT_1' },
  { text: 'option3', value: 2, icon: 'LIKERT_2' },
  { text: 'option4', value: 3, icon: 'LIKERT_3' },
  { text: 'option5', value: 4, icon: 'LIKERT_4' },
];

export const QUESTION_IDS = {
  PAIN: 0
};


export const SURVEY_BUTTONS = [
  { id: 0, text: 'Weight', icon: 'MOCK', style: { backgroundColor: '#3cbba5' }  },
  { id: 1, text: 'Pain', icon: 'MOCK', style: { backgroundColor: '#6ac5b4' }  },
  { id: 2, text: 'Breathing', icon: 'MOCK', style: { backgroundColor: '#6ac5b4' }  },
  { id: 3, text: 'Mood', icon: 'MOCK', style: { backgroundColor: '#3cbba5' }  },
  { id: 4, text: 'Blood Sugar', icon: 'MOCK', style: { backgroundColor: '#3cbba5' }  },
  { id: 5, text: 'Meds', icon: 'MOCK', style: { backgroundColor: '#6ac5b4' }  },
  { id: 6, text: 'Appetite', icon: 'MOCK', style: { backgroundColor: '#6ac5b4' }  },
  { id: 7, text: 'Mobility', icon: 'MOCK', style: { backgroundColor: '#3cbba5' }  }
];
