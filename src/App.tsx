import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CarBooking from './pages/BookingPage';
import CarDetail from './pages/DetailPage';
import Home from './pages/HomePage';
import { Provider } from 'react-redux'
import {store} from './Store/redux/store'


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <Home />
            }
          />
          <Route
            path='/detail/:car/:id'
            element={
              <CarDetail />
            }
          />
          <Route
            path='/booking/:id'
            element={
              <CarBooking />
            }
          />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
