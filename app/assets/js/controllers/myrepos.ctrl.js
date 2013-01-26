var gitfox = gitfox || {};
gitfox.ctrl = gitfox.ctrl || {};

!function(gitfox) {
  var token = '?access_token=6d804e7fcd06deb08cba0b464b1c4b5f75563fcd';
  token += '&callback=cb';

  var git = gitfox.model.gitAPI;



  gitfox.ctrl.myRepos = function myRepos($scope, $http) {

    $http.jsonp(git.URL + 'users/' + gitfox.ctrl.frontpage.getUser() + '/repos' + token);
    window.cb = function(data) {
      $scope.repos = data;
    };
  };
  gitfox.ctrl.myRepos.$inject = ['$scope', '$http'];

  gitfox.ctrl.myRepoContents = function myRepoContents($scope, $routeParams, $http) {
    $scope.error = false;

    var selectedRepo = $routeParams.repo;
    var selectedPath = $routeParams.path || '';

    var url = git.URL + 'repos/' +
      gitfox.ctrl.frontpage.getUser() +
      '/' + selectedRepo + '/contents/' + selectedPath + token;

    $http.jsonp(url);
    window.cb = function(repoContents) {
      repoContents = repoContents.data;
      if (selectedPath !== '') {
        $scope.isRoot = false;
      } else {
        $scope.isRoot = true;
      }

      // check type of contents
      if (_.isArray(repoContents)) {
        $scope.folder = true;
        $scope.contents = repoContents;

      } else if (_.isObject(repoContents)) {
        $scope.folder = false;
        repoContents.content = Base64.decode(repoContents.content);
        $scope.content = repoContents;
        $scope.shClass = gitfox.getSHext(repoContents.name);
            // ugly, need to figure this out
            setTimeout(function(){
              SyntaxHighlighter.highlight();
            }, 200);
      } else {
        $scope.error = true;
      }

      $scope.repo = {
        name: selectedRepo
      };
    };


  };


  /**
   * Return the proper class for syntax highlighting
   * for the given filename
   * @param  {string} filename [description]
   * @return {string}          [description]
   */
  gitfox.getSHext = function(filename) {
    var parts = filename.split('.');
    var defaultBrush = 'brush: plain';

    if (1 == parts.length){
      // no extension...
      return defaultBrush;
    }

    var ext = parts[parts.length - 1];

    switch(ext) {
      case 'js':
        return 'brush: js';
      break;
      case 'rb':
        return 'brush: ruby';
      break;
      case 'py':
        return 'brush: python';
      break;
      case 'php':
        return 'brush: php';
      break;
      default:
        return defaultBrush;
      break;
    }

  };

}(gitfox);
