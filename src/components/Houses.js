import React from 'react';
import House from './House';
import AddHouse from './AddHouse';
import HouseService from '../HousesManager';


let e = React.createElement;

export default class Houses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upd: props.update
    }
  }

  updateState = (arg) => {
    let upd;

    if (this.state.upd == 1) {
      upd = 0;
    }
    else {
      upd = 1;
    }

    this.setState({upd : upd});
  };

  render() {
    let hs = [];

    /*HouseService.getAllHouses().then(ret => {

      for (let house of ret) {
        alert(house.name)
        hs.push(e(House, {}, null));
      }
    });*/
  //  alert(HouseService.getAllHouses())

    for (let house of HouseService.getAllHouses()) {
      //alert(house.name)
      hs.push(e(House, {...house, func:this.updateState}, null));
    }


    return React.createElement(
      'div',
      {className:'container'},
      e('br', {}, null),
      e(AddHouse, {func:this.updateState}, null),
      e('br', {}, null),
      hs
      //e(House, {func:this.updateState}, null)
      //e('br', {}, null),
      //ooks
    );
  }

}
