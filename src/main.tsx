import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./tailwind.css";
import IndexPage from ".";
import {
  Link,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <nav className="flex flex-ro gap-4">
          <Link to="/">Main</Link>
          <Link to="/about">About</Link>
        </nav>
        <Outlet />
      </div>
    ),
    children: [
      { index: true, element: <IndexPage /> },
      { path: "about", element: <div>About</div> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
