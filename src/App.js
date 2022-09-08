import { useEffect, useState } from 'react';

import Header from './Component/Header';
import NavBar from './Component/NavBar'
import Gallery from './Component/Gallery';
import './App.css';
import InfoView from './Component/InfoView';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';


function App() {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [gotcha, setGotcha] = useState("https://pokeapi.co/api/v2/pokemon/132")
  const [emall, setEmall] = useState("https://pokeapi.co/api/v2/pokemon-species/132")
  const [twenty, setTwenty] = useState("https://pokeapi.co/api/v2/pokemon/")
  const [pokemon, setPokemon] = useState([])
  const [pokeBall, setPokeBall] = useState([])
  const [species, setSpecies] = useState([])

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const twenty = await fetch(twenty)
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setPokemon(result);
  //       }
  //     ).catch(
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       })
  //     const gotcha = await fetch(gotcha)
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setPokeBall(result);
  //         setEmall(result.species.url)
  //       }
  //     ).catch(
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       })
  //     const emall = await fetch(emall)
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setSpecies(result);
  //       }
  //     ).catch(
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       })
  //     const resTwenty = await twenty.json()
  //     const resGotcha = await gotcha.json()
  //     const resEmall = await emall.json()
  //     setPokemon(resTwenty)
  //     setPokeBall(resGotcha)
  //     setEmall(resEmall)
  //     setSpecies(emall)
  //   }
  //   fetchData()
  // }, [twenty, gotcha, emall])

  useEffect(() => {
    fetch(twenty)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPokemon(result);
        }
      ).catch(
        (error) => {
          setIsLoaded(false);
          setError(error);
        })
  }, [twenty])

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(gotcha)
  //       .then(res => res.json())
  //       .then(
  //         (result) => {
  //           setIsLoaded(true);
  //           setPokeBall(result);
  //           setEmall(result.species.url)
  //         }
  //       ).catch(
  //         (error) => {
  //           setIsLoaded(true);
  //           setError(error);
  //         })
  //     const resData = await response.json()
  //     console.log("where are we", resData)
  //   }
  //   fetchData()

  // }, [gotcha])

  useEffect(() => {
    fetch(gotcha)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPokeBall(result);
          setEmall(result.species.url)
        }
      ).catch(
        (error) => {
          setIsLoaded(false);
          setError(error);
        })
  }, [gotcha])  


useEffect(() => {
  fetch(emall)
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setSpecies(result);
      }
    ).catch(
      (error) => {
        setIsLoaded(false);
        setError(error);
      })
}, [emall])

if (error) {
  return <div>Error: {error.message}</div>;
} else if (!isLoaded) {
  return <div className='App'><h1>Loading...</h1></div>;
} else {
  return (
    <Container>
      {/* {console.log(pokemon, "first data request, APP")} */}
      <Header />
      <Row className="justify-content-md-center">
        <Col>
          <InfoView pokeBall={pokeBall} species={species} />
        </Col>
        <Col className='gallery'>
          <Gallery pokemon={pokemon.results} setGotcha={setGotcha} />
        </Col>
      </Row>

      <NavBar next={pokemon.next} previous={pokemon.previous} index={setTwenty} />
    </Container>
  );
}
}

export default App;
