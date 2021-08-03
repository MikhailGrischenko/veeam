# Test task for Veeam

## Task description 
You need to develop an application that renders the UI based on JSON config.

The application consists of two tabs:
- Config – for input JSON configuration
- Result – for displaying result form

Application should be able to render any amount of fields of following types:
- Numeric (number field)
- Single string (text field)
- Multiple strings (textarea)
- Logical (checkbox)
- Date (date field)
- Enum (radio buttons)

In addition user should be able to configure form title, amount and labels of the buttons at the bottom of the result form (for example: Ok, Cancel, Apply)

Stack:
- It is recommended to use React
- We are gradually switching to TypeScript and moving all existing projects to it, so it is desirable (but not mandatory) to use TS instead of JS.
- You can use any set of tools for development, configuration and building of the app: Create React App, custom-configured webpack, babel, etc. or any other in which you are used to work.
- You can use any npm packages
- In the readme file located in the project folder indicate how to build and run the project (eg. In the project folder open the console and run ‘yarn start’ command, and go to the localhost:3000 in the browser)

## Available Scripts

In the project directory, you can run:

`npm start` (development mode)

`npm run build` (build project)

The project will be built in the directory "../build". After that, it can be copied to any hosting. 

## Project dependency

### React 
The main library on which the project is implemented

### Material-ui
UI-component library

### Mobx
Library for managing state.

### notistack
UI-component library. Used to work with Snackbar/Message.

## Project structure

### components 
There are functional components created on React. Mainly responsible for the view layer. The components are compact, simple and self-documenting. Components are written in a functional style.
#### css
Styles for components are written for speed in css format. If the application were larger, then it would be worth using pre-processors (sass/less). In view-style I tried to show the corporate style.

### config 
The config of the entire application was conceived, but due to the modesty of the tasks, only the duration of the message was included in the config :)

### module
Modules are the core of the application. Created from classes. Also fairly simple and self-documenting.

### store 
This place consolidation of classes responsible for the state of one or another part of the application.

-------
(c) Mikhail Grischenko 2021
