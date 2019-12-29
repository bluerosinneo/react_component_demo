//import the axios HTTP client to communicate with the API

import axios from 'axios';

class JeopardyService{

    constructor(
        urlRandom = 'http://jservice.io/api/random',
        urlCategories = 'http://jservice.io/api/categories?count=3&offset=',
        urlQuestionsByCategorie = 'http://jservice.io/api/clues?category=',
        client = axios.create()
        ){
        this.urlRandom = urlRandom;
        this.urlCategories = urlCategories;
        this.urlQuestionsByCategorie = urlQuestionsByCategorie;
        this.client = client;
    }

    // getQuestion and getThreeCategories are different from the original
    // JeopardyService

    // only used in normal and medium
    getQuestion(){
        return this.client.get(this.urlRandom);
    }

    // used in hard
    getQuestionByCategorie(categorieId){
        // console.log(this.urlQuestionsByCategorie + categorieId)
        return this.client.get(this.urlQuestionsByCategorie + categorieId)
    }

    // used in hard
    getThreeCategories(){
        // kind of random categories ... but always three consecutive categories
        let offset = Math.floor(Math.random()*1000);
        return this.client.get(this.urlCategories + offset);
    }


}

export default JeopardyService;