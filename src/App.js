import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Forms from './Forms';
import Tables from './Tables';


function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path='/forms' element={<Forms/>}/>
        <Route path='/' element={<Tables/>}/>
      </Routes>
    </div>
  );
}

export default App;
