var gitfox = gitfox || {};
gitfox.ctrl = gitfox.ctrl || {};
var gitUsername = 'thanpolas';

!function(gitfox) {
  gitfox.ctrl.frontpage = function frontpage($scope, $routeParams) {

  };

  /**
   *
   * @return {[type]} [description]
   */
  gitfox.ctrl.frontpage.getUser = function() {
    return gitUsername;
  };

}(gitfox);


$(document).ready(function() {
  $("body").on('submit', ".welcome-screen form", function() {
    gitUsername = $('#github-username').val();
    $(".welcome-screen").slideUp();
    $('#main-food').slideDown();
  });
});