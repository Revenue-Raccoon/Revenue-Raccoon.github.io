const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const { resolver } = await getDefaultConfig(__dirname);

  return {
    resolver: {
      ...resolver,
      assetExts: [...resolver.assetExts, 'txt', 'xml'],
    },
  };
})();
