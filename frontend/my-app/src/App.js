import React from 'react';
import Additems from './components/additems';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/nav';
import Itemlist from './components/getItems';
import Footer from './components/footer';

function App() {
  return (
    <div >
       <BrowserRouter>
       <Nav/>
      <Routes>
        <Route>
        <Route path="/" element={<Itemlist />}></Route>
        <Route path="/add" element={<Additems/>}></Route>
 
        </Route>

        
        
      </Routes>
      </BrowserRouter>
       <Footer/>
    </div>
  )
}

export default App