import React from 'react';

export default class ResultItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        return(
            <div className="card mb-3">
                <div className="row g-0">
                <div className="col-md-4">
                   <img src={this.props.image} className="imagen" alt={this.props.title}></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                    <h3 className="card-title">{this.props.title}</h3>
                    <p className="card-text">{this.props.overview}</p>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}