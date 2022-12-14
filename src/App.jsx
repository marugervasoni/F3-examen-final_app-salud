import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import NotFound from "./Routes/NotFound";


function App() {
  return (
      <div className="App">
          <Navbar/>

          <Routes>
            <Route path="/" element={<Home/>}>
              {/* <Route path="*" element={<NotFound/>}/> */}
            </Route>
              <Route path="/dentist/:id" element={<Detail/>}/>
              <Route path="/contacto" element={<Contact/>}/>
              <Route path="/favs" element={<Favs/>}/>
          </Routes>
          
          <Footer/>
      </div>
  );
}

export default App;