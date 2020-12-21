import React from 'react';
import ResultItem from './ResultItem';

export default class SearchBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <div>
                {
                    this.props.movies.map((movie, i)=>{
                    return(
                        <ResultItem key={i} title={movie.title} overview={movie.overview} image={movie.poster_path !== null ? `https://image.tmdb.org/t/p/original${movie.poster_path}`: 'https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg'}/>
                    )})
                }
            </div>
        );
    }
}