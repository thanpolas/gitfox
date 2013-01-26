$(document).ready(function() {
  $("body").on('click', "#install_app", function() {
    var request = window.navigator.mozApps.install('http://snf-14779.vm.okeanos.grnet.gr/manifest.webapp');
    request.onsuccess = function () {
      // Save the App object that is returned
      var appRecord = this.result;
    };
    request.onerror = function () {
      // Display the error information from the DOMError object
      alert('Install failed, error: ' + this.error.name);
    };
  });
});