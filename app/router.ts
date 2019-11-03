import { Application } from 'beidou';

export default (app: Application) => {
  const { router, controller } = app;
  router.get('*', controller.home.index);
};
