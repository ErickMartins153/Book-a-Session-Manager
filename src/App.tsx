import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./screens/RootLayout";
import HomePage from "./screens/HomePage";
import MissionPage from "./screens/MissionPage";
import SessionsPage from "./screens/SessionsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "mission",
        element: <MissionPage />,
      },
      {
        path: "sessions",
        element: <SessionsPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
