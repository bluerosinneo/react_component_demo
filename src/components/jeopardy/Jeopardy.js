import React, { Component } from 'react';

import JeopardyService from "../../jeopardyService";

class Jeopardy extends Component {
    constructor(props){
        super(props);
        this.client = new JeopardyService();
        this.state = {
            data: {},
            score: 0,
            formData: {
                answer: "",
            }
        }
    }

    getNewQuestion(){
        return this.client.getQuestion().then(result => {
            console.log(result.data[0].answer);
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
        // console.log(this.state.formData.answer);
        // console.log(this.state.data.answer);
        // console.log(this.state.formData.answer === this.state.data.answer);
        if(this.state.formData.answer === this.state.data.answer){
            let tempScore = this.state.score;
            tempScore = tempScore + this.state.data.value;
            this.setState({
                score: tempScore
            })
        }
        else{
            let tempScore = this.state.score;
            tempScore = tempScore - this.state.data.value;
            this.setState({
                score: tempScore
            })
        }
        this.getNewQuestion()
        this.setState(
            {formData: {answer: ""}}
        )
    }

    handleChange = (event) => {
        let formData = this.state.formData;
        formData[event.target.name] = event.target.value;
        this.setState({formData});
    }

    render(){
        // console.log(this.state.data.answer);


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
                    {/* <div>{JSON.stringify(this.state.data)}</div> */}
                    <div>Category: {this.state.data.category.title}</div>
                    <div>Question: {this.state.data.question}</div>
                    <div>Value: {this.state.data.value}</div>
                    <div>Current Score: {this.state.score}</div>
                    <form onSubmit={this.submitAnswer}>
                        <input onChange={this.handleChange} type="text" name="answer" value={this.state.formData.answer}/>
                        <button>Submit Answer</button>
                    </form>

                    
                    
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