# Appwatch

## Description
This repo contains the enonic application for "Gode valg" - a campaign containing different courses.

## Prerequisites

* Enonic XP v7.5.0
* Node v10.21.0 +
* Yarn

As this is an Enonic XP application, you need to have a local Enonic XP server running to see changes.

You need Enonic CLI (Command Line Interface) which is built for management of installations and projects of Enonic XP. 
CLI can be downloaded here: https://developer.enonic.com/start

For further instructions regarding installation, visit:
https://developer.enonic.com/docs/enonic-cli/master/install

Run Enonic sandbox:
```enonic sandbox start```

## Build
The build system is based on Gradle and the XP Gradle plugin.
Build the project with the following command:
* ```enonic project build```

The "project build" command is an alias for the Gradle Wrapper (gradlew).

## Build & Deploy
The application must be "deployed" to your local server on code changes.
To build and deploy the Enonic XP Application (both frontend and backend), you need to run the following commands:

Backend (site, services, lib, admin):
* ```enonic project deploy```

This commando must always be run

For continuous deploy:
* ```yarn deploy```

(Make sure the environment variable XP_HOME is set to use the correct sandbox)

Frontend (assets):
* ```yarn webpack:watch```
Not necessary for changes in backend (site, services, lib, admin)


## Linting
The project also includes an ESlint configuration, which can be executed by the commands:
```
# Find errors & warnings
npm run lint

# Find AND fix errors & warnings that can automatically be fixed
npm run lint:fix
```
The configuration can be seen in **.eslintrc.json**, which is an extension of the recommended configuration.
