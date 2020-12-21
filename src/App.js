import React from 'react';
import './App.css';
import SearchBox from './Components/SearchBox';
import ResultList from './Components/ResultList';
import Header from './Components/Header';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      movies: ''
    }
  }
  
  search = (value) =>{
    const VALOR = value;
    fetch(`http://localhost:4000/search/movies/${VALOR}`)
    .then((res) => { return res.json(); })
    .then((json) =>{ 
      if(json !== undefined){
      console.log(json.result);
      this.setState({movies: json.result});
      console.log(this.state.movies);}
    })
  }
  render(){
    return (
      <div className="App">
        <Header/>
        <SearchBox search={this.search} />
        <ResultList movies={this.state.movies || []}/>
      </div>
    );
  }
}
