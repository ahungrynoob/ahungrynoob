import { Service } from 'beidou';
import Showdown from 'showdown';
import showdownToc from 'showdown-toc';
import { IIssue, Category } from 'typings';

Showdown.setFlavor('github');
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
    const raw = this.app.issueClient.get(id)[0];
    if (raw) {
      raw.body = this.render(raw.body);
    }
    return raw;
  }

  render(content: string) {
    // const toc = [];
    const showdown = new Showdown.Converter({ extensions: [showdownToc()] });
    const result = showdown.makeHtml(content);
    return result;
  }
}
