import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
class SelectedBeast extends React.Component {

    render() {
console.log(this.props.selectedBeast[0]);
        return (
          <div>
            <Modal show={this.props.show} onHide={this.props.handleClose}>

              {/* <Modal.Header closeButton>
                <Modal.Title>{this.props?.selectedBeast[0].title}</Modal.Title>
              </Modal.Header> */}

              <Modal.Body>
              <Card style={{ width: '100rem' }}>
                    <Card.Title>{this.props?.selectedBeast[0].title} </Card.Title>
                    <Card.Img variant="top" src={this.props?.selectedBeast[0].image_url} onClick={this.increasNumberOfVotes} style={{width:'25%',height:'25%'}}/>
                    <Card.Body>
                        <Card.Text>
                            Description: {this.props?.selectedBeast[0].description}
                        </Card.Text>
                        <Card.Text>
                            Keyword: {this.props?.selectedBeast[0].keyword}
                        </Card.Text>
                        <Card.Text>
                            horn num: {this.props?.selectedBeast[0].horns}
                        </Card.Text>
                        <Card.Text>
                            Votes: {this.props?.selectedBeast[0].votedHornedBeast}
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