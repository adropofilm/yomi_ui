import { Outlet } from "react-router-dom";
import AppContainer from "@/components/AppContainer";
import { PATHS } from "@/utils/constants";
import Home from "@/components/Home";
import Quizzes from "@/components/Quizzes";
import Login from "@/components/Login";
import Register from "@/components/Register";

const Root = () => {
  return (
    <>
      <AppContainer />
      <Outlet />
    </>
  );
};

export const Routes = [
  {
    path: PATHS.HOME,
    element: <Root />,
    children: [
      { path: PATHS.HOME, element: <Home /> },
      { path: PATHS.QUIZZES, element: <Quizzes /> },
      { path: PATHS.LOGIN, element: <Login /> },
      { path: PATHS.REGISTER, element: <Register /> },
    ],
  },
];
