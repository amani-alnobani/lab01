import React from 'react';
import HornedBeasts from './HornedBeast';
import Form from 'react-bootstrap/Form'
// import data from './data.json';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'ALL',
            data: this.props.data
        }

    }
    handleChange = (event) => {
        event.preventDefault();
        let allData = this.state.data;
        let selectedNumber = parseInt(event.target.value);
        let filteredData = allData.filter((value) => {
            return value.horns === selectedNumber;
        })

        if (filteredData.length > 0) {

            this.setState({
                data: filteredData
            })
        } else {
            this.setState({
                data: this.props.data
            })
        }

    }

    render() {
        return (
            <main>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>number of horns</Form.Label>
                        <Form.Control as="select" size="sm" custom onChange={this.handleChange}>
                            <option value="0">ALL</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="100">100</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <div>
                    {
                        this.state.data.map((beast) => {
                            return (
                                <HornedBeasts
                                    title={beast.title}
                                    imageUrl={beast.image_url}
                                    description={beast.description}
                                    keyword={beast.keyword}
                                    horns={beast.horns}
                                    filterBeastByName={this.props.filterBeastByName}
                                    showRequestMessage={this.showRequestMessage}
                                />
                            )
                        })
                    }
                </div>
            </main>
        );
    }
}

export default Main;