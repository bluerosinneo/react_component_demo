import React, { Component } from 'react';

import JeopardyService from "../../jeopardyService";
import JeapDisplay from "../jeapDisplay/JeapDisplay";

class Jeopardy extends Component {
    constructor(props){
        super(props);
        this.client = new JeopardyService();
        this.state = {
            firstAnswer: false,
            data: {},
            score: 0,
            categories: {
                titles: [
                    "",
                    "",
                    ""
                ],
                ids: [
                    0,
                    0,
                    0
                ],
            },
            formData: {
                answer: "",
            }
        }
    }

    // no longer used under Hardmode
    getNewQuestion(){
        return this.client.getQuestion().then(result => {
            console.log(result.data[0].answer);
            this.setState({
                data: result.data[0]
            })
        })
    }

    // gets a random question from a specific categorie
    getNewQuestionByCategorie(categorieId){
        return this.client.getQuestionByCategorie(categorieId).then(result => {
            // console.log(result.data);
            // store a randome question from the categorie
            let tempData = result.data[Math.floor(Math.random()*result.data.length)]
            // reset the categories (for displaying purposes)
            let tempCategories = {
                titles: [
                    "",
                    "",
                    ""
                ],
                ids: [
                    0,
                    0,
                    0
                ],
            }
            // for cheating purposes
            console.log(tempData.answer);
            this.setState({
                data: tempData,
                categories: tempCategories,
            })
        })
    }

    // gets three different categories
    getNewThreeCategories(){
        return this.client.getThreeCategories().then(result => {
            // console.log(result.data);
            let tempCategories = {
                    titles: [
                        result.data[0].title,
                        result.data[1].title,
                        result.data[2].title
                    ],
                    ids: [
                        result.data[0].id,
                        result.data[1].id,
                        result.data[2].id
                    ],
            }
            this.setState({
                data: {},
                categories: tempCategories,
            })
        })
    }

    componentDidMount(){
        // that was the old way fro easy and medium
        // this.getNewQuestion();

        // this is the new way for hard
        this.getNewThreeCategories();
    }

    // this is probably useless and should be refactored into getNewQuestionByCategorie
    // however I do like that this part abstracts the stored categorieID from state
    // but it is a bit complicated
    submitCategorie = (event) => {
        // console.log(event.target.value);
        this.getNewQuestionByCategorie(this.state.categories.ids[event.target.value]);

    }

    // moving to hard mode this is ~unchanged
    // only change is that instead of getNewQuestion() instead getNewThreeCategories() is called
    submitAnswer = (event) => {
        event.preventDefault();
        // console.log(this.state.formData.answer);
        // console.log(this.state.data.answer);
        // console.log(this.state.formData.answer === this.state.data.answer);
        if(this.state.formData.answer === this.state.data.answer){
            let tempScore = this.state.score;
            tempScore = tempScore + this.state.data.value;
            this.setState({
                firstAnswer: true,
                score: tempScore
            })
        }
        else{
            let tempScore = this.state.score;
            tempScore = tempScore - this.state.data.value;
            this.setState({
                firstAnswer: true,
                score: tempScore
            })
        }
        // this.getNewQuestion()
        this.getNewThreeCategories();
        this.setState(
            {formData: {answer: ""}}
        )
    }

    handleAnswerTyping = (event) => {
        let formData = this.state.formData;
        formData[event.target.name] = event.target.value;
        this.setState({formData});
    }

    render(){
        // conditionally rendering based on state
        // state should either have meaninfull info for either state.data or state.categories
        // but not both at the same time

        //Categories
        if(this.state.categories.titles[0] !== ""){
            return(
                <JeapDisplay
                    categoryTitles={this.state.categories.titles } 
                    submitCategorie={this.submitCategorie}
                    firstAnswer={this.state.firstAnswer}
                    score={this.state.score}
                />
                // <div>
                //     Please Select a Categorie
                //     <br />
                //     <button value={0} onClick={this.submitCategorie}>
                //         {this.state.categories.titles[0]}
                //     </button>
                //     <br />
                //     <button value={1} onClick={this.submitCategorie}>
                //         {this.state.categories.titles[1]}
                //     </button>
                //     <br />
                //     <button value={2} onClick={this.submitCategorie}>
                //         {this.state.categories.titles[2]}
                //     </button>
                // </div>
            )
        }

        // Question/Answer
        if(this.state.data.id){
            return(
            <JeapDisplay
                categoryTitles={this.state.categories.titles }
                data={this.state.data}
                handleAnswerTyping={this.handleAnswerTyping}
                submitAnswer={this.submitAnswer}
                answer={this.state.formData.answer}
                score={this.state.score}
                firstAnswer={this.state.firstAnswer}
            />
            )
        }



        return(
            <div>
                ......Loading :-)
            </div>
        );

    }
}

export default Jeopardy;