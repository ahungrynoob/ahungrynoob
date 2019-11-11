// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'beidou';
import ExportArticles from '../../../app/controller/articles';
import ExportHome from '../../../app/controller/home';

declare module 'beidou' {
  interface IController {
    articles: ExportArticles;
    home: ExportHome;
  }
}
