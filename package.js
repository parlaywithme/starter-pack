Package.describe({
  name: 'parlay:starter-pack',
  version: '1.0.0',
  summary: 'The bare essentials of parlay:full-pack 🍎☕️',
  git: 'https://github.com/parlaywithme/starter-pack.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.0');

  api.imply('iron:router');
  api.imply('zimme:iron-router-auth');
  api.imply('aldeed:collection2');
  api.imply('zimme:collection-timestampable');
  api.imply('useraccounts:core');
  api.imply('aldeed:autoform');
  api.imply('email');
  api.imply('http');
  api.imply('momentjs:moment');

  // api.addFiles('parlay:starter-pack.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('parlay:starter-pack');
  api.addFiles('parlay:starter-pack-tests.js');
});
