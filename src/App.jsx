import "./assets/css/App.css";
import MainContent from "./components/MainContent/MainContent";
import Home from "./components/Home/Home";
import About from "./components/About/About";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./components/Root/Root";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<MainContent />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Route>
    </>
  ),
  { basename: import.meta.env.BASE_URL }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
