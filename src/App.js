import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

const EMAIL = "Gcortes@gmail.com"
const PASSWORD = "123asd"

function App() {
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const location = useLocation();
   const [characters, setCharacters] = useState([])

   const login = (userData) => {
      if(userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate("/home");
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);

   const onClose= (id) => {
      const charactersFiltered = characters.filter(characters => characters.id !== Number(id))
      setCharacters(charactersFiltered)
   }


   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   return (
      <div className='App'>
         {
            location.pathname !== "/"
            ? <Nav onSearch={onSearch}  setAccess={setAccess}/>
            : null
         }
         

         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
                  
            <Route path='/about' element={ <About />} />

            <Route path='/detail/:id' element={<Detail/>}/>

            <Route path='/' element={<Form login={login}/>}/>

            <Route path="/favorites" element={<Favorites />}/>

         </Routes>
      </div>
   );
}

export default App;
