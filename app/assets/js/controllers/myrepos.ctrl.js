var gitfox = gitfox || {};
gitfox.ctrl = gitfox.ctrl || {};

!function(gitfox) {

  gitfox.ctrl.myRepos = function myRepos($scope, $routeParams) {
    console.log($scope);

    var repos = Array.prototype.slice.call(fixtures.myRepos);


    $scope.repos = repos;
  };

  gitfox.ctrl.myRepoContents = function myRepoContents($scope, $routeParams) {
    $scope.error = false;

    console.log($routeParams);

    var selectedRepo = $routeParams.repo;
    var selectedPath = $routeParams.path;

    var repoContents;
    if (selectedPath) {
      //repoContents = Array.prototype.slice.call(fixtures.repoContentsSubfolder);
      repoContents = fixtures.repoContentsFile;
      $scope.isRoot = false;
    } else {
      repoContents = fixtures.repoContents;
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
      $scope.$on('$viewContentLoaded', function() {
          SyntaxHighlighter.highlight();
      });
    } else {
      $scope.error = true;
    }

    $scope.repo = {
      name: selectedRepo
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
