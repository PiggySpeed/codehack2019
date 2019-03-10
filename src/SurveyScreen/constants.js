import React from 'react';
import Pikachu from './logos/pikachu.svg';
import Rattata from './logos/rattata.svg';
import Snorlax from './logos/snorlax.svg';
import Meowth from './logos/meowth.svg';
import Charmander from './logos/charmander.svg';
import Eevee from './logos/eevee.svg';

const styles = {
  surveyLogos: {
    height: 100
  }
};

export const ICONS = {
  MOCK: <img style={styles.surveyLogos} src={Pikachu} alt="pikachu" />,
  LIKERT_0: <img style={styles.surveyLogos} src={Rattata} alt="rattata" />,
  LIKERT_1: <img style={styles.surveyLogos} src={Snorlax} alt="snorlax" />,
  LIKERT_2: <img style={styles.surveyLogos} src={Meowth} alt="meowth" />,
  LIKERT_3: <img style={styles.surveyLogos} src={Charmander} alt="charmander" />,
  LIKERT_4: <img style={styles.surveyLogos} src={Eevee} alt="eevee" />,
};


export const PAIN_OPTIONS = [
  { text: 'option1', value: 0, icon: 'LIKERT_0' },
  { text: 'option2', value: 1, icon: 'LIKERT_1' },
  { text: 'option3', value: 2, icon: 'LIKERT_2' },
  { text: 'option4', value: 3, icon: 'LIKERT_3' },
  { text: 'option5', value: 4, icon: 'LIKERT_4' },
];
