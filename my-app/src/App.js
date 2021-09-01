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

  filteredHorns = (newHorns) =>{
    this.setState({data:newHorns})
  }

  filterBeastByName = (imgTitle) => {
    console.log(imgTitle);
    const filteredBeast = data.filter(beast =>
      beast.title === imgTitle
    )


    this.setState({
      selectedBeast: filteredBeast,
      show: true,
    })
  }

  handleClose = () => {
    this.setState({ show: false })
  }

   

  render() {
    // console.log(this.state.data);

    return (
      <div>
        <Header />

        <Main
          filterBeastByName={this.filterBeastByName}
          hornedBeastData={this.state.data}
          filteredHorns={this.filteredHorns}
        />

        {this.state.show ? <SelectedBeast
          show={this.state.show}
          handleClose={this.handleClose}
          selectedBeast={this.state.selectedBeast}
        /> : 'loading'}

       

        <Footer />

      </div>
    );
  }
}




export default App;