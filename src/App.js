import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReserveTable from './components/ReserveTable';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/reserve-table' element={<ReserveTable />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
