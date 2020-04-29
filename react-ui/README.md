This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Environment Variables

The project requires some environment variables to run correctly. A `.env` file is provided for a quick reference and
default values for some of them. For local development, a `.env.local` file should be added to the project `react-ui`
folder to override those values.

| Environment Variable | Default | Description |
| -------------------- | ------- | ----------- |
| REACT_APP_HELLO_API | http://localhost:8080 | The location of the API used by the web application. |
| REACT_APP_AUTH0_CLIENT_ID |  | The client id of an Auth0 application. Used for authentication. |
| REACT_APP_AUTH0_DOMAIN |  | The fully qualified domain name hosted by Auth0. Used for authentication. |
| REACT_APP_AUTH0_AUDIENCE |  | The audience value an Auth0 API. |

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Firebase Setup

As an alternative, the application can be run locally with a Firebase emulator. In this case, the local build artifacts
are used, so you must run `npm run build` for changes to take effect.

1. Install [Firebase CLI](https://firebase.google.com/docs/cli): `npm install -g firebase-tools`
1. Login to Firebase: `firebase login`
1. Set the default project alias: `firebase use --add`
   -  It will prompt for an alias (use `default`) and project

### Run locally with Firebase

1. Build the application: `npm run build`
1. Start the application: `firebase serve --port 3000`
