import axios from "axios";
import { useState, useEffect } from "react";
import Pokemon from "./Pokemondex.jsx";
import styles from "./Pokeball.module.css";

const Pokeball = () => {
    const [pokemons, setPokemons] = useState([]);
    const fetchData = async () => {
        try {
            const {
                data: { results },
            } = await axios.get("https://pokeapi.co/api/v2/pokemon/");
            setPokemons(results);
            console.log(results);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <ul className={styles["pokemon-card-container"]}>
                {pokemons.map((pokemon) => {
                    return (
                        <li key={pokemon.name}>
                            <Pokemon
                                name={pokemon.name}
                                url={pokemon.url}
                                type={pokemon.types}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Pokeball;
