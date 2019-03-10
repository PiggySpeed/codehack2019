import './surveybuttons.css';
import React from 'react';

const styles = {
  container: (backgroundColor) => ({
    display: 'flex',
    flexFlow: 'column',
    flex: '1',
    height: '100%',
    weight: '100%',
    backgroundColor: backgroundColor || "#FFFFFF",
  }),
  buttonContainer: {
    display: 'flex',
    flexFlow: 'row',
    weight: '100%',
    height: 'min-content'
  }
};

const buttonStyles = {
  container: {

  }
};

const ICONS = {

};

const SurveyIconButton = ({ onClick, text, value, icon }) => (
  <div onClick={() => onClick(value)} style={buttonStyles.container}>
    <p>{icon}</p>
    <p>{text}</p>
  </div>

);


export default class SurveyButtons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.container(this.props.backgroundColor)}>
        <div style={styles.buttonContainer}>
          {this.props.options.map(item => <SurveyIconButton
            onClick={() => console.log('test')}
            text={item.text}
            value={item.value}
            icon={item.icon}
          />)}
        </div>
      </div>
    )
  }
}
