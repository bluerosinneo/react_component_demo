import React from 'react';

function JeapDisplay(props){
    return(
        <div>
            <div>Category: {props.data.category.title}</div>
            <div>Question: {props.data.question}</div>
            <div>Value: {props.data.value}</div>
            <div>Current Score: {props.score}</div>
            <form onSubmit={props.submitAnswer}>
                <input onChange={props.handleChange} type="text" name="answer" value={props.answer}/>
                <button>Submit Answer</button>
            </form>
        </div>
    )
}

export default JeapDisplay;