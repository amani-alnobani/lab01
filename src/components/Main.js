import React from 'react';
import HornedBeasts from './HornedBeast';

// import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import data from './data.json';

//parent

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'ALL',
        }

    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('hello');
        // this.hornsNumber(this.state.hornNum)
        // //     let hornValue;
        let allData = data;
        let selectedHorn = parseInt(event.target.value);
        console.log(selectedHorn);
        let newHorns;
        if (selectedHorn) {
            
            newHorns = allData.filter((value) => {
                if (value.horns === selectedHorn) {
                    return (value);
                }
            })
        } else {
             newHorns = allData;
        }

        console.log(this.props.filteredHorns(newHorns));
        this.props.filteredHorns(newHorns);
        }

    render() {
        // console.log(this.props);
        return (
            <main>
                
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>number of horns</Form.Label>
                            <Form.Control as="select" size="sm" custom onChange={this.handleSubmit}>
                                <option value="all">ALL</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="100">100</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>

                 <div>
                     {
                            this.props.hornedBeastData.map((beast) => {
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