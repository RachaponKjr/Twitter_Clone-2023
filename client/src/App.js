
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from './Layout/Layout';
import Home from './Pages/Home/Home';
import Signup from './Pages/Home/RightS/Signup/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}>
            <Route path='/signup' element={<Signup/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
