// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'beidou';
import ExportIssue from '../../../app/service/issue';

declare module 'beidou' {
  interface IService {
    issue: ExportIssue;
  }
}
