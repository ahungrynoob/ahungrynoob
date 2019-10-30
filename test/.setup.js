import fs from 'fs';
import path from 'path';

before(() => {

  const privateConfigPath = path.join(__dirname,'../config/a.config.ts');
  const mockConfigPath = path.join(__dirname,'mock/private.config.ts');

  if( !fs.existsSync(privateConfigPath) ){
    const mockFile = fs.readFileSync(mockConfigPath,'utf8');
    fs.writeFileSync(privateConfigPath,mockFile);
  }
});