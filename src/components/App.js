import React, { useEffect } from "react";
import { Navbar, AllChords, AllKeys, SingleChord, SingleKey } from "./";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchKeysAsync } from "../features/keys/keysSlice";
import { fetchChordsAsync } from "../features/chords/chordsSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchKeysAsync());
    dispatch(fetchChordsAsync());
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
        <Route path="/chords" element={<AllChords />} />
        <Route path="/keys" element={<AllKeys />} />
        <Route path="/chords/:chordId/*" element={<SingleChord />} />
        <Route path="/keys/:keyId/*" element={<SingleKey />} />
        <Route path="/" element={<AllChords />} />
      </Routes>
    </div>
  );
};

export default App;
