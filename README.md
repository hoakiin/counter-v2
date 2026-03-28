# React Counter with Set Mode
A customizable counter built with React and Redux Toolkit. 
Supports setting min/max values, input validation, and displays error messages.

## Features
- Increment and reset counter
- Set min and max values dynamically
- Input validation with error messages
- `Set` button disabled on invalid input
- State management using Redux Toolkit slice
- Local storage persistence for min/max values

## Tech Stack
- React (functional components, hooks)
- Redux Toolkit (slice, actions, selectors)
- TypeScript
- CSS modules / basic styling

- ## Logic
- Local component state is used in the `SetCounter` component for user input.
- Redux slice stores the finalized counter state and validation flags (`isSetMode` and `error`).
- Error messages are displayed for invalid input, and the "Set" button is disabled until corrected.
- Counter values persist in localStorage.
