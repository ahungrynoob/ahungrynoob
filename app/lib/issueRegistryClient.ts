import { Application } from 'egg';
import urllib from 'urllib';
import Base from 'sdk-base';

export interface IIssue {
  id: number;
  title: string;
  labels?: Array<{ name: 'Work' | 'Life' | 'Thought' }>;
  updated_at: string;
  body?: string;
}

export type Options = {
  cluster: (arg: any) => any;
} & Application['config']['github'];

const OPTIONS = Symbol('IssueRegistryClient#options');

class IssueRegistryClient extends Base {
  [OPTIONS]: Options;
  issues: IIssue[] = [];

  constructor(options: Options) {
    super({
      initMethod: 'init',
    });
    this[OPTIONS] = options;
  }

  async init() {
    // it will pull issues here
    const name = this[OPTIONS].name;
    const repo = this[OPTIONS].repo;
    // todo: will add pagination logic
    const result = await urllib.request(
      `https://api.github.com/repos/${name}/${repo}/issues?creator=${name}`,
      { dataType: 'json' },
    );
    this.issues = result.data;
    this.ready(true);
  }

  subscribe(event: string, listener: (data: IIssue[]) => void) {
    switch (event) {
      case 'loaded':
        process.nextTick(() => listener(this.issues || []));
      //   case 'update':
      //     this.on(event, listener);
    }
  }

  //   publish() {
  //     // todo: publish when receive webhook from github
  //   }
}

export default IssueRegistryClient;
