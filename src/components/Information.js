import React from 'react';

function Information({ information }) {
    if(Object.keys(information).length === 0) return null
    return (
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Información del artista
    </div>
            <div className="card-body">
                <img src={information.strArtistThumb} alt="imagen artista" />
                <p className="card-text">Género: {information.strGenre}</p>
                <h2 className="card-text text-center">Biografía</h2>
                <p className="card-text" >{information.strBiographyES} </p>
                <p className="card-text" >
                    <a href={`https://${information.strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${information.strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`${information.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>
            </div>
        </div>

    )
}
export default Information;