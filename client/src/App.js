//Routes
import { BrowserRouter, Routes, Route } from 'react-router-dom';


//Pages
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';


//styles
import "./stylesheets/alignment.css"
import "./stylesheets/theme.css"
import "./stylesheets/size.css"
import "./stylesheets/custom.css"
import "./stylesheets/form-elements.css"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
