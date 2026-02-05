import React from "react";

import { BrowserRouter as Router , Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Contact from './pages/contact.jsx'
import Navbar from "./components/Navbar/Navbar"



const App = () => {
  return (
  
   <Router>
<Navbar />
<Routes>
        <Route path="/" element={<Home />} / > 
        <Route path="/contact" element={<Contact />} / >
       
       
      </Routes>

   </Router>
     
  

 
   
  );
};

export default App;
