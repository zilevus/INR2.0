
var socket = io();
var loopNum = sessionStorage.getItem("loopNum");
var exerciseNum = sessionStorage.getItem("exerciseNum");

function notify() {
    var startRecording="{\"type\" : \"startRecording\", \"task\" : "+exerciseNum.toString()+"}";
    socket.emit("json", startRecording);
}

$(window).load(function() {


  $( '#menuScreen' ).on("tap", function()
  {
    console.log("menuScreen.onclick");

    window.location.assign('/menu/')

  })
});
