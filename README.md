# grunt-init-es6-hbs

This is a [grunt-init](http://gruntjs.com/project-scaffolding) template that will create scaffolding for a single-page Javascript app. It features out-of-the-box support for:

* Bower for dependency management
* Sass-based stylesheets
* ES2015 modules and syntax using browserify/babelify
* Handlebars templates using browserify/hbsfy

If you need a really lightweight frontend with templates and easily organizable code with ES2015, this is a great starting point.

## Installation

First, make sure that you've got `grunt-init` installed:

```
npm install -g grunt-init
```

Then, create a `.grunt-init` directory in your home directory and clone this repo:

```
mkdir ~/.grunt-init
git clone https://github.com/demsullivan/grunt-init-es6-hbs.git ~/.grunt-init/es6-hbs
```

Now you can use grunt-init to create your project scaffolding:

```
mkdir my-project
cd my-project
grunt-init es6-hbs
```

Answer the question prompts, and voila! A simple project scaffolding.

## Usage

### Setup
Before you begin, make sure you install the package dependencies with `npm install`.

### Development

The main entry-point for the app is the `main()` function in `app/app.js`. Start here to begin building your app. The main stylesheet can be found at `app/styles/app.scss` - any additional stylesheets imported into this file will be included in the build output.

### Static Assets

All files in `app/public` will get merged with the final `dist/` directory. For exmaple, `app/public/sitemap.xml` will be copied to `dist/sitemap.xml`.

### Grunt Tasks

* `grunt build` or just `grunt` - build your application and store it in the `dist/` directory
* `grunt serve` - build your application and serve it on port 4200 with auto-reloading
* `grunt clean` - cleans the `dist` and `build` directories
