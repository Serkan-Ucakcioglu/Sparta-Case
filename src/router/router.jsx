import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage";
import Usom from "../Components/Usom/Usom";

export const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="/usom" element={<Usom />} />
    </Route>
  )
);
