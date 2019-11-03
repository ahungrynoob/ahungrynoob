import React from 'react';
import { BrowserRouter, StaticRouter, Switch, Route } from 'react-router-dom';
import NotFound from './notfound';
import Content from './content';
import Home from './home';
import 'normalize.css';
import '../styles/global.less';

const Router: any = __CLIENT__ ? BrowserRouter : StaticRouter;

interface IAppProps {
  location?: string;
  bgIndex: number;
  context?: {
    statusCode?: number;
    url?: string;
  };
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  const { location, context, bgIndex } = props;
  return (
    <Router location={location} context={context}>
      <Switch>
        <Route path="/" exact>
          <Home bgIndex={bgIndex} />
        </Route>
        <Route
          path={[ '/work', '/thought', '/life' ]}
          extact
          component={Content}
        />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
