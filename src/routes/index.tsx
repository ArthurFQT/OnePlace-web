import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import RequiredAuth from './RequiredAuth';

const RoutesWrapper: React.FC = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Layout>
          <Home />
        </Layout>
      }
    />
    <Route
      path="/login"
      element={<Login />}
    />
    <Route
      path="/dashboard"
      element={
        <RequiredAuth>
          <Layout>
            <Dashboard />
          </Layout>
        </RequiredAuth>
      }
    />
    <Route
      path="/profile"
      element={
        <RequiredAuth>
          <Layout>
            <Profile />
          </Layout>
        </RequiredAuth>
      }
    />
  </Routes>
);

export default RoutesWrapper;
