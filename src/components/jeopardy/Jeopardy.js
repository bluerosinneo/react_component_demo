import React, { Component } from 'react';

import JeopardyService from "../../jeopardyService";

class Jeopardy extends Component {
    constructor(props){
        super(props);
        this.client = new JeopardyService();
        this.formData = {};
        this.state = {
            data: {},
            score: 0
        }
    }

    getNewQuestion(){
        return this.client.getQuestion().then(result => {
            console.log(result.data[0]);
            this.setState({
                data: result.data[0]
            })
        })
    }

    answerGiven(){

    }

    componentDidMount(){
        this.getNewQuestion();
    }

    submitAnswer = (event) => {
        event.preventDefault();
        console.log(this.formData.answer);
        console.log(this.state.data.answer);
        console.log(this.formData.answer === this.state.data.answer);
        if(this.formData.answer === this.state.data.answer){
            let tempScore = this.state.score;
            tempScore = tempScore + this.state.data.value;
            this.setState({
                score: tempScore
            })
        }
    }

    handleChange = (event) => {
        let formData = this.formData;
        formData[event.target.name] = event.target.value;
        this.formData = formData;
    }

    render(){
        console.log(this.state.data.answer);


        // conditional this.state.data does not work
        // since this.state.date exists at construction
        // so use this.state.data.id to see if actual data is there
        // is there somethign else we can use?
        // console.log(this.state.data.category.title)
        if(this.state.data.id){
            // console.log(this.state.data.category.title)
            // console.log(this.state.data.happy + " &&&");
            return(
                
                <div>
                    <div>{JSON.stringify(this.state.data)}</div>
                    <div>-</div>
                    <div>Question</div>
                    <div>{this.state.data.question}</div>
                    <div>Category</div>
                    <div>{this.state.data.category.title}</div>
                    <div>Value</div>
                    <div>{this.state.data.value}</div>
                    <form onSubmit={this.submitAnswer}>
                        <input onChange={this.handleChange} name="answer" />
                        <button>Submit Answer</button>
                    </form>
                    <div>Score</div>
                    <div>{this.state.score}</div>
                    
                    
                    {/* <span>{JSON.stringify(this.state.data[0])}</span> */}
                </div>
            );
        }
        else{
            return(
                <div>
                </div>
            );
        }

    }
}

export default Jeopardy;