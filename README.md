# <p align="center">🕹️[Stardew Friends](https://stardew-friends.vercel.app/)🎮</p>
<p align="center" style="color: gold">⬆ Click the header to visit the site ⬆</a>

<p align="center">There are so many friends to be made and so many details to recall! This app helps Stardew Valley players quickly reference details about friendable NPCs and track friendships with them.</p>

## Preview
<div align="center">
  <img src=".github/StardewFriends Demo.gif" alt="app demo">

</div>
<p align="center">Technologies Used</p>
<div align="center">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=for-the-badge" alt="typescript badge">
  <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=for-the-badge" alt="html badge">
  <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff&style=for-the-badge" alt="css badge">
  <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=for-the-badge" alt="react badge">
  <img src="https://img.shields.io/badge/React%20Router-CA4245?logo=reactrouter&logoColor=fff&style=for-the-badge" alt="react router badge">
  <img src="https://img.shields.io/badge/Cypress-69D3A7?logo=cypress&logoColor=fff&style=for-the-badge" alt="cypress badge">
  <img src="https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=for-the-badge" alt="express badge">
  <img src="https://img.shields.io/badge/Lighthouse-F44B21?logo=lighthouse&logoColor=fff&style=for-the-badge" alt="lighthouse badge">
  <img src="https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=fff&style=for-the-badge" alt="vercel badge">
</div>

## Installation Instructions
  Note: the front-end and back-end are both deployed, so installation is not needed to use the web app. FE installation is required for running tests.

### FE Installation Instructions:
- Run the following on command line to clone the repo and run the app locally:
    ```
    git clone git@github.com:tednaphil/stardew-friends.git
    cd stardew-friends
    npm install
    npm start
    ```
### BE Installation Instructions:
- Link to [BE repo](https://github.com/tednaphil/ruby-stardew-api)
- Deployed API link `https://ruby-stardew-api.onrender.com`
- Run the following on the command line to clone the repo and navigate into the project directory
    ```
    git clone https://github.com/tednaphil/ruby-stardew-api.git
    cd ruby-stardew-api
    ```
- Install gems
    ```
    bundle install
    ```
- Setup the database
    ```
    rails db:{drop,create,migrate}
    ```
- Start the server locally - server will run at `http://localhost:3000`
    ```
    rails server
    ```

> - To stop the server, use `Ctrl` + `C` in the open terminal

### Run Tests:
- Ensure you're running the app locally (see FE Installation Instructions above)
- Run the following on command line to open Cypress: `npm run cypress`
- Click `E2E Testing`, then `Start E2E Testing` in desired browser
- Select `App_spec` to run user story tests
- Select `Error_spec` to run error handling tests

## Context
- ~ 20 hours spent on BE, FE, and testing collectively during a 1 week sprint
- App built during second week of self-teaching Typescript
- See wireframe [here](https://github.com/tednaphil/stardew-friends/blob/main/StardewFriends%20Wireframe.png)
- Goals
  ```
  - Thorough testing of user-stories with intercepted network requests
  - Responsive design across mobile, tablet, and desktop devices
  ```
- Wins
  ```
  - Automatic deployments for UI (Vercel) and API (Render)
  - Addition of two features beyond the MVP (search and frienship level incrementer)
  ```
- Challenges
  ```
  - Making first Express app a consumable API - researching CORS allowed for succesful use!
  - Increased loading time after API spins down due to inactivity
  ```
- Next Steps
  ```
  - User Login
  - Informational component explaining Stardew Valley Friendship building
  ```
