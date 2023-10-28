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


function App() {
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const location = useLocation();
   const [characters, setCharacters] = useState([])

   // const login = (userData) => {
   //    if(userData.password === PASSWORD && userData.email === EMAIL) {
   //       setAccess(true);
   //       navigate("/home");
   //    }
   // }

   const login = (userData) => {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`)
      .then(({ data }) => {
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      });
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);


   const onClose = (id) => {
      const charactersFiltered = characters?.filter(character => character.id !== id)
      setCharacters(charactersFiltered)
   }

   function onSearch(id) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      }).catch((error) => {
         window.alert(error)
      })
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
