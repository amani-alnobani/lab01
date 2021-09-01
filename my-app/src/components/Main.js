import React from 'react';
import HornedBeasts from './HornedBeast';
import Row from 'react-bootstrap/Row';


//parent

class Main extends React.Component {

    render() {
        // console.log(this.props);
        return (
            <main>
                <Row xs={1} md={3} className="g-4">
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
                </Row>
            </main >
        );
    }
}
export default Main;