import React from 'react';
import HouseService from '../HousesManager';

let e = React.createElement;

let house;

export default class AddHouse extends React.Component {
  handleClick() {
    HouseService.createHouse(house);
    this.props.func();
    this.house.value='';
  };

  handleHouseUpdate(e) {
    house = e.target.value
  }


  render() {
    return React.createElement(
      'div',
      {className:'jumbotron'},
      e('input', {className:'form-control', placeholder:'House name', ref:(input)=>this.house=input, onChange:this.handleHouseUpdate.bind(this)}, null),
      e('button', {className:'btn btn-light form-control border', onClick:this.handleClick.bind(this)}, 'Create')
    );
  }

}
