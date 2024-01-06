// Importing the necessary function from the react-dom library
import {
    createRoot
} from "react-dom/client"

import "./index.css"
// Importing the main App component from the "./App" file
import App from "./App"

// Getting the DOM element with the id "root"
const divContainer = document.getElementById("root")

// Creating a root for the React application using createRoot and associating it with the divContainer
const root = createRoot(divContainer)

// Rendering the main App component within the root
root.render(<App />)