import React from 'react';

function JeapDisplay(props){

    let scoreDisplay

    if(props.firstAnswer === true){
        scoreDisplay = (<div>Current Score: {props.score}</div>)
    }
    else{
        scoreDisplay = (<div></div>)
    }

    if(typeof props.data !== 'undefined'){
        return(
            <div>
                {scoreDisplay}
                <div>Category: {props.data.category.title}</div>
                <div>Question: {props.data.question}</div>
                <div>Value: {props.data.value}</div>
                <form onSubmit={props.submitAnswer}>
                    <input
                        onChange={props.handleAnswerTyping}
                        type="text" name="answer"
                        value={props.answer}
                    />
                    <button>Submit Answer</button>
                </form>
            </div>
        )
    }
    if(typeof props.categoryTitles !== 'undefined'){
        return(
            <div>
                {scoreDisplay}
                Please Select a Categorie
                <br />
                <button value={0} onClick={props.submitCategorie}>
                    {props.categoryTitles[0]}
                </button>
                <br />
                <button value={1} onClick={props.submitCategorie}>
                    {props.categoryTitles[1]}
                </button>
                <br />
                <button value={2} onClick={props.submitCategorie}>
                    {props.categoryTitles[2]}
                </button>
            </div>
        )
    }
}

export default JeapDisplay;