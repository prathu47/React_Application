import Navbar from "./Components/Navbar";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Carousel from "./Components/Carousel";
import Home from "./Components/Home";
import Home1 from "./Components/Home1";
import Home2 from "./Components/home2";
import Customform from "./Components/Customform";
import "./App.css"
function App() {
  return (
    <div style={{padding:"20px"}} >
      <Navbar/>
      <Carousel/>
      <Home/>
      <Home1/>
      <Home2/>
      <Customform/>
      
    </div>
  );
}

export default App;
