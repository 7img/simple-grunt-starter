# Welcome to simple-grunt-starter

This is a Grunt starter kit with Bootstrap that I use for my own projects.

## Simple Grunt starter:
- Compiles SCSS / SASS to one style.css file.
- Also minifies that style.css to style.min.css. For use on your live websites.
- automatically includes bootstrap-sass that you can overwrite with your own variables. Theming your Bootstrap has never been easier!
- Add any scss file and it gets included automatically!
- Checks your js files for errors.
- Combines JS files to one custom.js file.
- Adds Bootstrap javascript to your javascript file.
- Minifies that javascript file to a custom.min.js for your live websites.
- Add any javascript file and it gets included automatically!
- Supports LiveReload!

## Getting Started

Install [Node.js](https://nodejs.org/en/) and [Grunt](http://gruntjs.com/).

For more information on Grunt, see the [Getting Started](http://gruntjs.com/getting-started) guide.

If Node.js and Grunt are installed navigate to the destination folder using the Node.js command prompt.

For example:
```
cd C:\Development\GIT\simple-grunt-starter
```

To get started we will need to install the required packages specified in package.json. This is done by entering the following command in your Node.js command prompt:
```
npm install
```

Now that the required packages are installed run the following command to create the folders and copy the required fonts to the dist folder:
```
grunt init
```

Now run:
```
grunt
```

Done! Grunt is now watching for your changes and writes them to the dist folder!

Ready to go live? Run the following command to minify your files:
```
grunt build
```
Don't forget to change the paths in your html to the .min version!
