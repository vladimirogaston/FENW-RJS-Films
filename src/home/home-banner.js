import React from 'react';

function Banner(props){
    return(
        <div className="jumbotron">
            <h2>{props.title}</h2>
            <h3>{props.subTitle}</h3>
        </div>
    );
}

export default Banner;