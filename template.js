'use strict';

exports.description = 'Create a single-page app with support for Bower, ES2015 and Handlebars templates.';
exports.warnOn = '*';

exports.template = function(grunt, init, done) {
  init.process({ type: 'es6-hbs'}, [
    init.prompt('name'),
    init.prompt('title'),
    init.prompt('description'),
    init.prompt('version'),
    init.prompt('repository'),
    init.prompt('homepage'),
    init.prompt('bugs'),
    init.prompt('licenses', 'MIT'),
    init.prompt('author_name'),
    init.prompt('author_email'),
    init.prompt('author_url')
  ], function(err, props) {
    var files = init.filesToCopy(props);

    init.addLicenseFiles(files, props.licenses);
    init.copyAndProcess(files, props);

    init.writePackageJSON('package.json', {
      name: 'es6-hbs-app',
      version: '0.0.0-ignored',
      devDependencies: {
        'babel-plugin-transform-es2015-modules-amd': '^6.8.0',
        'babelify': '^7.3.0',
        'grunt-bower-concat': '^1.0.0',
        'grunt-browserify': '^5.0.0',
        'grunt-contrib-clean': '^1.0.0',
        'grunt-contrib-concat': '^1.0.1',
        'grunt-contrib-connect': '^1.0.2',
        'grunt-contrib-copy': '^1.0.0',
        'grunt-contrib-watch': '^1.0.0',
        'grunt-sass': '^1.2.1',
        'handlebars': '^4.0.5',
        'hbsfy': '^2.7.0',
        'load-grunt-tasks': '^3.5.2'
      }
    });

    init.writePackageJSON('bower.json', {
      name: 'es6-hbs-app',
      version: '0.0.0-ignored'
    });

    done();

  });
}
