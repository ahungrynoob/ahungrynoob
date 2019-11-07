import React, { useReducer } from 'react';
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
import { useRootReducer } from '../utils/index';
import { listReducer } from './redux/reducer';
import { StateContext, DispatchContext } from './context';
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

  const [ state, dispatch ] = useRootReducer({
    list: useReducer(listReducer, list || []),
  });
  return (
    <Router location={staticLocation} context={context}>
      <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
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
        </StateContext.Provider>
      </DispatchContext.Provider>
    </Router>
  );
};

export default App;
