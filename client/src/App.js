
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from './Layout/Layout';
import Home from './Pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
