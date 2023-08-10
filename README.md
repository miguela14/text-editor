# text-editor

Awesome Text Editor Web App
Welcome to the Awesome Text Editor Web App! This application provides you with a seamless and powerful text editing experience right in your browser. With a feature-rich client-server architecture, cutting-edge technologies, and robust functionality, you'll be able to write and save your content effortlessly. This README file will guide you through the setup, usage, and deployment of the app.

## Getting Started

## Folder Structure

The application's folder structure follows a client-server model for efficient development and deployment:

├── client/            # Client-side code
│   ├── src/            # Source files
│   ├── dist/           # Bundled files (generated)
│   └── ...
├── server/            # Server-side code
│   ├── src/            # Source files
│   └── ...
├── ...

## Installation

To set up the application, follow these steps:

Clone this repository to your local machine.
Navigate to the root directory of the project in your terminal.
Run npm install to install the necessary dependencies.

## Usage

Running the Application
Open your terminal and navigate to the root directory of the project.
Run npm run start to start the backend server and serve the client.
Open your web browser and visit http://localhost:3000 to access the application.

## Bundling JavaScript

Your JavaScript files are bundled using Webpack, ensuring optimal performance and compatibility. To bundle the files, follow these steps:

In the root directory, run npm run build to bundle the JavaScript files.
Find the bundled files in the client/dist directory.

## Next-gen JavaScript

This app fully supports next-gen JavaScript features, enabling a modern development experience without compromising compatibility. Write your code using the latest JavaScript syntax, and the app will handle the rest.

## IndexedDB Storage

The application utilizes IndexedDB for seamless and efficient storage of your content. When you open the text editor, an IndexedDB database is immediately created to store your content.

## Saving and Retrieving Content

Enter your content in the text editor.
Click off the DOM window or navigate away from the application.
Your content will be automatically saved using IndexedDB.
To retrieve your content:

Reopen the text editor after closing it.
Your previously saved content will be retrieved from IndexedDB and displayed in the editor.

## Installation as Desktop App

While using the application in your web browser, click on the "Install" button.
The web application will be downloaded and installed as an icon on your desktop, providing easy access.

## Service Worker
Our application utilizes Workbox to create a registered service worker, enabling offline capabilities and caching of static assets. When you load the web application, the service worker ensures optimal performance and responsiveness.
