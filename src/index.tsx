import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, Navigate } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import type { History } from "history";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
//
import "antd/dist/antd";
import "./assets/scss/styles.scss";
//
import HomeTemplate from "./templates/Home/HomeTemplate";
import Test from "./pages/Test/Test";
import Index from "./pages/Index/Index";

export const history: History | any = createBrowserHistory({
  window,
});
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<Index />}></Route>
          <Route path="/index" element={<Index />}></Route>
          <Route path="/test" element={<Test />}></Route>
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HistoryRouter>
  </Provider>
);

/* --new routing setup--
const router = createBrowserRouter([
  {
    path: "",
    element: <HomeTemplate />,
    children: [
      {
        path: "",
        element: <Index />,
      },
      {
        path: "/test",
        element: <Test />,
      },
    ],
  },
  {
    //Routing to homepage at 404 pages
    path: "*",
    element: <Navigate to={""} />,
  },
]);
root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
*/
