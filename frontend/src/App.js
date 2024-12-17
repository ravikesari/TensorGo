import React, { useState } from "react";
import Login from "./components/login";
import FeedbackForm from "./components/feedbackForm";
import FeedbackHistory from "./components/feedbackHistory";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const myAppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/login" replace />
    },
    {
      path: "/login",
      element: <Login onLoginSuccess={handleLoginSuccess} />
    },
    {
      path: "/feedbackform",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <FeedbackForm />
        </ProtectedRoute>
      )
    },
    {
      path: "/feedbackhistory",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <FeedbackHistory/>
        </ProtectedRoute>
      )
    }
  ]);

  return <RouterProvider router={myAppRouter} />;
};

export default App;
