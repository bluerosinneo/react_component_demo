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

    componentDidMount(){
        this.getNewQuestion();
    }

    render(){
        
        if(isEmpty(this.state.data)){
            console.log(this.state.data.id);
            return(
                <div>
                    <span>{this.state.data.id}</span>
                    <br/>
                    cramer
                    <br/>
                    <span>{JSON.stringify(this.state.data)}</span>
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