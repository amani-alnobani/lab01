import React from 'react';
import Card from 'react-bootstrap/Card';


//child

class HornedBeasts extends React.Component {


    constructor(props) {
        super(props);
        this.love = '';
        this.state = {
        votedHornedBeast: 0,
        }
    }
    

    increasNumberOfVotes = () => {
        this.props.filterBeastByName(this.props.title)
        this.setState({
            votedHornedBeast: this.state.votedHornedBeast + 1
        });
        
    }
    render() {
        return (
            <div>
                <Card style={{ width: '100rem' }}>
                    <Card.Title>{this.props.title} </Card.Title>
                    <Card.Img variant="top" src={this.props.imageUrl} onClick={this.increasNumberOfVotes} />
                    <Card.Body>
                        <Card.Text>
                            Description: {this.props.description}
                        </Card.Text>
                        <Card.Text>
                            Keyword: {this.props.keyword}
                        </Card.Text>
                        <Card.Text>
                            horn num: {this.props.horns}
                        </Card.Text>
                        <Card.Text>
                            Votes: {this.state.votedHornedBeast}
                        </Card.Text>
                    </Card.Body>
                </Card>
                
            </div>
        );
    }
}
export default HornedBeasts;