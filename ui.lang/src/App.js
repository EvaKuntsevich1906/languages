import './App.css';
import StartPage from './pages/StartPage/StartPage';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<StartPage></StartPage>}></Route>
      
      </Routes>

    </div>
  );
}

export default App;
