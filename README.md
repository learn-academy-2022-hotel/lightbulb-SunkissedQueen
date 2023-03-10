# 💡 Challenge: Lightbulb

As a developer, you are tasked with creating a light switch application. The application will display an image of a lightbulb and its corresponding switch. When the user clicks the switch the images will toggle between a light switch and corresponding bulb that are "off" and a light switch and corresponding bulb that are "on".

### ▶️ Getting Started

- clone repository to your desktop
- cd into the repository
- add dependencies $ `yarn`
- fire up the server $ `yarn start`
- stops the server `control + c`
- opens a new terminal tab `control + t`
- read up on [importing and displaying images in a React component](https://bobbyhadz.com/blog/react-import-image)

### 📚 User Stories

As a developer, it is important to break a problem down into small, manageable steps. Often this will include creating code that will eventually be replaced by different code as your application grows and your logic evolves.

When creating an application it is important to think about the organization of your code. It is best practice to compartmentalize all the actions in your code by separating logic and display components. `App.js` should be in control of all the top level logic, rendering other components, and passing data to other components.

**Branch**: setup-on-off

- basic functional component
```javascript
    import React from "react"

    const App = () => {
      return (
        <>
          <h1>Turn on the Christmas lights!</h1>
        </>
      )
    }

    export default App
```

- As a user, I can see a square box on the screen with a black border and a white background.
  - already provided

- As a user, every time I click on the box the word toggles between the word "off" and the word "on."
  <!-- lightsOn function -->
  - create function named lightsOn  
  - no input
  - use set function to change value of state variable `lightSwitchStatus` to "on"
  - place a button `ON` outside of box to perform function call
  <!-- lightsOff function -->
  - create function named lightsOff 
  - no input
  - use set function to change value of state variable `lightSwitchStatus` to "off"
  - place a button `OFF` outside of box to perform function call

- As a user, when I see the word "off" the background color of the box is white.
  - add state variable to store boolean value for whether or not switch was on
  - add styling attribute to the lightbulb using ternary operator to change background color to yellow for a true condition and white if false condition

- As a user, when I see the word "on" the background color of the box is yellow.
  - covered by previous code
  
- As a user, I can see many boxes on the page all acting independently of one another.
  - adding component calls did not allow independent interaction
  - add state variable `extraLight` to store an empty array
  - <!-- addLight function -->
  - create function named addLight 
    - input: array
    - use set function to change value of state variable `extraLight` 
    - by copying the value of current state with spread operator 
    - then adding a number dynamically by creating a calculation to add 1 to the amount of values currently in the array 
    - using the .length built-in method to evaluate the amount of values in the array
    - return an array with one more value than the previous array
  - place a button `More lights` outside of box to perform function call
    - iterate across the array using high order function `.map()` to evaluate each value in the array
    - each value will be represented by a component call
  - <!-- removeLight function -->
  - create function named removeLight 
  - input: array
  - use set function to change value of state variable `extraLight` 
    - by removing the last value in the array using the slice built-in method 
    - the indices used will be provided from the current state of the array
    - The 0th index is the first value and the last index will be provided dynamically by subtracting 1 from the current amount of values.
    - return an array with one less value than the previous array
  - place a button `Less lights` outside of box to perform function call

  - Lights were not acting independently. Had to place logic on same file as the nested components.

**Branch**: add-images

- As a user, instead of seeing a box I can see a picture of a light switch in the "off" position.
  - images are already provided on src/assets
  - choose some different images for the lightbulbs
  - used ternary operator on source attribute of image tag got light switch and light bulb
  
- As a user, when I click on the light switch it turns "on".
- As a user, when the light switch is "off" I see a white light bulb.
- As a user, when I turn the switch "on" I see a yellow light bulb.

### 🏔 Stretch Goals

**Branch**: additional-switches

- As a user, I can start with no light bulbs or switches on the screen.
  - covered by previous code
- As a user, I can see a button to add a light bulb and corresponding switch.
  - covered by previous code
- As a user, I can see a button to remove a light bulb and corresponding switch.
  - covered by previous code

- As a user, every time I click the add button, I can add an additional light bulb and corresponding switch that acts independently of the other light bulbs and corresponding switches.
  - images are stacking on top of each other
  - added column
  - https://www.w3schools.com/howto/howto_js_image_grid.asp
  - https://stackabuse.com/resizing-images-with-react/
  - https://www.javatpoint.com/how-to-center-a-button-in-css
  - https://www.w3schools.com/cssref/css3_pr_box-shadow.php

- As a user, every time I click the remove button, I can remove the last light bulb and corresponding switch in the series.

### 🗂 Assets

It is a best practice to keep all images in folder called assets. The assets folder will be inside the `src` folder. The images below can be used for the application or you can find your own images to add to the assets folder.

- [Switch On](./assets/switchOn.png)
- [Switch Off](./assets/switchOff.png)
- [Light On](./assets/lightOn.png)
- [Light Off](./assets/lightOff.png)
