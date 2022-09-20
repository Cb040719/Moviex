import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import {GET} from "../../utils/api.js"

const MainSidebar = ({sWidth}) => {
    
    const [moviesData_genres, setMoviesData_genres] = useState([]);
    
    useEffect(() => {
        GET("genre", "movie/list", "&language=en-US&page=1").then(data => setMoviesData_genres(data))        
    } , []);

    const genres = moviesData_genres.genres;
    
    return(
        
        <div className={styles.MainSidebar} style = {{width: sWidth}}>

            <h2>Genres</h2>
            <ul>
                {genres?.map(genre => <li key={genre.id}>{genre.name}</li>)}
            </ul>
        </div>
    );
}

export default MainSidebar;