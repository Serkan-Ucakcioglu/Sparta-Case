import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage";
import { lazy, Suspense } from "react";
import Loader from "../assets/Loader";

const Usoms = lazy(() => import("../Components/Usom/Usom"));

export const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route
        path="/usom"
        element={
          <Suspense fallback={<Loader />}>
            <Usoms />
          </Suspense>
        }
      />
    </Route>
  )
);
