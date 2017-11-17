/* UNTESTED AS OF December 12, 22:21 */
$(window).load(function() {
// A lot of credit to :
//http://www.htmlgoodies.com/beyond/javascript/read-text-files
// -using-the-javascript-filereader.html#fbid=R8BarzQical
  var read = false;
  var error_array = [];
    // this checks to make sure we can in fact read a file.
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    //  var fname = "file:///C:/Users/ephan/Documents"; // change this to local source
        var fname = "/Users/ZilevuK/INR"; 
      var f = fname.target.files[0];

      if (f) {
        var r = new FileReader();
        r.onload = function(e) {
  	      var contents = e.target.result;
          var lines = contents.split('\n');
          for (var i = 0; i < contents.length; i++) {
              error_array[i] = lines[i];
          }
          read = true;
          /*alert( "Got the file.n"
                +"name: " + f.name + "n"
                +"type: " + f.type + "n"
                +"size: " + f.size + " bytesn"
                + "starts with: " + contents.substr(1, contents.indexOf("n"))
          );*/
        }
  } else {
    alert('The File APIs are not fully supported by your browser.');
  }

  // if the reading of file was successful, stores the stringified array
  // in local storage.
  if (read) {
      sessionStorage("error_array", JSON.stringify(error_array));
  }
}
