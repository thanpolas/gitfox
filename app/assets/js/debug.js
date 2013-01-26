// get the current time difference between page
// load and when this func was invoked
!function(window){
  'use strict';
  function getTimeDiff() {
    return new Date().getTime() - window.performance.timing.navigationStart;
  }

  var $log = document.getElementById('logger');
  window.log = function log(message) {
    $log.innerHTML = $log.innerHTML + '<p><b>' + getTimeDiff() + '</b>ms :: ' + message + '<br />';

    if (window.console) {
      console.log(getTimeDiff() + 'ms :: ' + message);
      if (console.timeStamp){
        console.timeStamp(message);
      }
    }

  };
}(this);

log('Starting...');