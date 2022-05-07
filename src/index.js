import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import "./index.css"

const container = document.getElementById("root")

const root = ReactDOMClient.createRoot(container)

root.render(<App />)

// TO UPDATE WRITE THIS
//git init
// git commit -m "react-create-app on Heroku"
// git push heroku master