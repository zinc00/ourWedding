(function(){
  var app = angular.module('wedding',['ui.bootstrap'])
// app Controller
    .controller('WeddingController', function () {
      // Tab handler
      this.tab = 0;
      this.setTab = function(tabToSet) {
        this.tab = tabToSet;
      };
      this.check = function(checkTab){
        return this.tab == checkTab;
      };
    })
    // end app Controller

    // Elements
    .directive('invitations', function(){
      return {
        restrict: 'E',
        templateUrl: 'invitations.html'
      };
    })

    .directive('where', function(){
      return {
        restrict: 'E',
        templateUrl: 'where.html'
      };
    })


    .directive('menu', function(){
      return {
        restrict: 'E',
        templateUrl: 'menu.html'
      };
    });
})();
