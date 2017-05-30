## New Contact App 

### Using Angular

- server: C# .NET Core Web API (Visual Studio 2017)

- client: Angular 4 Web app

- cordova: Hybrid app (Android)

## Pre-requisites
##### Client
```
Angular CLI: Installed (npm install -g @angular/cli)
Node.js: Installed (https://nodejs.org)

npm install
```
##### Cordova
```
Cordova CLI: Installed (npm instal -g cordova)
Web app build (ng build --environment=local --base-href . --output-path=../cordova/www )
Execute build.bat
```
##### Server
```
Visual Studio 2017: Installed
Open Solution and Run server
--> http://localhost:49585/
```
## Run

### Client on Development server
```
ng serve
--> http://localhost:4200/

Web API
ng serve --environment=dev

Local Storage 
ng serve --environment=local
```
The app will automatically reload if you change any of the source files.

### Cordova Hybrid app
```
client build
ng build --environment=local --output-path=../cordova/www 

Run on Android device
cordova run android
```

## Build

```
ng build
--> client/dist/

ng build --environment=local --output-path=../cordova/www --base-href .
--> cordova/www/
```

## Tests

#### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

