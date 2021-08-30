import React from 'react';

class HornedBeasts extends React.Component{

    render(){
        return(
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                <img src ={this.props.imageUrl} alt={this.props.title} />
                <h3>{this.props.keyword}</h3>
                <p>{this.props.horns}</p>
            </div>
        );
    }
}
export default HornedBeasts;