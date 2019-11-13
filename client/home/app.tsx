import React from 'react';
import { BrowserRouter, StaticRouter, Switch, Route, RouteComponentProps } from 'react-router-dom';
import NotFound from './notfound';
import Content from './content';
import Home, { IHomeProps } from './home';
import { RootReducerProvider } from './context';
import { ArticleList, IItem } from '../config/types';
import 'normalize.css';
import 'github-markdown-css';
import 'highlight.js/styles/monokai.css';
import '../styles/global.less';

const Router: any = __CLIENT__ ? BrowserRouter : StaticRouter;

interface IAppProps {
  location?: string;
  context?: {
    statusCode?: number;
    url?: string;
  };
  list?: ArticleList;
  article?: IItem;
}

const App: React.FunctionComponent<IAppProps & IHomeProps> = props => {
  const { location: staticLocation, context, bgIndex, list, article } = props;
  return (
    <Router location={staticLocation} context={context}>
      <RootReducerProvider list={list} article={article}>
        <Switch>
          <Route path="/" exact>
            <Home bgIndex={bgIndex} />
          </Route>
          <Route
            path={['/work', '/thought', '/life']}
            extact
            component={(routeProps: RouteComponentProps) => <Content {...routeProps} />}
          />
          <Route component={NotFound} />
        </Switch>
      </RootReducerProvider>
    </Router>
  );
};

export default App;
