import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Layout from './components/Layout/Layout';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Layout ><Home /></Layout>} />
        <Route exact path="/home" element={<Layout ><Home /></Layout>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
function NotFound() {
  return (
    <div>Not Found</div>);


}



export default App;
