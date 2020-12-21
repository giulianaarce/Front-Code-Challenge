import React from 'react';

export default class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <div>
                <table style={{backgroundColor: '#000', display: 'block', color:'#fff', padding: 16}}>
                    <tr>
                        <td>
                            <img width='50' src='logo.svg' />
                        </td>
                        <td width='8'/>
                        <td>
                            <h1>
                            MoviesDB Search
                            </h1> 
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}