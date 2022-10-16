import React from 'react';
import HouseService from '../HousesManager';


let e = React.createElement;

export default class Room extends React.Component {

  render() {

    return React.createElement(
      'div',
      {className:'card mb-1'},
        e('div', {className:'card-header'},

        e('div', {className:'row'},
          e('div', {className:'col'},
            e('div', {}, this.props.name)
          ),
          e('div', {className:'col'},
            e('div', {}, this.props.area)
          ),
          e('div', {className:'col'},
            e('button', {className:'form-control btn btn-light border', onClick: () => { HouseService.deleteRoom(this.props.houseId, this.props._id); this.props.func();}}, 'Delete')
          )
        )
      )
    );
  }

}
