import { createBrowserRouter, RouteObject } from "react-router-dom";
import Dashboard from "./views/Dashboard/Dashboard";
import ChatPage from "./views/chatpage/ChatPage";

export const routes = [
  { path: "/", element: <Dashboard /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/credit", element: <Dashboard /> },
  { path: "/payment", element: <Dashboard /> },
  { path: "/messages", element: <ChatPage /> },
] as RouteObject[];

export default createBrowserRouter(routes);
