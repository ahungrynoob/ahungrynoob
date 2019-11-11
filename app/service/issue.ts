import { Service } from 'beidou';
import { IIssue, Category } from 'typings';
export default class IssueService extends Service {
  list(key: Category): IIssue[] {
    const list = this.app.issueClient.get(key);
    return list.map(({ id, title, updated_at }) => ({
      id,
      title,
      updated_at,
    }));
  }

  article(id: number): IIssue {
    return this.app.issueClient.get(id)[0];
  }
}
