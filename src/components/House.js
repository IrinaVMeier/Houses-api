import React from 'react';
import HouseService from '../HousesManager';
import Room from './Room';
import AddRoom from './AddRoom';

let e = React.createElement;

export default class House extends React.Component {
  updateState = (arg) => {
    this.props.func();
  };

  render() {
    let rooms = [];

    //alert(this.props.rooms)
    for (let room of this.props.rooms) {
      //alert(house.name)
      rooms.push(e(Room, {...room, houseId:this.props._id, func:this.updateState}, null));
    }

    return React.createElement(
      'div',
      {className:'card mb-3'},
        e('div', {className:'card-header'},

        e('div', {className:'row'},
          e('div', {className:'col'},
            e('div', {}, this.props.name)

          ),
          e('div', {className:'col'},
            e('button', {className:'form-control btn btn-light border', onClick: () => {HouseService.deleteHouse(this.props._id); this.props.func();}}, 'Delete')

          )
        ),
        e('br', {}, null),
        e(AddRoom, {houseId:this.props._id, func:this.updateState}, null),
        rooms
      )
    );
  }

}
