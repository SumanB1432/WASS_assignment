import React from 'react';
import Additems from './components/additems';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/nav';
import Itemlist from './components/getItems';

function App() {
  return (
    <div >
       <BrowserRouter>
       <Nav/>
      <Routes>
        <Route>
        <Route path="/" element={<Itemlist />}></Route>
        <Route path="/add" element={<Additems/>}></Route>
        {/* <Route path="/update/:id" element={<UpdateProduct/>}></Route> */}
        {/* <Route path="/logout" element={<h1>logout component</h1>}></Route> */}
        {/* <Route path="/profile" element={<Profile/>}></Route> */}
        </Route>

        
        
      </Routes>
      </BrowserRouter>
      {/* // <Footer/> */}
    </div>
  )
}

export default App