import React from 'react';

import Main from './components/Main';

import Header from './components/Header';

import Footer from './components/Footer';

import SelectedBeast from './components/SelectedBeast';

import data from './components/data.json';

import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      data: data,
      selectedBeast: {

      },
    }
  }

  filterBeastByName = (imgTitle) => {

    const filteredBeast = data.filter(beast =>
      beast.title === imgTitle
    )


    this.setstate({
      selectedBeast: filteredBeast,
      show: true,
    })
  }

handleClose = () => {
  this.setState({ show: false })
}

render(){
  return (
    <div>
      <Header />

      <Main
        handleClose={this.filterBeastByName}
        hornedBeastData={this.props.data}
      />

      <SelectedBeast
        show={this.state.show}
        handleClose={this.handleClose}
        selectedBeast={this.props.selectedBeast}
      />

      <Footer />

    </div>
  );
}
}




export default App;