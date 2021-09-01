import React from 'react';
import HornedBeasts from './HornedBeast';


//parent

class Main extends React.Component {
    
    render() {
        // console.log(this.props);
        return (
            <main> {
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
            </main >
        );
    }
}
export default Main;