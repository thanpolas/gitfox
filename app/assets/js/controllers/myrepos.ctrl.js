var gitfox = gitfox || {};
gitfox.ctrl = gitfox.ctrl || {};

!function(gitfox) {

  gitfox.ctrl.myRepos = function myRepos($scope, $routeParams) {
    console.log($scope);

    var repos = Array.prototype.slice.call(fixtures.myRepos);


    $scope.repos = repos;
  };

  gitfox.ctrl.myRepoContents = function myRepoContents($scope, $routeParams) {

    console.log($routeParams);
    var selectedRepo = $routeParams.repo;
    var selectedPath = $routeParams.path;

    var repoContents;
    if (selectedPath) {
      repoContents = Array.prototype.slice.call(fixtures.repoContentsSubfolder);
    } else {
      repoContents = Array.prototype.slice.call(fixtures.repoContents);
    }

    $scope.contents = repoContents;
    $scope.repo = {
      name: selectedRepo
    };
  };

}(gitfox);
