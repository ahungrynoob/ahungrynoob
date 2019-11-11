import Base from 'sdk-base';
import IssueRegistryClient from './issueRegistryClient';
import { Category, IIssue, IssueRegistryClientOptions } from 'typings';

const CACHE = Symbol('IssueClient#cache');
const CLIENT = Symbol('IssueClient#client');

class IssueClient extends Base {
  [CLIENT]: IssueRegistryClient;
  [CACHE]: {
    all: IIssue[];
    work: IIssue[];
    thought: IIssue[];
    life: IIssue[];
  } = {
    all: [],
    work: [],
    thought: [],
    life: [],
  };
  constructor(options: IssueRegistryClientOptions) {
    super(options);
    this[CLIENT] = options.cluster(IssueRegistryClient).create(options);
    this[CLIENT].ready(() => {
      this.subscribe('loaded', (issues) => {
        for (const issue of issues) {
          const label = issue.labels[0].name.toLowerCase();
          this[CACHE].all.push(issue);
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

  get(key: Category | number) {
    if (typeof key === 'number') {
      const issue = this[CACHE].all.filter((val) => {
        return val.id === key;
      });
      return issue;
    }
    return this[CACHE][key] || [];
  }
}

export default IssueClient;
