import { Application } from 'beidou';

type Category = 'work' | 'life' | 'thought';

interface IIssue {
  id: number;
  title: string;
  labels?: Array<{ name: 'Work' | 'Life' | 'Thought' }>;
  updated_at: string;
  body?: string;
}

type IssueRegistryClientOptions = {
  cluster: (arg: any) => any;
} & Application['config']['github'];
