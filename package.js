Package.describe({
  name: 'parlay:starter-pack',
  version: '1.0.3_2',
  summary: 'Packages! The bare essentials of parlay:full-pack 🍎☕️',
  git: 'https://github.com/parlaywithme/starter-pack.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');

  api.imply('iron:router@1.0.7');
  api.imply('zimme:iron-router-auth@3.0.0');
  api.imply('aldeed:collection2@2.3.2');
  api.imply('zimme:collection-timestampable@1.0.4');
  api.imply('useraccounts:core@1.8.1');
  api.imply('aldeed:autoform@4.2.2');
  api.imply('email@1.0.5');
  api.imply('http@1.0.10');
  api.imply('momentjs:moment@2.9.0');

  // api.addFiles('parlay:starter-pack.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('parlay:starter-pack');
  api.addFiles('parlay:starter-pack-tests.js');
});
