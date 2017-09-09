# Welcome to simple grunt starter.

This is a Grunt starter kit / boilerplate with Bootstrap that I use for my own projects. If you have any requests or remarks please let me know! :-).

## Release notes
Version 1.1.0 released!
- Added a Grunt HTML minifier.
- Added default meta tags.
- [.editorconfig](http://editorconfig.org/) added.
- Updated the .gitignore to ignore the dist folder.
- Readme updates.
- Replaced [grunt-copy-mate](https://www.npmjs.com/package/grunt-copy-mate) since it is no longer maintained.

## Features:
- Compiles SCSS / SASS to one style.css file.
- Also minifies that style.css to style.min.css. For use on your live websites.
- Automatically includes bootstrap-sass that you can overwrite with your own variables. Theming your Bootstrap has never been easier!
- Add any scss file and it gets included automatically!
- Checks your js files for errors.
- Combines JS files to one custom.js file.
- Adds Bootstrap javascript to your javascript file.
- Minifies that javascript file to a custom.min.js for your live websites.
- Add any javascript file and it gets included automatically!
- Supports LiveReload!
- Minifies your html automatically!

## Getting Started

You need
- [Node.js](https://nodejs.org/en/)
- [Grunt](http://gruntjs.com/)
- https://yarnpkg.com/ (optional)

For more information on Grunt, see the [Getting Started](http://gruntjs.com/getting-started) guide.

If Node.js and Grunt are installed navigate to the destination folder using the Node.js command prompt.

For example:
```bash
cd C:\Development\GIT\simple-grunt-starter
```

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

Ready to go live? Run the following command to minify your files:
```bash
grunt build
```
Don't forget to change the paths in your html to the .min version or use index.min.html!
