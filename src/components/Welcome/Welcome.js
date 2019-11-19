import React from 'react';

function Welcome(props){


    
    if(props.match.params.name){
        return(
            <div>
                <h1>Hello, {props.match.params.name}!</h1>
            </div>
        )
    }
    else{
        return(
            <div>
                <h1>Hello, {props.name}!</h1>
            </div>
        )
    }
}

export default Welcome;