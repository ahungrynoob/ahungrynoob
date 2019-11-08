import Base from 'sdk-base';
import IssueRegistryClient, { IIssue, Options } from './issueRegistryClient';

const CACHE = Symbol('IssueClient#cache');
const CLIENT = Symbol('IssueClient#client');

class IssueClient extends Base {
  [CLIENT]: IssueRegistryClient;
  [CACHE]: {
    work: IIssue[];
    thought: IIssue[];
    life: IIssue[];
  } = {
    work: [],
    thought: [],
    life: [],
  };
  constructor(options: Options) {
    super(options);
    this[CLIENT] = options.cluster(IssueRegistryClient).create(options);
    this[CLIENT].ready(() => {
      this.subscribe('loaded', (issues) => {
        for (const issue of issues) {
          const label = issue.labels[0].name.toLowerCase();
          this[CACHE][label].push(issue);
        }
        this.ready(true);
      });
    });
  }

  subscribe(...args: [string, (data: IIssue[]) => void]) {
    this[CLIENT].subscribe(...args);
  }

  //   publish(...args) {
  //     this._client.publish(...args);
  //   }

  get(key: 'work' | 'life' | 'thought', id?: number) {
    if (id) {
      const issue = this[CACHE][key].filter((val) => {
        return val.id === id;
      });
      return issue;
    }
    return this[CACHE][key] || [];
  }
}

export default IssueClient;
