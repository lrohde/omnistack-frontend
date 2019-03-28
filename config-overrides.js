const { addBabelPlugin, override } = require('customize-cra');

const rootImport = [
  'root-import',
  {
    rootPathPrefix: '˜',
    rootPathSuffix: 'src',
  },
];

// Format Deprecated
// module.exports = config => injectBabelPlugin(rootImport, config);

// New Format
module.exports = override(addBabelPlugin(rootImport));
