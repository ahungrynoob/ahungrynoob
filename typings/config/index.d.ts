// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'beidou';
import { EggAppConfig } from 'beidou';
import ExportConfigDefault from '../../config/config.default';
type ConfigDefault = ReturnType<typeof ExportConfigDefault>;
type NewEggAppConfig = ConfigDefault;
declare module 'beidou' {
  interface EggAppConfig extends NewEggAppConfig { }
}