import { Controller } from 'beidou';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    const renderPath = 'index';
    const context: { statusCode?: number; url?: string } = {};
    const location = ctx.url;
    const bgIndex = Math.round(Math.random() * 3);
    const { 0: category, 1: id } = ctx.params;

    const list = ctx.service.issue.list((category + id) as 'work' | 'life' | 'thought');

    const article = ctx.service.issue.article(Number(id)) || {};

    const title = article.title ? article.title : category || 'Ahungrynoob';

    const initialState = {
      context,
      location,
      bgIndex,
      list,
      article,
      title,
    };
    const html = await ctx.renderView(renderPath, {
      initialState,
    });
    ctx.body = html;
    ctx.status = context.statusCode || 200;
    // if (context.url) {
    //   ctx.status = context.statusCode;
    //   ctx.redirect(context.url);
    // } else {
    //   ctx.body = html;
    //   ctx.status = context.statusCode || 200;
    // }
  }
}
