import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CarBooking from './pages/BookingPage';
import CarDetail from './pages/DetailPage';
import Home from './pages/HomePage';
import { Provider } from 'react-redux'
import { store } from './Store/redux/store'
import About from './pages/About';
import { QueryClient, QueryClientProvider } from 'react-query'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import ContactPage from './pages/ContactPage';


const queryClient = new QueryClient()

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Navbar />
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
            <Route
              path='/about'
              element={
                <About />
              }
            />
            <Route
              path='/contact'
              element={
                <ContactPage/>
              }
            />
          </Routes>
          <Footer />
        </Router>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
