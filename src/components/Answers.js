import React, { Component } from 'react';
import apiServices from './apiServices/apiServices';
import AnswerItem from './AnswerItem';

class Answers extends Component {
  constructor() {
    super();
    this.state = {
        answer: {},
        apiDataLoaded: false,
        error: null

    }
  }
  componentDidMount() {
    if(this.props.data.accepted_answer_id){
      apiServices.getAcceptedAnswers(this.props.data.accepted_answer_id)
      .then(res => {
        this.setState({
          answer: res.data.items,
          apiDataLoaded: true
        })
      })
    }
  }
  renderAnswers = () => {
    if(this.state.apiDataLoaded) {
      return this.state.answer.map((el, i) => {
        return <AnswerItem data={el} key={i}/>
      })
    }
  }
  render() {
    return (
      <>
        {this.props.data.accepted_answer_id && this.state.apiDataLoaded ? 
          this.renderAnswers()
          :
          <div className="alert alert-secondary mb-0" role="alert">
            No accepted answers found
          </div>
        }
      </>
    )
  }
}

export default  Answers;