import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
// import Travel from "./Components/Travel";
// import Introduction from "./Components/introduction";
// import DestinationDetail from "./Components/destinationdetails";
import Grid from "./components/Grid";
import London from "./components/London";
import Secondpage from "./components/Secondpage";
import Form from "./components/Form";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/secondpage" element={<Secondpage />} />
        <Route path="/grid" element={<Grid />} />
        <Route path="/form" element={<Form />} />
        <Route path="/London" element={<London />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    
  );
  
}

export default App;