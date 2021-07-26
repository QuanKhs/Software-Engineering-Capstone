import Header from "../components/header";
import HomePage from "../features/homePage";
import { Routes, RoutesBlook } from "../constans/router";
import { Switch, Route, Redirect } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const { isLogin } = useSelector((state) => state.auth);
  const listPage = () => {
    if (isLogin) {
      if (RoutesBlook) {
        console.log(RoutesBlook);
        const result = RoutesBlook.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          );
        });
        return <Switch>{result}</Switch>;
      } else return;
    } else {
      if (Routes) {
        const result = Routes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          );
        });
        return <Switch>{result}</Switch>;
      } else return;
    }
  };

  return (
    <>
      {isLogin ? <Redirect to="/" /> : <Redirect to="/login" />}
      {listPage()}
    </>
  );
}

export default App;
