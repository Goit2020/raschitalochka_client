import React from 'react';
import Media from 'react-media';
import { Route, Redirect } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { mapStyles, bounceTransition } from 'libs/routesAnimationsSettings';
import Header from '../../components/Header/Header';
import OverviewPage from './OverviewPage/OverviewPageContainer';
import StatsPage from './StatsPage/StatsPage';
import CurrencyPage from './CurrencyPage/CurrencyPage';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Media
        queries={{
          small: '(max-width: 767px)',
          medium: '(min-width: 768px) and (max-width: 1023px)',
          large: '(min-width: 1024px)',
        }}
      >
        {(matches) => (
          <>
            {matches.small && (
              <>
                <AnimatedSwitch
                  atEnter={bounceTransition.atEnter}
                  atLeave={bounceTransition.atLeave}
                  atActive={bounceTransition.atActive}
                  mapStyles={mapStyles}
                  className="switch-wrapper"
                >
                  <Route path="/" exact component={OverviewPage} />
                  <Route path="/stats" component={StatsPage} />
                  <Route path="/currency" component={CurrencyPage} />
                  <Redirect to="/" />
                </AnimatedSwitch>
              </>
            )}
            {matches.medium && (
              <>
                <AnimatedSwitch
                  atEnter={bounceTransition.atEnter}
                  atLeave={bounceTransition.atLeave}
                  atActive={bounceTransition.atActive}
                  mapStyles={mapStyles}
                  className="switch-wrapper"
                >
                  <Route path="/" exact component={OverviewPage} />
                  <Route path="/stats" component={StatsPage} />
                  <Redirect to="/" />
                </AnimatedSwitch>
              </>
            )}
            {matches.large && (
              <>
                <AnimatedSwitch
                  atEnter={bounceTransition.atEnter}
                  atLeave={bounceTransition.atLeave}
                  atActive={bounceTransition.atActive}
                  mapStyles={mapStyles}
                  className="switch-wrapper"
                >
                  <Route path="/" exact component={OverviewPage} />
                  <Route path="/stats" component={StatsPage} />
                  <Redirect to="/" />
                </AnimatedSwitch>
              </>
            )}
          </>
        )}
      </Media>
    </div>
  );
};

export default HomePage;
