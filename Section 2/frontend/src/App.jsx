import React from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import "./App.css";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import EventHandling from "./components/EventHandling";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StateManagement from "./components/StateManagement";
import Todo from "./components/Todo";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";
import { SnackbarProvider } from "notistack";
import ManageUser from "./components/ManageUser";

const App = () => {
  return (
    <div>
      <Toaster position="top-right" />
      <BrowserRouter>
        <SnackbarProvider>
        <AnimatePresence>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/eventhandling" element={<EventHandling />} />
          <Route path="/state" element={<StateManagement />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/manageuser" element={<ManageUser />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
        </AnimatePresence>
        </SnackbarProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;

// Contact