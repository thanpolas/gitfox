var gitfox = gitfox || {};
gitfox.model = gitfox.model || {};

!function(gitfox){
  /**
   * constructor
   * @param  {[type]} username [description]
   * @return {[type]} [description]
   */
  gitfox.model.gitAPI = function(username){
    this.username = username;
    this.repoName = '';
  };

  gitfox.model.gitAPI.URL = 'https://api.github.com/';

  /**
   * Get the user's repos list
   * @param  {Function} cb [description]
   * @return {[type]}      [description]
   */
  gitfox.model.gitAPI.prototype.fetchRepos = function (cb) {
    $.ajax( {
      url: gitfox.model.gitAPI.URL + 'users/' + this.username + 'repos',
      dataType : "jsonp",
      success : cb
    });
  };

  /**
   * [setRepo description]
   * @param {[type]} repoName [description]
   */
  gitfox.model.gitAPI.prototype.setRepo = function (repoName) {
    this.repoName = repoName;
  };


  /**
   * Get the repo's content list
   * @param  {Function} cb [description]
   * @param  {string}   opt_path [description]
   * @return {[type]}      [description]
   */
  gitfox.model.gitAPI.prototype.fetchContent = function (cb, opt_path) {
    var path = opt_path || '';
    $.ajax( {
      url: gitfox.model.gitAPI.URL + 'repos/' + this.username + '/' + this.repoName + '/contents/' + path,
      dataType : "jsonp",
      success : cb
    });
  };

  /**
   * [_createUrl description]
   * @return {[type]} [description]
   */
  gitfox.model.gitAPI.prototype._createUrl = function () {
    return 'https://api.github.com/'
  };


}(gitfox);