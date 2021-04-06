# Easiest way to write a web component

Ever wanted to just write a web component? Ever wondered which tools to use? Look no further, well look at this presentation it might just help you out a bit.

## Full setup

The following instructions will set up a server as well as all of the development tasks needed to make edits.

1. Install [Node.js](http://nodejs.org/) (4.0.0 or later)

1. Clone the EasiestWayToWriteAWC repository

   ```sh
   $ git clone https://github.com/lucienimmink/EasiestWayToWriteAWC.git
   ```

1. Navigate to the EasiestWayToWriteAWC folder

   ```sh
   $ cd EasiestWayToWriteAWC
   ```

1. Install dependencies

   ```sh
   $ npm install
   ```

1. Serve the presentation and monitor source files for changes

   ```sh
   $ npm start
   ```

1. Open <http://localhost:8000> to view your presentation

   You can change the port by using `npm start -- --port=8001`.

## Folder Structure

- **css/** Core styles without which the project does not function
- **js/** Like above but for JavaScript
- **plugin/** Components that have been developed as extensions to reveal.js
- **lib/** All other third party assets (JavaScript, CSS, fonts)

## Fullscreen mode

Just press »F« on your keyboard to show your presentation in fullscreen mode. Press the »ESC« key to exit fullscreen mode.

## License

MIT licensed

Copyright (C) 2021 Lucien Immink, [ISAAC](https://www.isaac.nl)
