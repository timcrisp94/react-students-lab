import './App.css';
import { Route, Routes } from 'react-router-dom'
import Starships from './pages/Starships/Starships'

function App() {
  
  return (
    <>
      <h1>hi</h1>
      <Routes>
        <Route path='/starships' element={<Starships />} /> 
      </Routes>
    </>
  );
}

export default App;
