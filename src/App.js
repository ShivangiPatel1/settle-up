import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes,Route} from "react-router-dom"
import Groups from "./Pages/Groups/Groups";
import Home from "./Pages/Home/Home"
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path = "/new" element={<Groups/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
