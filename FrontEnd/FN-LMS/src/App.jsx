import "./App.css";
import CustomRouter from "./Router/Router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <RouterProvider router={CustomRouter}/>
    </>
  );
}

export default App;
