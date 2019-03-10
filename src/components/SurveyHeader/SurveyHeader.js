import React from 'react';

const styles = {
  container: (backgroundColor) => ({
    minHeight: '150px',
    display: 'flex',
    width: '100%',
    backgroundColor: backgroundColor
  }),
  textContainer: {
    display: 'flex',
    flexFlow: 'column',
    padding: '1rem',
    width: '100%',
  },
  icon: {
    minWidth: '200px',
    border: '1px solid red'
  },
  title: {
    display: 'flex',
    width: '100%',
    flex: 1,
    fontWeight: '700',
    color: '#FFFFFF'
  },
  subtitle: {
    display: 'flex',
    width: '100%',
    flex: 1,
    fontWeight: '400',
    color: '#FFFFFF'
   }
};


const ICONS = {
  TEST: <div>TEST icon</div>
};

export default class SurveyHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.container(this.props.backgroundColor || "#1781bd")}>
        <div style={styles.icon}>
          {ICONS[this.props.icon]}
        </div>
        <div style={styles.textContainer}>
          <h1 style={styles.title}>{this.props.title}</h1>
          <h2 style={styles.subtitle}>{this.props.subtitle}</h2>
        </div>
      </div>
    );
  }
}
