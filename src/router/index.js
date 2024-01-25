import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layouts";
import Dashboard from "../views/dashboard";
import Table1 from "../views/table/table1";
import Table2 from "../views/table/table2";
import Page1 from "../views/page/page1";
import Page2 from "../views/page/page2";
import Smenu1 from "../views/page/Submenu/menu1";
import Smenu2 from "../views/page/Submenu/menu2";
import Bar from "../views/chart/bar";
import Pie from "../views/chart/pie";
import Line from "../views/chart/line";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: "/table",
        children: [
          {
            path: 'table1',
            element: <Table1 />
          },
          {
            path: 'table2',
            element: <Table2 />
          },
        ]
      },
      {
        path: '/page',
        children: [
          {
            path: 'page1',
            element: <Page1 />,
          },
          {
            path: 'page2',
            element: <Page2 />,
          },
          {
            path: 'submenu',
            children: [
              {
                path: 'smenu1',
                element: <Smenu1 />,
              },
              {
                path: 'smenu2',
                element: <Smenu2 />,
              },
            ]
          }
        ]
      },
      {
        path: '/chart',
        children: [
          {
            path: 'bar',
            element: <Bar />,
          },
          {
            path: 'pie',
            element: <Pie />,
          },
          {
            path: 'line',
            element: <Line />,
          },
        ]
      },
    ],
  },
])
