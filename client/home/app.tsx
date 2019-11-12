import React from 'react';
import {
  BrowserRouter,
  StaticRouter,
  Switch,
  Route,
  RouteComponentProps,
} from 'react-router-dom';
import NotFound from './notfound';
import Content from './content';
import Home, { IHomeProps } from './home';
import { RootReducerProvider } from './context';
import { ArticleList } from '../config/types';
import 'normalize.css';
import '../styles/global.less';

const Router: any = __CLIENT__ ? BrowserRouter : StaticRouter;

interface IAppProps {
  location?: string;
  context?: {
    statusCode?: number;
    url?: string;
  };
  list?: ArticleList;
}

const App: React.FunctionComponent<IAppProps & IHomeProps> = (props) => {
  const { location: staticLocation, context, bgIndex, list } = props;
  return (
    <Router location={staticLocation} context={context}>
      <RootReducerProvider list={list}>
        <Switch>
          <Route path="/" exact>
            <Home bgIndex={bgIndex} />
          </Route>
          <Route
            path={[ '/work', '/thought', '/life' ]}
            extact
            component={(routeProps: RouteComponentProps) => (
              <Content {...routeProps} />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </RootReducerProvider>
    </Router>
  );
};

export default App;
