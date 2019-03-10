import './calendarwound.css';
import React from 'react';
import { connect } from 'react-redux';
import { Header, Modal, Divider, Button, TextArea, Radio } from 'semantic-ui-react';
import {SurveyButton} from '../../components';
import {onPainSurveyResponse} from '../../actions/actions';
import {CalendarButton} from '../CalendarButton';

const WOUND = "WOUND";

const styles = {
  scrollContainer: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    paddingLeft: '4rem',
    paddingRight: '4rem'
  },
  button: {
    fontFamily: 'Montserrat, Arial',
    width: '500px',
    heightL: '100%',
    fontSize: '32pt',
    color: '#FFFFFF',
    backgroundColor: '#3cbba5',
  },
  btnContainer: {
    display: 'flex',
    flexFlow: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'min-content'
  }
};

const btnStyles = {
};

const CalendarOptions = ({text}) => (
  <div style={{padding: '0.25rem'}}>
    <Button style={styles.button}>{text}</Button>
  </div>
);


class SurveyPain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: -1,
      text: ''
    };
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleBtnClick(value, text) {
    // TODO: replace with redux
    console.log('button click: ', value, text);
    this.setState({ value, text });
  }

  handleSubmitClick() {
    // this.props.onPainSurveyResponse({
    //   value: this.state.value,
    //   text: this.state.text,
    //   questionID: QUESTION_IDS[PAIN],
    //   category: PAIN
    // });
    this.setState({ isModalOpen: false })
  }

  handleCancel() {
    this.setState({ isModalOpen: false })
  }

  render() {
    const {
      id,
      label,
      title,
      text,
      style,
      isFinished
    } = this.props;

    return (
      <Modal open={this.state.isModalOpen} trigger={<CalendarButton {...this.props} id={id} text={text} style={style} isFinished={isFinished} />}>
        <Modal.Content style={{display: 'flex', flexFlow: 'column', alignItems: 'center'}}>
          <Modal.Header style={{ fontFamily: 'Montserrat', display: 'flex', justifyContent: 'center', fontSize: 56, color: '#3cbba5', fontWeight: 700 }}>{title}</Modal.Header>
          <Modal.Description style={{width: '100%', flex: 'none'}}>
            <div style={styles.scrollContainer}>
              <Header style={{display: 'flex', justifyContent: 'center', color: '#767676', fontSize: 36}}>{text}</Header>
              <div style={styles.btnContainer}>
                {this.props.options.map((item, id) =>
                  <CalendarOptions
                    key={id}
                    id={item.id}
                    text={item.text}
                    value={item.value}
                    // onClick={this.handleBtnClick}
                  />)}
              </div>

              <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
                <Button style={styles.cancelButton} onClick={this.handleCancel}>Back</Button>
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
