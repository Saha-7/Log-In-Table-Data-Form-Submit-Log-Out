import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Form from './components/Form';

const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route
          path="*"
          element={

            <>
              <Navbar />
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/form" element={<Form />} />
              </Routes>
            </>

          }
        />

      </Routes>
    </Router>
  )
}

export default App