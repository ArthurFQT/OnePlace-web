import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import { PomodoroScreen } from "../pages/PomodoroScreen";
import { History } from "../pages/History";
import NotFound from "../pages/NotFound";
import RequiredAuth from "./RequiredAuth";
import Login from "../pages/Login";
import Home from "../pages/Home";

const RoutesWrapper: React.FC = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route
      path="/"
      element={
        <RequiredAuth>
          <Layout>
            <Home />
          </Layout>
        </RequiredAuth>
      }
    />
    <Route
      path="/pomodoro"
      element={
        <RequiredAuth>
          <Layout>
            <PomodoroScreen />
          </Layout>
        </RequiredAuth>
      }
    />
    <Route
      path="/history"
      element={
        <Layout>
          <History />
        </Layout>
      }
    />
    <Route
      path="*"
      element={
        <RequiredAuth>
          <Layout>
            <NotFound />
          </Layout>
        </RequiredAuth>
      }
    />
  </Routes>
);

export default RoutesWrapper;
