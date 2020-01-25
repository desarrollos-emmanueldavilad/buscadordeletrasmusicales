import React, {
  useState,
  useEffect,
  Fragment
} from 'react';
import Formulario from './components/formulario';
import axios from 'axios';
import Cancion from './components/cancion';
import Informacion from './components/informacion';
const App = () => {

  // ustilizar useState con 3 states

  const [artista, agregarArtista] = useState('');
  const [letra, agregarLetra] = useState([]);
  const [info, agregarInfo] = useState({});


  //metodo para consultar api

  const consutarAPILetra = async (busqueda) => {
    const {
      artista,
      cancion
    } = busqueda;
    const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

    //consultar api

    const resultado = await axios(url);
    //almacenar letra en el state

    agregarArtista(artista);

    agregarLetra(resultado.data.lyrics);
  }

  //metodo para api de info

  const consultarApiInfo = async () => {

    if (artista) {
      const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
      //almacenar artista
      const resultado = await axios(url);


      agregarInfo(resultado.data.artists[0]);
      console.log(info);
    }


  }

  useEffect(
    () => {
      consultarApiInfo();
    }, [artista]
  )

  return ( <
    Fragment >
    <
    Formulario consutarAPILetra = {
      consutarAPILetra
    }
    />

    <
    div className = "container mt-5" >
    <
    div className = "row" >
    <
    div className = "col-md-6" >
    <
    Informacion info = {
      info
    }
    /> <
    /div> <
    div className = "col-md-6" >
    <
    Cancion letra = {
      letra
    }
    /> <
    /div> <
    /div> <
    /div> <
    /Fragment>
  );
}

export default App;