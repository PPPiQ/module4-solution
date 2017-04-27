(function() {
  'use strict';
angular.module('MenuApp')
.controller('CategoriesController',CategoriesController);
CategoriesController.$inject = ['catego'];
function CategoriesController(catego) {
  var List = this;

  List.catego = catego;

}
}());
