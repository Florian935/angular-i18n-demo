# Angular i18n Demo

This project is a demo of how to manage internationalization in Angular app.

## Build application with the differents locals

To build app with different locales, run `ng build --localize` command

## Run app with specific local

To run the application with a specific local, run `ng serve --configuration=YOUR_LOCAL` command. To know the local,
please refer to `angular.json` file. For example, you can launch `ng serve --configuration=en`

## Build app in specific env

Run `ng build --configuration=YOUR_ENV,YOUR_LOCAL` command. For example: `ng build --configuration=production,fr`
