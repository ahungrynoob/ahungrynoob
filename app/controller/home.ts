import { Controller } from 'beidou';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    const renderPath = 'index';
    const context: { statusCode?: number; url?: string } = {};
    const location = ctx.url;
    const bgIndex = Math.round(Math.random() * 3);
    const initialState = {
      context,
      location,
      bgIndex,
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
