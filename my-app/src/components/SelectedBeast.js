import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
class SelectedBeast extends React.Component {

    render() {

        return (
          <div>
            <Modal show={this.props.show} onHide={this.props.handleClose}>

              <Modal.Header closeButton>
                <Modal.Title>{this.selectedBeast.props.title}</Modal.Title>
              </Modal.Header>

              <Modal.Body>
              <Card style={{ width: '100rem' }}>
                    <Card.Title>{this.props.title} </Card.Title>
                    <Card.Img variant="top" src={this.props.selectedBeast.imageUrl} onClick={this.increasNumberOfVotes} />
                    <Card.Body>
                        <Card.Text>
                            Description: {this.props.selectedBeast.description}
                        </Card.Text>
                        <Card.Text>
                            Keyword: {this.props.selectedBeast.keyword}
                        </Card.Text>
                        <Card.Text>
                            horn num: {this.props.selectedBeast.horns}
                        </Card.Text>
                        <Card.Text>
                            Votes: {this.state.selectedBeast.votedHornedBeast}
                        </Card.Text>
                    </Card.Body>
                </Card>
              </Modal.Body>

              <Modal.Footer>
              </Modal.Footer>
            </Modal>
          </div>
        );
      }
    }
    
    
    export default SelectedBeast;