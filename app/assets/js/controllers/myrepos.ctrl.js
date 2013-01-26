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
    } else {
      $scope.error = true;
    }

    $scope.repo = {
      name: selectedRepo
    };
  };

}(gitfox);
