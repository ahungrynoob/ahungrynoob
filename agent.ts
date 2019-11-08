import { Agent, IBoot } from 'egg';
import IssueClient from './app/lib/issueClient';

type BlogAgent = Agent & {
  issueClient: IssueClient;
  cluster: (client: any) => any;
};

export default class AgentBoot implements IBoot {
  private readonly agent: BlogAgent;

  constructor(agent: BlogAgent) {
    const config = agent.config.github;
    agent.issueClient = new IssueClient({
      cluster: agent.cluster,
      ...config,
    });
    this.agent = agent;
  }

  async willReady() {
    // All plugins have started, can do some thing before app ready.
    await this.agent.issueClient.ready();
    this.agent.coreLogger.info('issue client is ready');
  }
}
