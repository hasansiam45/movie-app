import React from 'react'
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import './MovieCard.scss';

const MovieCard = ({data}) => {

    // const navigate = useNavigate();

    const handleClick = (id) => {
        // console.log(id);
        // navigate(`movies/${id}`);
        
    }

    return (
        <Link to={`/movies/${data.imdbID}`}>
        <div className="card-item" onClick={()=> handleClick(data.imdbID)}>
            <div className="card-inner">
                <div className="card-top">
                    <img src={data.Poster} alt={data.Title} />
                </div>
                <div className="card-bottom">
                    <div className="card-info">
                        <h4>{data.Title}</h4>
                        <p>{data.Year}</p>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default MovieCard
