import React, { useEffect } from "react";
import { Navbar, AllKeys, SingleKey } from "./";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchKeysAsync } from "../features/keys/keysSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchKeysAsync());
  }, [dispatch]);

  return (
    <div id="main">
      <div className="column container">
        <div id="header">
          <h1>Dropdown Sounds</h1>
          <Navbar />
        </div>
      </div>
      <Routes>
        <Route path="/keys" element={<AllKeys />} />
        <Route path="/keys/:keyId/*" element={<SingleKey />} />
        <Route path="/" element={<AllKeys />} />
      </Routes>
    </div>
  );
};

export default App;
