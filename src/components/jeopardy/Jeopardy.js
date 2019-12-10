import React, { Component } from 'react';

import JeopardyService from "../../jeopardyService";

class Jeopardy extends Component {
    constructor(props){
        super(props);
        this.client = new JeopardyService();
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

    render(){
        // conditional this.state.data does not work
        // since this.state.date exists at construction
        // so use this.state.data.id to see if actual data is there
        // is there somethign else we can use?
        if(this.state.data.id){
            console.log(this.state.data.category.title) 
            return(
                
                <div>
                    <div>{JSON.stringify(this.state.data)}</div>
                    <div>-</div>
                    <div>Question</div>
                    <div>{this.state.data.question}</div>
                    <div>Title</div>
                    <div>{this.state.data.category.title}</div>
                    <div>Value</div>
                    <div>{this.state.data.value}</div>
                    
                    
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