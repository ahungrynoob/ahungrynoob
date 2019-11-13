const fs = require('fs');
const path = require('path');

const privateConfigPath = path.join(__dirname, '../config/private.config.ts');
const mockConfigPath = path.join(__dirname, 'mock/private.config.ts');

if (!fs.existsSync(privateConfigPath)) {
    const mockFile = fs.readFileSync(mockConfigPath, 'utf8');
    fs.writeFileSync(privateConfigPath, mockFile);
}
