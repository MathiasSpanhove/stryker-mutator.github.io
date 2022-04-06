// @ts-check
module.exports = {
  docs: {
    General: [{ type: 'autogenerated', dirName: 'General' }],
    'Mutation Testing': [{ type: 'autogenerated', dirName: 'mutation-testing-elements' }],
    // @ts-expect-error
    StrykerJS: require('./docs/stryker-js/sidebar'),
    'Stryker.NET': [{ type: 'autogenerated', dirName: 'stryker-net' }],
    Stryker4s: [{ type: 'autogenerated', dirName: 'stryker4s' }],
  },
};
