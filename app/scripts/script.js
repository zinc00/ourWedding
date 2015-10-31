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
    .directive('who', function(){
      return {
        restrict: 'E',
        templateUrl: 'who.html'
      };
    })

    .directive('when', function(){
      return {
        restrict: 'E',
        templateUrl: 'when.html'
      };
    })

    .directive('where', function(){
      return {
        restrict: 'E',
        templateUrl: 'where.html'
      };
    })

    .directive('howMuch', function(){
      return {
        restrict: 'E',
        templateUrl: 'howmuch.html'
      };
    })

    .directive('confirm', function(){
      return {
        restrict: 'E',
        templateUrl: 'confirm.html'
      };
    });
})();
