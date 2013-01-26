// Gangnam style

!function(angular) {
  'use strict';

  angular.module('gitfox', []).
    config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {templateUrl: 'partials/frontpage.html',   controller: gitfox.ctrl.frontpage}).
        when('/mygists', {templateUrl: 'partials/mygists.html',   controller: gitfox.ctrl.myGists}).
        when('/myrepos', {templateUrl: 'partials/myrepos.html',   controller: gitfox.ctrl.myRepos}).
        otherwise({redirectTo: '/'});
  }]);

}(angular);