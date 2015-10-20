/*
 * This is the setup for testing with webpack and ES6. This is so
 * that we can write the tests in ES6 and it will compile correctly.
 * This is the entry file for the webpack test. It creates a bundle.js
 * file for the client. When we run the test, it will compile and bundle
 * them all here.
 */

import angular from 'angular';

// Include Angular-Mocks to mock out dependencies
import mocks from 'angular-mocks';

/*
 * Use the context method on require that webpack created to tell
 * webpack what files we want to require or import. Context will
 * be a function/object with the file names as keys. Using the regex,
 * it looks in the client/app and finds any file that ends with spec.js
 * and gets its path. This is recursive since we passed true into context.
 */

let context = require.context('./client/app', true, /\.spec\.js/);

/*
 * Get all the files and for each file, call the context function
 * that will require the file and load it here. Context will
 * loop and require those spec files here.
 */
context.keys().forEach(context);