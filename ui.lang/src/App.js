import './App.css';
import StartPage from './pages/StartPage/StartPage';
import { Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage/RegisterPage';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<StartPage></StartPage>}></Route>
        <Route path='/reg' element={<RegisterPage></RegisterPage>}></Route>

      </Routes>

    </div>
  );
}

export default App;
