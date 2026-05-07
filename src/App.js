
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignInComponent from './components/SignInComponent';
import SignUpComponent from './components/SignUpComponent'
import AddProductComponent from './components/AddProductComponent';
import GetProductsComponent from './components/GetProductsComponent'
// import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import MakePaymentComponent from './components/MakePaymentComponent';
import Home from './components/Home';
import Explore from './components/Explore'
import AddToCartComponent from './components/AddToCartComponent';
import ArtBook from './components/ArtBook';
import ErasersComponent from './components/ErasersComponent';
import ReferenceArt from './components/ReferenceArt';
import PencilComponent from './components/PencilComponent';
import FeedBack from './components/FeedBack'
import AboutUs from './components/AboutUs'


function App() {
  return (
    <BrowserRouter>
      
      <div className="container-fluid">
        <div className="App">
          {/* <header className="App-header">
            <h1 className='text-warning'>Sketch Arts</h1>
          </header> */}
          <Routes>
            <Route path='/signin' element={<SignInComponent />} />
            <Route path='/signup' element={<SignUpComponent />} />
            <Route path='/addproduct' element={<AddProductComponent />} />
            <Route path='/makepayment' element={<MakePaymentComponent />} />
            <Route path='/getproducts' element={<GetProductsComponent />} />
            <Route path='/explore' element={<Explore/>}/>
            <Route path='/addtocart' element={<AddToCartComponent/>}/>
            <Route path='/artbooks' element={<ArtBook/>}/>
            <Route path='/erasers' element={<ErasersComponent/>}/>
            <Route path='/refartbks' element={<ReferenceArt/>}/>
            <Route path='/pencils' element={<PencilComponent/>}/>
            <Route path='/feedback' element={<FeedBack/>}/>
            <Route path='/aboutUs' element={<AboutUs/>}/>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;
