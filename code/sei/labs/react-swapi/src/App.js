import './App.css';
import { Route, Routes } from 'react-router-dom'
import StarshipList from './pages/StarshipList/StarshipList'
import StarshipPage from './components/StarshipPage/StarshipPage'
function App() {
  
  return (
    <>
      <h1>hi</h1>
      <a href="/starships">Starship List</a>
      <Routes>
        <Route path='/starships' element={<StarshipList />} />
        <Route path='/starship' element={<StarshipPage />} />
      </Routes>
    </>
  );
}

export default App;
