import styles from "./index.module.scss";

const MovieCard = ({cardData}) => {

    const API_IMG = "https://image.tmdb.org/t/p/w500"
    return(
        <div className={styles.MovieCard}>
            <h4>{cardData.title.toUpperCase()}</h4>
            <img src={API_IMG + cardData.poster_path} alt="movie_img" />
            <p>{cardData.overview}</p>
            <h4>Average score: {cardData.vote_average}</h4>
            <p>{cardData.vote_count} total votes</p>
        </div>
    );
}

export default MovieCard;



// adult: false
// backdrop_path: "/hYZ4a0JvPETdfgJJ9ZzyFufq8KQ.jpg"
// genre_ids: (3) [28, 18, 878]
// id: 629176
// original_language: "en"
// original_title: "Samaritan"
// overview: "Thirteen year old Sam Cleary  suspects that his mysteriously reclusive neighbor Mr. Smith is actually the legendary vigilante Samaritan, who was reported dead 20 years ago. With crime on the rise and the city on the brink of chaos, Sam makes it his mission to coax his neighbor out of hiding to save the city from ruin."
// popularity: 4504.642
// poster_path: "/vwq5iboxYoaSpOmEQrhq9tHicq7.jpg"
// release_date: "2022-08-25"
// title: "Samaritan"
// video: false
// vote_average: 7
// vote_count: 909