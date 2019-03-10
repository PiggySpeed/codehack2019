import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import PageTransition from 'react-router-page-transition';
import { Provider } from 'react-redux'
import configureStore from './reducers/store';

import history from './history';
import IntroScreen from './IntroScreen/IntroScreen';
import SurveyScreen from './SurveyScreen/SurveyScreen';
import ReviewScreen from './ReviewScreen/ReviewScreen';
import CalendarScreen from './CalendarScreen/CalendarScreen';
import ThankYouScreen from './ThankYouScreen/ThankYouScreen';
import Navigation from './components/Navigation/Navigation';

const styles = {
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexFlow: 'column'
  }
};

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <div className="App">
          <Router history={history}>
            <div style={styles.container}>
              <Navigation />
              <Route
                render={({ location }) => (
                  <PageTransition
                    data={{ clickedItemData: "Hello world" }}
                    timeout={1000}
                  >
                    <Switch location={location}>
                      <Route
                        exact
                        path="/"
                        component={IntroScreen}
                      />
                      <Route
                        path="/survey/:itemId"
                        component={SurveyScreen}
                      />
                      <Route
                        path="/review"
                        component={ReviewScreen}
                      />
                      <Route
                        path="/calendar"
                        component={CalendarScreen}
                      />
                      <Route
                        path="/thankyou"
                        component={ThankYouScreen}
                      />
                    </Switch>
                  </PageTransition>
                )}
              />
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
