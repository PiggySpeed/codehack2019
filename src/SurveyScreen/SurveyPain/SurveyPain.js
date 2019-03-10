import './surveypain.css';
import React from 'react';
import { connect } from 'react-redux';
import { Header, Modal, Divider, Button, TextArea } from 'semantic-ui-react'
import {PAIN_OPTIONS, ICONS, QUESTION_IDS} from '../constants';
import {SurveyButton} from '../../components';
import {onPainSurveyResponse} from '../../actions/actions';

const PAIN = "PAIN";

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
  },
  textArea: {
    padding: '0.5rem',
    marginTop: '1rem',
    marginLeft: '1rem',
    marginRight: '1rem',
    marginBottom: '2rem',
    minHeight: 150
  },
  submitButton: {
    // height: 75,
    fontSize: '22pt',
    color: '#FFFFFF',
    backgroundColor: '#00df62'
  },
  cancelButton: {
    fontSize: '22pt',
    // color: '#FFFFFF',
    // backgroundColor: '#00df62'
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

class SurveyPain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: -1,
      text: '',
    };
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleBtnClick(value, text) {
    // TODO: replace with redux
    console.log('button click: ', value, text);
    this.setState({ value, text });
  }

  handleSubmitClick() {
    this.props.onPainSurveyResponse({
      value: this.state.value,
      text: this.state.text,
      questionID: QUESTION_IDS[PAIN],
      category: PAIN
    });
  }

  handleBlur(e) {
    this.setState({ text: e.target.value });
  }

  handleCancel() {
    this.setState({ isModalOpen: false })
  }

  render() {
    const {text, icon, style} = this.props;

    return (
      <Modal open={this.state.isModalOpen} trigger={<SurveyButton {...this.props} text={text} icon={icon} style={style} />}>
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
                    isActive={item.value === this.state.value}
                    onClick={this.handleBtnClick}
                    type={item.icon}
                  />)}
              </div>

              <Divider />

              <TextArea
                autoHeight
                placeholder='Comments'
                onBlur={this.handleBlur}
                style={styles.textArea}
              />

              <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
                <Button style={styles.cancelButton} onClick={this.handleCancel}>Cancel</Button>
                <Button style={styles.submitButton} onClick={this.handleSubmitClick}>Submit</Button>
              </div>
            </div>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

const mapStateToProps = ({ mainReducer }) => ({
  painSurvey: mainReducer.painSurvey
});

const mapDispatchToProps = (dispatch) => ({
  onPainSurveyResponse: (response) => dispatch(onPainSurveyResponse(response))
});

export default connect(mapStateToProps, mapDispatchToProps)(SurveyPain);
