import React from 'react';

export default class SearchBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            movie: ''
        }
    }
    handleChange = (e) =>{
        this.setState({ movie: e.target.value});
    }
    handleClick = () =>{
        const SEARCHMOVIE = this.state.movie;
        console.log(SEARCHMOVIE);
        return this.props.search(SEARCHMOVIE);
    }
    render(){
        return(
            <div>
                <div className="input-group mb-3" >
                  <input width='99%' type="text" className="form-control" placeholder="Search movies" aria-label="Search movies" aria-describedby="button-addon2" onChange={this.handleChange} />
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                        <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                    </svg>
                    </button>
                  </div>
                </div>
            </div>
        );
    }
}