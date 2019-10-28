import { EggAppInfo } from 'beidou';

export default (appInfo: EggAppInfo) => {
  return {
    keys: appInfo.name + '_123456',
  };
};
