import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Result from './pages/Result';
import Buycredit from './pages/Buycredit';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/result" element={<Result/>}/>
      <Route path="/buy" element={<Buycredit />} />
      
    </Routes>
  );
}

export default App;
