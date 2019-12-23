import React, { Component } from 'react';

import JeopardyService from "../../jeopardyService";
import JeapDisplay from "../jeapDisplay/JeapDisplay";

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

        if(this.state.data.id){
            return(
            <JeapDisplay
                data={this.state.data}
                handleChange={this.handleChange}
                submitAnswer={this.submitAnswer}
                answer={this.state.formData.answer}
                score={this.state.score}
            />
            )
        }
        else{
            return(
                <div>
                    um?
                </div>
            );
        }

    }
}

export default Jeopardy;