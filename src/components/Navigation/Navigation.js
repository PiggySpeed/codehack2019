import './index.css';
import React from 'react';
import {Link} from 'react-router-dom';
import {Input} from 'semantic-ui-react';

import logo from './logo.svg';

const styles = {
  container: {
    paddingLeft: '2rem',
    paddingRight: '2rem',
    display: 'flex',
    flex: 'none',
    borderBottom: '1px solid #BCBCBC',
    width: '100%',
    height: 'min-content',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  navItem: {
    marginLeft: '1.5rem',
    marginRight: '1.5rem',
    fontWeight: 700,
    fontSize: '16pt',
    height: 'min-content'
  },
  logo: {
    height: 75
  }
};

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.container}>
        <img style={styles.logo} src={logo} alt="logo" />
        <div style={{display: 'flex'}}>
          <Link style={styles.navItem} className="nav-item" to="/">Home</Link>
          <Link style={styles.navItem} className="nav-item" to="/survey">MyRecoveryPlan</Link>
          <Link style={styles.navItem} className="nav-item" to="/calendar">Resources</Link>
        </div>
        <Input style={{display: 'flex', flex:'none', height: 'min-content'}} icon='search' placeholder='Search...' />
      </div>
    )
  }
}
