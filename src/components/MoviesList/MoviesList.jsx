import MovieCard from "../MovieCard";
import styles from "./index.module.scss";

const MoviesList = ({ content }) => {

    return(

        <div className={styles.MoviesList}>
            {content?.map(movie => <MovieCard cardData={movie} key={movie.id}/>)}
        </div>
    );
};

export default MoviesList;