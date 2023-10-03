# Welcome to simple grunt starter.

This is a Grunt starter kit / boilerplate with ~~Bootstrap~~ [Bulma](https://bulma.io/) that I use for my own projects. If you have any requests or remarks please let me know 🙂

## Features:
- Compiles SCSS / SASS to one style.css file.
- Also minifies that style.css to style.min.css. For use on your live websites.
- Automatically includes Bulma's initial variables sass that you can overwrite with your own variables.
- Add any SCSS file and it gets included automatically.
- Checks your JS files for errors.
- Combines JS files to one custom.js file.
- Minifies that Javascript file to a custom.min.js for your live websites.
- Add any Javascript file and it gets included automatically.
- Supports LiveReload.
- Minifies your html automatically.

## Getting Started

Requirements:
- [Node.js](https://nodejs.org/en/)
- [Grunt](http://gruntjs.com/)
- https://yarnpkg.com/ (optional)

For more information on Grunt, see the [Getting Started](http://gruntjs.com/getting-started) guide.

If Node.js and Grunt are installed navigate to the destination folder using the Node.js command prompt.

For example:
```bash
cd C:\Development\GIT\simple-grunt-starter
```

### Watching for file changes
To get started we will need to install the required packages specified in package.json. This is done by entering the following command in your Node.js command prompt:
```bash
yarn
```
or ( if you don't have Yarn )
```bash
npm install
```

Now that the required packages are installed run the following command to create the folders and copy the required fonts to the dist folder:
```bash
grunt init
```

Now to start making your changes run:
```bash
grunt
```

Every time you change a file the watch task will trigger and compile everything in the dist folder!

### Building for production
Ready to go live? Run the following command to minify your files:
```bash
grunt build
```

Don't forget to change the paths in your html to the .min version or use index.min.html!

## Release notes
Version 1.8.0, 1.9.0
- Security / package.json dependency update

Version 1.7.0
- Update to Grunt 1.2.0
- Update to Bulma 0.9.0
- Security / package.json dependency update

Version 1.6.0
- Security / package.json dependency update
- Minor text fixes

Version 1.5.0
- Replaced Bootstrap with [Bulma](https://bulma.io/)
- Package.json dependencies update
- Minor text fixes
