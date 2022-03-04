# Todo app

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [Links](#links)
- [My process](#my-process)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Continued development](#continued-development)
- [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

![screenshoot](https://i.postimg.cc/V6nYGm3L/your-todos-manager-netlify-app.png)

### Links

- [Solution URL](https://github.com/josesaulguerrero/to-do-manager)
- [Live site URL ](https://your-todos-manager.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Yarn](https://yarnpkg.com/) - Node package manager
- [Webpack](https://webpack.js.org/) - Module bundler
- [Babel](https://babeljs.io/) - JS code transpiler
- [React](https://reactjs.org/) - JS library
- [React Router Dom](https://reactrouter.com/docs/en/v6/getting-started/overview) - React Library to manage the routes of your App.
- [Styled Components](https://styled-components.com/) - For styles
- [Framer Motion](https://www.framer.com/docs/introduction/) - For drag-n-drop animations
- [Workbox](https://developers.google.com/web/tools/workbox/guides/get-started) - For managing the cache and service workers
- [Prettier](https://prettier.io/) - For code formatting

### What I learned

Building this project helped me learn to use and improve my knowledge of some React and JS tools, such as:

- Styled components and theming.
- Framer motion and drag-n-drop.
- React-router-dom and route management.
- Webpack setup and code optimization.
- Managing my service workers with Workbox.
- Setting up a code formatter.
- Setting up Babel to transpile my React and JS code.

### Continued development

- I used the components that Framer motion provides (`<Reorder.Group />` and `<Reorder.Item />`) to create a list with draggable items.

- Webpack helped me start a development environment with DevServer and create bundles of code which are optimized for a production environment.

- With Babel I could transpile my JavaScript code that uses new features into code that every browser can understand and run.

- To manage my service workers, I used Workbox, a set of libraries that google provides to help you covert your apps into PWAs that can be installed like a native app and work even when offline.

- I used styled components, an amazing CSS-in-JS library that lets you use all the JS features to easily write your style rules.

- React-router-dom is a React library that provides a set of components to help you create SPAs (single-plage applications) very easily.

- Implemented the `@media (hover: hover) {}` CSS media query, which is used to detect if the user's device has a cursor, to add hover transitions.

- Instead of using useState to handle my inputs' state, I used useRef because it won't re-render the whole component every time that the input's value change.

### Useful resources

- [Theming with styled components](https://styled-components.com/docs/advanced#theming) - This helped me understand how I could use styled components to easily toggle the app theme.

- [How to integrate Workbox in your React App](https://www.youtube.com/watch?v=uKNLaleXztc&list=PLD8nQCAhR3tTXYOhau-RTfZQ4uGvco7XQ&ab_channel=ImranSayed-CodeytekAcademy) - These videos were really helpful as they helped me integrate all the workbox libraries into my existing application.

- [An example of a drag-n-drop list using framer motion](https://codesandbox.io/s/framer-motion-5-drag-to-reorder-lists-forked-v5zip?file=/src/Item.tsx) - This is an example that I found in the documentation of framer motion

## Author

- Website - [Jose Saúl Guerrero Serrano](https://joseguerreroserrano.netlify.app/)
- Github - [@josesaulguerrero](https://github.com/josesaulguerrero)
