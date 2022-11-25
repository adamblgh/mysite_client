import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Routes,Route} from 'react-router-dom';
import {Home} from './components/Home'
import {About} from './components/About'
import {Contact} from './components/Contact'
import {Products} from './components/Products'
import {Product} from './components/Product'
import {MyNavbar} from './components/MyNavbar'
import {Login} from './components/Login'
import {Register} from './components/Register'
import {QueryClient,QueryClientProvider} from 'react-query';
import { useState } from 'react';

const queryClient = new QueryClient()

function App() {
  const [loggedInUser,setLoggedInUser] = useState('')
  return (
    <QueryClientProvider client={queryClient}>
      <MyNavbar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
      <div className="holder d-flex justify-content-center">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="products/:id" element={<Product/>}/>
        <Route path="login" element={<Login setLoggedInUser={setLoggedInUser}/>}/>
        <Route path="register" element={<Register/>}/>
      </Routes>
    </div>  
    </QueryClientProvider>
  );
}

export default App;
