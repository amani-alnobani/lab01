import React from 'react';
import HornedBeasts from './HornedBeast';
import data from './data.json';


class Main extends React.Component {

    render() {
        return (
            <main>{
                data.map((beast) => {
                    return (
                        <HornedBeasts
                            title={beast.title}
                            imageUrl={beast.image_url}
                            description={beast.description}
                            keyword={beast.keyword}
                            horns={beast.horns}
                        />
                    )
                })
            }

            </main>
        );
    }
}
export default Main;