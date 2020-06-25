import React from 'react';
import './App.css';

class Ask extends React.Component {
      constructor(props) {
          super(props);
    this.state = {
        question: '',
        questionList: [],
      }
    }
    
      questionHandler = (event) => {
        event.preventDefault();
        this.setState({
          question: event.target.value
        });
      };

      handleSubmit = (event) => {
        event.preventDefault();
        let newList = this.state.questionList;
        // newList.push(event.target.value);
        newList.push(this.state.question);
        this.setState({
          questionList: newList,          
        }, () => localStorage.setItem('questionsList', this.state.questionList))
      }
      
  
      render () {
        console.log("Rendering")
    return (
      <div>
        <h1>Questions for Loree</h1>
        <form value={this.state.question} onSubmit={this.handleSubmit}>      
            <input
              type="text"
              name="question-entry"
              placeholder="Type question here"
              value={this.state.question}
              onChange={this.questionHandler}
            />
          <p>Listing as of: <br/>{Date()}</p>
          <p>Current questions: </p>
          <ol>
            {this.state.questionList.map((e, index) => {
              return <li key={index}>{e}</li>
          })}
          </ol>
        </form>
        
      </div>

    )
  }
}

export default Ask;
