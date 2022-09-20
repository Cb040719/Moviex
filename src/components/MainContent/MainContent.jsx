import MoviesList from "../MoviesList";
import {useState, useEffect} from "react";
import {GET} from "../../utils/api.js";
import styles from "./index.module.scss"

const MainContent = () => {

    const [moviesData_popular, setMoviesData_popular] = useState([]);

    useEffect(() => {
        GET("movie", "popular", "&language=en-US&page=1").then(data => setMoviesData_popular(data))
    }, []);
    
    return(
        <div className={styles.MainContent}>
            {/* {console.log(moviesData_popular)} */}
            <MoviesList content={moviesData_popular.results}/>
        </div>
    );
};

export default MainContent;