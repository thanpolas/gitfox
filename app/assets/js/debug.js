// get the current time difference between page
// load and when this func was invoked
function getTimeDiff() {
  return new Date().getTime() - performance.timing.navigationStart;
}
var $log = document.getElementById('logger');
function log(message) {
  $log.innerHTML = $log.innerHTML + '<p><b>' + getTimeDiff() + '</b>ms :: ' + message + '<br />';

  if (window.console) {
    console.log(getTimeDiff() + 'ms :: ' + message);
    if (console.timeStamp){
      console.timeStamp(message);
    }
  }

}
log('Starting...');