import $ from '../node_modules/jquery/dist/jquery.min.js'

class House {
  constructor(name) {
    this.name = name;
    this.rooms = [];
  }

  addRoom(name, area) {
    this.rooms.push(new Room(name, area));
  }
}

class Room {
  constructor(name, area) {
    this.name = name;
    this.area = area;
  }
}

class HouseService {
  static url = 'https://ancient-taiga-31359.herokuapp.com/api/houses'

  static getAllHouses() {
    let res;
    $.ajax({
        url: this.url,
        dataType: 'json',
        success: function (result) {
            console.log(result);
            res = result;
        },
        async: false
    })

    return res;
    //return $.get(this.url);
  }

  static getHouse(id) {
    return $.get(this.url + `/${id}`);
  }

  static updateHouse(house) {
    return $.post(this.url, house);
  }

  static updateHouse(house) {
    return $.ajax({
      url: this.url + `/${house._id}`,
      dataType: 'json',
      data: JSON.stringify(house),
      contentType: 'application/json',
      type: 'PUT',
      async: false
    });
  }

  static deleteHouse(id) {
    return $.ajax({
      url: this.url + `/${id}`,
      type: 'DELETE',
      async: false
    })
  }

  static createHouse(name) {
    //return $.post(this.url, new House(name));

    $.ajax({
        url: this.url,
        dataType: 'json',
        data:new House(name),
        success: function (result) {
            console.log(result);
            //alert(result.message);

        },
        type: 'POST',
        async: false
    })
  }

  static deleteRoom(houseId, roomId) {
    let houses = this.getAllHouses();
    for(let house of houses) {
      if(house._id == houseId) {
        for(let room of house.rooms) {
          if(room._id == roomId) {
            house.rooms.splice(house.rooms.indexOf(room), 1);

            this.updateHouse(house);
          }
        }
      }
    }
  }

  static addRoom(id, name, area) {
    let houses = this.getAllHouses();
    for(let house of houses) {
      if (house._id == id) {
        house.rooms.push(new Room(name, area));

        this.updateHouse(house);
      }
    }
  }
}

export default HouseService;
/*
class DOMManager {
  static houses;

  static getAllHouses() {

  }

}
*/
