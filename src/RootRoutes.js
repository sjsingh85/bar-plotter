import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Layout from './Layout';
import BarContainer from './Bar/BarContainer';
import RouteErrorBoundary from './RouteErrorBoundary';

const Loading = () => <div>Loading...</div>;

//const LazyCounter = React.lazy(() => import('components/Counter'));

export const appRoutesList = [
  { path: '/', component: BarContainer, exact: true }
  //{ path: '/counter', component: LazyCounter }
];

const SuspenseRoute = ({ component: Component, match, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        <Suspense fallback={<Loading />}>
          <RouteErrorBoundary>
            <Component {...props} />
          </RouteErrorBoundary>
        </Suspense>
      )}
    />
  );
};

export default () => (
  <Router>
    <Layout>
      <Switch>
        {appRoutesList.map(({ path, component, ...others }, index) => (
          <SuspenseRoute
            path={path}
            component={component}
            key={index}
            {...others}
          />
        ))}
        <Redirect to="/" />
      </Switch>
    </Layout>
  </Router>
);
