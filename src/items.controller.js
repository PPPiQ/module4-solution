(function() {
  'use strict';
angular.module('MenuApp')
.controller('ItmController',ItmController);
ItmController.$inject = ['itm'];
function ItmController(itm) {
  var List = this;
  List.itm =itm;

}
}());
