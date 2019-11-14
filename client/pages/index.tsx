import React from 'react';
import ReactDOM from 'react-dom';
import { ViewProps } from 'beidou';
import App from '../home/app';

export default class View extends React.Component<ViewProps> {
  static getPartial({ initialState }) {
    return {
      html: <App {...initialState} />,
    };
  }

  render() {
    const { helper, initialState, html } = this.props;
    initialState.article = {};
    return (
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>Ahungrynoob</title>
          <link rel="stylesheet" href={helper.asset('manifest.css')} />
          <link rel="stylesheet" href={helper.asset('index.css')} />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}`,
            }}
          />
        </head>
        <body>
          <div style={{ display: 'none' }}>
            <img src="https://avatars1.githubusercontent.com/u/26563778" alt="logo" />
          </div>
          <div id="container" dangerouslySetInnerHTML={{ __html: html }} />
          <script src={helper.asset('manifest.js')} />
          <script src={helper.asset('index.js')} />
        </body>
      </html>
    );
  }
}

if (__CLIENT__) {
  const initialState = window.__INITIAL_STATE__;
  ReactDOM.hydrate(<App {...initialState} />, document.getElementById('container'));
}
