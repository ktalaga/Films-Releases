import React from 'react';

const Movie = ({name, url}) => {
    


    return(
        <div>
            <a href={url}>{name}</a>
        </div>
    );
}

export default Movie;