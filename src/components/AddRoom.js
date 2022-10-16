import React from 'react';
import HouseService from '../HousesManager';


let e = React.createElement;

let name;
let area;

export default class AddRoom extends React.Component {
  handleClick() {
    //alert(name + ' ' + area + ' ' + this.props.houseId)
    HouseService.addRoom(this.props.houseId, name, area);
    this.props.func();
    this.name.value='';
    this.area.value='';
  };

  handleNameUpdate(e) {
    name = e.target.value
  }

  handleAreaUpdate(e) {
    area = e.target.value
  }

  render() {

    return React.createElement(
      'div',
      {className:'card mb-1'},
        e('div', {className:'card-header'},

        e('div', {className:'row'},
          e('div', {className:'col'},
            e('input', {className:'form-control', placeholder:'Name', ref:(input)=>this.name=input, onChange:this.handleNameUpdate.bind(this)}, null),
          ),
          e('div', {className:'col'},
            e('input', {className:'form-control', placeholder:'Area', ref:(input)=>this.area=input, onChange:this.handleAreaUpdate.bind(this)}, null),
          ),
          e('div', {className:'col'},
            e('button', {className:'form-control btn btn-light border', onClick:this.handleClick.bind(this)}, 'Create')
          )
        )
      )
    );
  }

}
