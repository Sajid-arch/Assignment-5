# Development Stack Builder

This is a React application to explore technologies and for building a personalized development stack using certain conditions.

## Features

- Browse available technologies
- Add technologies to your stack
- Prevent duplicate technologies
- Remove individual technologies
- Remove all selected technologies

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- React Icons
- React Toastify
- Vite

i. Answer: JSX is a syntax extension for JavaScript that allows writing HTML directly inside JavaScript/React code.
  It makes component structures clear and readable.

ii. Answer: Props are immutable Read-Only input passed through components on the contrary State is mutable and it manages internal data.

iii. Answer: useState() Hook is a React Hook that adds state management to functional components. It returns an array containing the current state value and a function to modify that value, triggering a component re-render when changed. I have used useState() Hook in my project to filter out technologies that are selected.

iv. Answer: useEffect() Hook allows functional components to perform fetching data, updating the DOM directly, or setting up subscriptions after rendering.

v. Answer: React uses keys to identify which items in a list have changed.

vi. Answer: Conditional rendering in React allows rendering different elements using conditions or state states. I have used it show render elements inside selected technology div.

vii. Answer: Data is passed down from parent to child directly via props.
The parent passes a callback function as a prop to the child. When an event happens inside the child, it executes that callback function and passes the updated data back as an argument.
