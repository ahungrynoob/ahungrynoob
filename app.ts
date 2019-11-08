import { Application, IBoot } from 'egg';
import IssueClient from './app/lib/issueClient';

declare module 'egg' {
  // tslint:disable-next-line: interface-name
  interface Application {
    issueClient: IssueClient;
    cluster: (client: any) => any;
  }
}

export default class ApplicationBoot implements IBoot {
  private readonly app: Application;

  constructor(app: Application) {
    const config = app.config.github;
    app.issueClient = new IssueClient({
      ...config,
      cluster: app.cluster,
    });
    this.app = app;
  }

  async willReady() {
    // All plugins have started, can do some thing before app ready.
    await this.app.issueClient.ready();
    this.app.coreLogger.info('issue client is ready');
  }
}
