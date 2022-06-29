import ShowCountry from "./components/ShowCountry/ShowCountry";
import { Routes,Route} from 'react-router-dom';
import CountryDetails from "./components/countryDetails/CountryDetails";

function App() {
  
  return (
    <div >
       
       
       <Routes>
          <Route  exact path="/" element={<ShowCountry /> } />
          <Route  path="/country/:countyName" element={<CountryDetails />} />
       </Routes>
       
    </div>
  );
}

export default App;
