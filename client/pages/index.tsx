import React from 'react';
import ReactDOM from 'react-dom';
import { ViewProps } from 'beidou';
import App from '../home/app';

export default class View extends React.Component<ViewProps> {
  static getPartial() {
    return {
      html: <App />,
    };
  }

  render() {
    const { html, helper } = this.props;
    return (
      <html>
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Ahungrynoob</title>
          <link rel="stylesheet" href={helper.asset('manifest.css')} />
          <link rel="stylesheet" href={helper.asset('index.css')} />
        </head>
        <body>
          <div
            id="container"
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          />
          <script src={helper.asset('manifest.js')} />
          <script src={helper.asset('index.js')} />
        </body>
      </html>
    );
  }
}

if (__CLIENT__) {
  ReactDOM.hydrate(<App />, document.getElementById('container'));
}
