(function() {

angular.module('data')
.config(RouteConfig);

RouteConfig.$inject = ['$stateProvider','$urlRouterProvider','$qProvider'];
function RouteConfig($stateProvider,$urlRouterProvider,$qProvider) {
$urlRouterProvider.otherwise('/');
$qProvider.errorOnUnhandledRejections(false);
$stateProvider
.state('home', {
  url: '/',
  templateUrl: 'src/home.html'
})
.state('categories',{
 url:'/categories-list',
 templateUrl: 'src/templates/menuapp.categories.html',
 controller: 'CategoriesController as CategContr',
 resolve: {
   catego:  ['MenuDataService',
          function (MenuDataService){
         return MenuDataService.getAllCategories();
          }]
 }
})
.state('itemDetail',{
 url:'/item-detail/{itemCategory}',
 templateUrl: 'src/templates/menuapp.items.html',
 controller: 'ItmController as ItmContr',
 resolve: {
   itm:  ['$stateParams', 'MenuDataService',
         function ($stateParams,MenuDataService){
         return MenuDataService.getItemsForCategory($stateParams.itemCategory);
          }]
 }
});

}
}());
