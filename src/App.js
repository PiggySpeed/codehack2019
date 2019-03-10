import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import PageTransition from 'react-router-page-transition';

import history from './history';
import IntroScreen from './IntroScreen/IntroScreen';
import SurveyScreen from './SurveyScreen/SurveyScreen';
import ReviewScreen from './ReviewScreen/ReviewScreen';
import ThankYouScreen from './ThankYouScreen/ThankYouScreen';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
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
                    path="/thankyou"
                    component={ThankYouScreen}
                  />
                </Switch>
              </PageTransition>
            )}
          />
        </Router>
      </div>
    );
  }
}

export default App;
