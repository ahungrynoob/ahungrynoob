import { Application } from 'beidou';

export default (app: Application) => {
  const { router, controller } = app;
  router.resources('articles', '/api/articles', controller.articles);
  router.get(/^\/([\w-.]*)\/?([\w-.]*)$/, controller.home.index);
};
