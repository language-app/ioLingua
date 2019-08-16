import React from 'react';
import "./Search.css";
// var words = require("an-array-of-spanish-words");
// var funWords = words.filter(word => !!word.match(/^fun/i))

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    }

    this.accessWords = this.accessWords.bind(this);
  }
  
  accessWords() {
    const words = [
      {
        name: "hola",
        translation: "hello",
        example: "Hola, Roberto! Como estás"
      }
    ]
  }

  handleChange(event) {
    this.setState({
      term: event.target.value
    })
  }
  
  render() {   
    return (
      <div className="Search">
        <div className="ui category search">
          <div className="ui icon input">
            <input 
              className="prompt" 
              type="text" 
              placeholder="Search words..."
              onChange={this.handleChange}
              value={this.state.term}
            />
            <i className="search icon"></i>
          </div>
          <div className="results"></div>
        </div>
      </div>
    );
  } 
}

export default Search;

