
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignInComponent from './components/SignInComponent';
import SignUpComponent from './components/SignUpComponents';
import AddProductComponent from './components/AddProductComponent';
import GetProductComponent from './components/GetProductComponent';
import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import MakePaymentComponent from './components/MakePaymentComponent';

function App() {
  return (
    <BrowserRouter>
      
      <div className="container-fluid">
        <div className="App">
          <header className="App-header">
            <h1 className='text-warning'>Sketch Arts</h1>
          </header>
          <Routes>
            <Route path='/signin' element={<SignInComponent />} />
            <Route path='/signup' element={<SignUpComponent />} />
            <Route path='/addproduct' element={<AddProductComponent />} />
            <Route path='/makepayment' element={<MakePaymentComponent />} />
            <Route path='/' element={<GetProductComponent />} />
          </Routes>
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;
