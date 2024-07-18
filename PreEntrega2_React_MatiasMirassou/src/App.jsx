import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
    const [cartCount] = useState(5);

    return (
        <BrowserRouter>
            <NavBar cartCount={cartCount}/>

            <Routes>
            <Route exact path='/' element={<ItemListContainer greetings={"Welcome to our store!"} />}/>
            <Route exact path='/category/:category'  element={<ItemListContainer />}/>

            <Route exact path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='*' element={<h1>404 Not Found</h1>} />
            </Routes>

            <Footer />

            
        </BrowserRouter>
    );
}


export default App;