import "./App.css";
import axios from 'axios'
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js"
import PhoneDetails from "./components/PhoneDetails.js"

function App() {
  const [phonesList, setPhonesList] = useState([])
  const [fetchingPhones, setFetchingPhones] = useState(true)
  const navigate = useNavigate()
  return (
    <div className="App">
      <Navbar phonesList={phonesList} />
      <div id="page">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/phone-details/:id" element={<PhoneDetails/>}/>
          {/* <Route path="/error" element={<Error/>}/>
          <Route path="/*" element={<NotFound/>}/> */}
          </Routes>
      </div>
    </div>
  );
}

export default App;
