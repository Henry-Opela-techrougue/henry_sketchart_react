import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUpComponent from './components/SignUpComponent';
import "bootstrap/dist/css/bootstrap.min.css"
//import "bootstrap/dist/js/bootstrap.min.js"
import SignInComponent from './components/SignInComponent';
import GetProductsComponent from './components/GetProductsComponent';
import MakePaymentComponent from './components/MakePaymentComponent'
import AddProductComponent from './components/AddProductComponent'
import Home from './components/Home';
import ErasersComponent from './components/ErasersComponent';
import ArtBook from './components/ArtBook';
import PencilComponent from './components/PencilComponent';
import ReferenceArt from './components/ReferenceArt';
import AboutUs from './components/AboutUs';
import FeedBack from './components/FeedBack';
import Entry from './components/Entry';



function App() {
  return (


    <BrowserRouter>
      <div className="container-fluid justify-content-center">
        <div className="App">
          {/* <header className="App-header">
            <img src={satoru} className="App-logo" alt="logo" />
            <h1 className='text-warning'>SKETCHARTS</h1>
          </header> */}
          
          
          <Routes>
            <Route path='/signup' element={<SignUpComponent />} />
            <Route path='/signin' element={<SignInComponent />} />
            <Route path='/makepayment' element={<MakePaymentComponent />} />
            <Route path='/addproduct' element={<AddProductComponent />} />
            <Route path='/getproducts' element={<GetProductsComponent />} />
            <Route path='/artbooks' element={<ArtBook/>}/>
            <Route path='/pencils' element={<PencilComponent/>}/>
            <Route path='/refartbks' element={<ReferenceArt/>}/>
            <Route path='/erasers' element={<ErasersComponent/>}/>
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path='/feedback' element={<FeedBack/>}/>
            <Route path='/home' element={<Home />} />
            <Route path='/' element={<Entry/>}/>
          </Routes>
          
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
