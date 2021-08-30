import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Card'

class HornedBeasts extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            votedHornedBeast: 0,
        }
    }

    increasNumberOfVotes = () => {
        this.setState({
            votedHornedBeast: this.state.votedHornedBeast + 1
        });
    }
    render() {
        return (
            <div>
                <Card style={{ width: '100rem' }}>
                    <Card.Title>{this.props.title} </Card.Title>
                    <Card.Img src={this.props.imageUrl} />
                    <Card.Body>
                        <Card.Text>
                           Description: {this.props.description}
                        </Card.Text>
                        <Card.Text>
                           Keyword: {this.props.keyword}
                        </Card.Text>
                        <Card.Text>
                           orn num: {this.props.horns}
                        </Card.Text>
                        <Card.Text>
                            Votes: {this.state.votedHornedBeast}
                        </Card.Text>



                        <Button onClick={this.increasNumberOfVotes}>
                            vote for me!
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
export default HornedBeasts;