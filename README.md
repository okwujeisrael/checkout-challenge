# About the app

This project was bootstrapped using create react app and has deliberately been kept simple. Because there were a number of features to add in a limited timespan, I made the following choices:

- [x] Keeping the validation simple. Checking only that none of the fields are empty. An improvement on this would be adding additional validations besides browser validations to the each field. Checking that only numbers from 1 - 5 have been entered in the "rating" field.
- [x] For simplicity I also chose to use a simple pie chart from Recharts. Each rating that has been entered is aggregated and on hovering on any pie, you can see what allocation has been given to the pie.
- [x] An integration test has been written for the application. If I'd had more time, I'd have written additional integration tests for the Chart and Form components, as well as unit tests for the atomic components. The integration test however covers an end-to-end flow of how the application should behave.
- [x] I haven't used any advanced state management libraries or the context API because I didn't think it was necessary for this simple application.
- [x] I have also chosen not to add any client side routing because of the limited timespan to complete and I felt it wasn't really necessary for an app with two components that could easily be swappable.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
