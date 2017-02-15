// ["IL", 5000, 12]
// ["MN", 300, 3]
// ["NV", 25000, 1]


var locations = []; // this array will hold your objects

// object constructor

function Location(state,revenue,locationCount){
  this.state = state;
  this.revenue = revenue;
  this.locationCount = locationCount;
  this.averageRevenue = function(){
    return this.revenue / this.locationCount;
  }
}


// object instances

var il = new Location('IL',5000,12);
var mn = new Location('MN',300,3);
var nv = new Location('NV',25000,1);

// new Location('NV',25000,1);

// push object instances to locations array
locations.push(il,mn,nv)
console.log(locations);



// DO NOT MODIFY THIS CODE
$(document).ready(function () {
  locations.forEach(function (element, index) {
    var $li = $('<li></li>');
    $li.append('<span>' +  element.state + '</span>');
    $li.append('<span>' +  element.revenue + '</span>');
    $li.append('<span>' +  element.locationCount + '</span>');
    $li.append('<span>' +  element.averageRevenue() + '</span>');
    $('ol').append($li);
  });
});
