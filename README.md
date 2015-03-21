# winnings #

A web application that collects the (financial) "winnings" of a user in order
to display a leaderboard. This app is just for fun -- to play around with
the technologies contained within it.

## Running the Project ##

To run the application, some initial setup is required:

### Install Node ###

Since this is a [Node.js](http://nodejs.org/) project, please make sure
Node is installed on the machine. A recommended install method is to use
[nvm](https://github.com/creationix/nvm) which installs Node into your
home directory.

### Install Dependencies ###

Once Node is installed, from this project's root directory run the following
command to install the project dependencies:

`$ npm install`

This will install both the server side dependencies
(via [npm](https://www.npmjs.org/)) and client side dependencies
(via [bower](http://bower.io/)).

### MongoDB ###

This application requires a running instance of MongoDB. By default, the
application is configured to look for this running instance on the local
machine, but can be configured to point to a remote instance (see the
[configuration section](#configuration) for more information.)

If you need to install MongoDB, you can do so from the
[MongoDB downloads page](https://www.mongodb.org/downloads). For help
on the installation process and starting up MongoDB, please consult
the [installation instructions](http://docs.mongodb.org/manual/installation/).

### Start the App ###

This project is configured to load separate configuration based on the
environment where it is run (for example, `development` vs `production`).
The environment is specified via the `NODE_ENV` environment variable.
If no environment is specified, it will default to `development`.

To start the application (in development mode), execute the following command:

`$ npm start`

This script will call `grunt` specifying the `development` environment. If
you wish you specify an environment, use `grunt` directly and include the
`NODE_ENV` environment variable. For example, to start the project in `test`
environment, execute the following command:

`$ NODE_ENV=test grunt`

The current available environments include:

*   `development`
*   `test`
*   `production`

#### Production ####

In production mode the application is setup to use minified assets
on the client side (along with template caching via Angular).
[Grunt](http://gruntjs.com/) is used to do this via the grunt `build`
task. To execute this build task, run the following command:

`$ npm run build`

To start the server in the `production` environment, execute the following
command:

`$ npm run production`

This command does not use `grunt`, and therefore does not use `nodemon` to
monitor for file system changes. This was done to allow a separate "production"
process to monitor the state of the server.

### Configuration ###

Most all of the app's configuration is held within the `cofig/env/all.js` file.
Some of these values can be specified via environment variables. Below is a
list of those variables:

* Node Server
    * `PORT` : The port for the node application server, defaults to `3000` in all environments, except `test`, which defaults the port to `3001`
* Mongo
    * `MONGO_PROTOCOL` : The protocol for the mongodb connection, defaults to `mongodb://`
    * `MONGO_HOST` : Hostname for mongodb, defaults to `localhost`
    * `MONGO_PORT` : Port for mongodb, defaults to `27017`
    * `MONGO_DATABASE` : The database to use for mongodb, defaults to `winnings`

## Tests ##

There are tests for both the server side code and the client side code.
The server side and client side unit tests are written using
[Jasmine](https://jasmine.github.io/), but the client side unit tests
run using [Karma](https://karma-runner.github.io). There are also
end to end tests for the client which use
[Protractor](http://angular.github.io/protractor).

### Setup ###

Project dependencies are required for tests as well, so please make
sure the [dependencies are installed](#install-dependencies).

### Run All Tests ###

To run all the tests, execute the following command:

`$ npm test`

[Grunt](http://gruntjs.com/) is used to bundle all the test execution
into one command. For more information on how this is done, please
see the `Gruntfile.js` file -- specifically the `test` task.

### Additional Test Run Actions ###

To run the server side tests in a "watch" mode (re-runs the tests after each change):

`$ npm run test-server-watch`

To run the client side karma unit tests in a "watch" mode:

`$ npm run test-client-watch`

To run the protractor tests:

`$ npm run protractor`
