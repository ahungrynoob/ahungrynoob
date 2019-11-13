import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

const App: React.FunctionComponent<RouteComponentProps> = ({ match }) => (
  <div>{match.path.slice(1)}</div>
);

export default App;
