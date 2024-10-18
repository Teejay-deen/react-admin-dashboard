import { GlobalProvider } from "providers/Global";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<GlobalProvider /> }>
        <Route path="/"></Route>)
    </Route>
);
