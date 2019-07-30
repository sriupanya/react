import React, { Component } from 'react';
import axios from 'axios';

class Questions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            flag:false
        };

        this.getQuestions()
    }


    componentDidUpdate(){
        console.log(this.state.questions)
        console.log(this.state.questions.items)
    }

    getQuestions = () => {
        axios.get('https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow')
            .then(response => {
                const data = JSON.parse(JSON.stringify(response.data));
                console.log(data);
                this.setState({
                    questions: data
                });
            })
    }


    getQuestionsValue = () => {
        this.setState({
            flag:true
        })
    }

    printQuestion = () => {

        console.log(this.state.questions)

       return (this.state.flag)? <div></div> : <div>Fasdas</div>
    }

    render() {
        return (
            <div>
                <button onClick={this.getQuestionsValue}>GET q</button>
                {this.printQuestion()}
            </div>
        )

    }
}

export default Questions;


