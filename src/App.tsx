import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./screens/RootLayout";

import MissionPage from "./screens/MissionPage";
import SessionsPage from "./screens/SessionsPage";
import DetailsPage from "./screens/DetailsPage";
import { Provider } from "react-redux";
import { store } from "./store/store";
import SessionLayout from "./screens/SessionLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "sessions",
        element: <SessionLayout />,
        children: [
          { index: true, element: <SessionsPage /> },
          { path: ":id", element: <DetailsPage /> },
        ],
      },
      {
        path: "mission",
        element: <MissionPage />,
      },
    ],
  },
]);

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
