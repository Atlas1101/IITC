import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Pokemondex.module.css";

const Pokemon = ({ name, url }) => {
  const [pokemon, setPokemon] = useState(null);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(url);
      setPokemon(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const poketyp = (type) => {
  //   if (type === 'fire') {
  //     return styles.fire
  //   }
  // }

  let pokeTypes= []
  if (pokemon) {
    
     pokeTypes = pokemon.types.map(({type}) => {
      return type.name
    })
    console.log(pokeTypes.join('-'))
    console.log(pokemon.sprites.versions['generation-v']['black-white']['animated'].front_default);
    
  }


  
  return (
    pokemon && (
      <div className={styles.card}>
        <div className={`top-section ${styles[pokeTypes.join('-')]}`}>
          <div>
            <img src={pokemon.sprites.versions['generation-v']['black-white']['animated'].front_default} alt="" />
          </div>
          <h1>{name}</h1>
           <ul>
          {pokemon.types.map(({ type }) => (
            <li key={type.name}>{type.name}</li>
          ))}
        </ul>
        </div>
        <div className={styles['card-bottom']}> 
        <div>Height:{pokemon.height}</div>
        <div>Weight:{pokemon.weight}</div>
       
        <div>
          <h2>Abilties</h2>
          <ul>
            {pokemon.abilities.map(({ ability }) => (
              <li key={ability.name}>{ability.name}</li>
            ))}
          </ul>
        </div>
        </div>
      </div>
    )
  );
};

export default Pokemon;
