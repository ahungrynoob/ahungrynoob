import path from 'path';
import fs from 'fs';
import { EggAppConfig, PowerPartial, EggAppInfo } from 'beidou';
import privateConfig from './private.config';
// 应用本身的配置 Scheme
interface IBlogConfig {
  static: {
    dir: Array<{ prefix: string; dir: string }>;
  };
  github: {
    name: string;
    repo: string;
  };
}

export default (appInfo: EggAppInfo) => {
  const config: PowerPartial<EggAppConfig & IBlogConfig> = {};

  config.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(__dirname, 'favicon.ico')),
  };

  config.view = {
    useHashAsset: true,
    root: `${appInfo.baseDir}/client/pages`,
  } as any; // todo: will remove after beidou update

  config.router = {
    exts: ['.jsx', '.ts', '.tsx'],
    entry: 'index',
  };

  config.router = {
    root: '/pages',
    exts: ['.tsx'],
  };

  config.webpack = {
    resolve: {
      extensions: ['.json', '.js', '.jsx', '.ts', '.tsx'],
      alias: {
        client: path.join(__dirname, '../client'),
      },
    },
  };

  config.static = {
    dir: [
      {
        prefix: '/public',
        dir: path.join(appInfo.baseDir, '/app/public'),
      },
      {
        prefix: '/build',
        dir: path.join(appInfo.baseDir, '/build'),
      },
    ],
  } as any; // todo: will remove after egg update
  return { ...config, ...privateConfig(appInfo) };
};
