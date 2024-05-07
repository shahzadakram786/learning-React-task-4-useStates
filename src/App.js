// import logo from './logo.svg';
import React from "react";
import {RouterProvider} from "react-router-dom"
import "./App.css";
import router from "./routes/routes";
// import Home from "./pages/Home/Home";
// import Box from './components/Box/Box';

function App() {
  return (
    <> 

      <div className="App">
      <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
