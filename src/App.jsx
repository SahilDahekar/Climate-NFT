import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nft from "./pages/Nft";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/nft" element={<Nft/>}/>
      </Routes>    
    </>
  )
}

export default App;
