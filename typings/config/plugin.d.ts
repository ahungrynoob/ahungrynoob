// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import { EggPluginItem } from 'beidou';
import 'egg-onerror';
import 'egg-session';
import 'egg-watcher';
import 'egg-multipart';
import 'egg-security';
import 'egg-development';
import 'egg-logrotator';
import 'egg-schedule';
import 'egg-static';
import 'egg-jsonp';
import 'egg-view';
import 'beidou-view';
import 'beidou-view-react';
import 'beidou-webpack';
import 'beidou-isomorphic';
import 'beidou-router';

declare module 'beidou' {
  interface EggPlugin {
    onerror?: EggPluginItem;
    session?: EggPluginItem;
    i18n?: EggPluginItem;
    watcher?: EggPluginItem;
    multipart?: EggPluginItem;
    security?: EggPluginItem;
    development?: EggPluginItem;
    logrotator?: EggPluginItem;
    schedule?: EggPluginItem;
    static?: EggPluginItem;
    jsonp?: EggPluginItem;
    view?: EggPluginItem;
    beidouView?: EggPluginItem;
    react?: EggPluginItem;
    webpack?: EggPluginItem;
    isomorphic?: EggPluginItem;
    router?: EggPluginItem;
  }
}
