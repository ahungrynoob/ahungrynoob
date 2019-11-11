import { Controller } from 'beidou';
import errors from '../../config/errors';
import { Category } from 'typings';

export default class ArticlesController extends Controller {
  async index() {
    const { ctx } = this;
    const { category } = ctx.request.query;
    const categories = [ 'work', 'thought', 'life' ];
    if (categories.indexOf(category) === -1) {
      ctx.status = 400;
      ctx.body = {
        ret: errors.INVALID_PARAMS,
        msg: 'category should one of ["work", "thought", "life"].',
      };
      return;
    }
    const data = ctx.service.issue.list(category as Category);
    ctx.body = {
      ret: 0,
      data,
    };
  }

  async show() {
    const { ctx } = this;
    const { id } = ctx.params;
    const data = ctx.service.issue.article(Number(id));
    if (!data) {
      ctx.status = 404;
      ctx.body = {
        ret: errors.NOT_FOUND,
        msg: `article ${id} not found`,
      };
      return;
    }
    ctx.body = {
      ret: 0,
      data,
    };
  }
}
