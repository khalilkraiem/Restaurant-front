import { BrowserRouter, Routes, Route, useHistory } from "react-router-dom";

import Home from "../views/Home";
import About from "../views/About";
import Menu from "../views/Menu";
import Gallery from "../views/Gallery";
import Contact from "../views/Contact";
import Reservation from "../views/Reservation";
import Main from "../apps/Main";


function Router() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />    
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="reservation" element={<Reservation />} />
        </Route>
      
      </Routes>
    </BrowserRouter>
  );
}


export default Router;