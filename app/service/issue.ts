import { Service } from 'beidou';
import { IIssue } from '../lib/issueRegistryClient';
export default class IssueService extends Service {
  public list(key: 'work' | 'life' | 'thought'): IIssue[] {
    const list = this.app.issueClient.get(key);
    return list.map(({ id, title, updated_at }) => ({
      id,
      title,
      updated_at,
    }));
  }
}
