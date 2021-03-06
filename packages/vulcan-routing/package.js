Package.describe({
  name: "vulcan:routing",
  summary: "Vulcan router package",
  version: '1.5.0',
  git: "https://github.com/TelescopeJS/Telescope.git"
});

Package.onUse(function (api) {

  api.versionsFrom(['METEOR@1.0']);

  api.use([
    'vulcan:lib@1.5.0',
  ]);

  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');

});
