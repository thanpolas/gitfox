// Gangnam style

!function(angular) {
  'use strict';

  angular.module('gitfox', []).
    config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {templateUrl: 'partials/frontpage.html',   controller: gitfox.ctrl.frontpage}).
        when('/about', {templateUrl: 'partials/about.html'}).
        when('/mygists', {templateUrl: 'partials/mygists.html',   controller: gitfox.ctrl.myGists}).
        when('/myrepos', {templateUrl: 'partials/myrepos.html',   controller: gitfox.ctrl.myRepos}).
        when('/myrepos/:repo', {templateUrl: 'partials/myrepoContents.html',   controller: gitfox.ctrl.myRepoContents}).
        when('/myrepos/:repo/:path', {templateUrl: 'partials/myrepoContents.html',   controller: gitfox.ctrl.myRepoContents}).
        otherwise({redirectTo: '/'});
  }]);

}(angular);
