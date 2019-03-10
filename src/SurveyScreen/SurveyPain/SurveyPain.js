import './surveypain.css';
import React from 'react';
import { Header, Modal, Divider } from 'semantic-ui-react'
import {PAIN_OPTIONS, ICONS} from '../constants';
import {SurveyButton} from '../../components';


const styles = {
  btnContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'min-content'
  },
  scrollContainer: {
    display: 'flex',
    flex: '1',
    flexFlow: 'column',
    height: '100%',
    width: '100%',
  }
};

const btnStyles = {
  container: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    margin: '2rem',
    height: 'min-content',
  },
  iconContainer: (isActive) => ({
    // width: 150,
    // height: 150,
    padding: 20,
    borderRadius: '50%',
    borderWidth: '10px',
    borderStyle: 'solid',
    borderColor: isActive ? '#6cabff' : '#FFFFFF'
  }),
  text: {
    color: '#FFFFFF',
    fontSize: '22pt',
    fontWeight: '400'
  }
};

const SurveyPainButton = ({ type, onClick, value, text, isActive }) => (
  <div onClick={() => onClick(value, text)} style={btnStyles.container} className="surveypain-button">
    <div style={btnStyles.iconContainer(isActive)}>{ICONS[type]}</div>
    <p>{text}</p>
  </div>
);

export default class SurveyPain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: -1
    };
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  handleBtnClick(value, text) {
    // TODO: replace with redux
    console.log('button click: ', value, text);
    this.setState({ selectedValue: value });
  }

  render() {
    const {text, icon, style} = this.props;

    return (
      <Modal trigger={<SurveyButton {...this.props} text={text} icon={icon} style={style} />}>
        <Modal.Header>In this section, we would like you to rate your pain</Modal.Header>
        <Modal.Content image>

          <Modal.Description style={{width: '100%', flex: 'none'}}>
            <div style={styles.scrollContainer}>
              <Header>Please rate your pain level.</Header>
              <div style={styles.btnContainer}>
                {PAIN_OPTIONS.map((item, id) =>
                  <SurveyPainButton
                    key={id}
                    text={item.text}
                    value={item.value}
                    isActive={item.value === this.state.selectedValue}
                    onClick={this.handleBtnClick}
                    type={item.icon}
                  />)}
              </div>

              <Divider />



            </div>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}
