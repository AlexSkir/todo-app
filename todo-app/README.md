# alexskir-reactplate

*It is a modified and updated template based on [reactjs-boilerplate of Nikhil-Kumaran](https://github.com/Nikhil-Kumaran/reactjs-boilerplate).* 

The template is similar to create react app but gives you more control over the build configurations. It sets up  react (@^17.0.2), react-redux (@^8.0.5), @reduxjs/toolkit (@^1.9.3), react-router, babel, webpack (@^5.78.0) with basic loaders (CSS, LESS, SASS, babel), Ant design and Bootstrap. It is optomized for development and production using code splitting and lazy loading

## Prerequisites

> **use node >= 15.14.0**  **npm >= 9.6.4**  

*For Node@12.x use alexskir-reactplate@1.0.1 package*

## Changelog

* Add react-redux and @reduxjs/toolkit
* Add simplified TODO app as a template for react/redux application
* Add basic reduxjs/toolkit methods - getState, dispatch, configureStore, reducer with actions and selectors, createAsyncThunk, middleware and devTools integration 

*if you don't need either redux or its sample methods - use alexskir-reactplate@1.0.0 package*

## Installation

```bash
npm install -g alexskir-reactplate
```

After installation, you can use the following command to initialize your project.

```bash
alexskir-reactplate project-name
```

Alternatively, you can use `npx` to directly use `alexskir-reactplate` without installing globally.

```bash
npx alexskir-reactplate project-name
```

## Usage

After initializing your project, you can use the following scripts.

### `npm start`

Runs the app in the development mode.

Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will hot reload if you make edits.

### `npm run build`

Builds the app for production and files are saved to the `build` folder.

It bundles your files in production mode and optimizes the build for the best performance.

The build is minified and the filenames include hashes. You can run your build locally with the command *npx serve build*

Your app is ready to be deployed!

### `npm run build-serve`

This command will build your app and start a server called `serve` which will serve your build files.
