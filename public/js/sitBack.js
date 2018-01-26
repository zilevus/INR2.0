
var socket = io();
var loopNum = sessionStorage.getItem("loopNum");
var exerciseNum = sessionStorage.getItem("exerciseNum");

function notify() {
    var startRecording="{\"type\" : \"startRecording\", \"task\" : "+exerciseNum.toString()+"}";
    socket.emit("json", startRecording);

}




if (loopNum == null) {
  loopNum = 0;
} //loopNum++;

if (exerciseNum == null) {
  exerciseNum = 1;
} if (loopNum == 5) {
  exerciseNum++;
  loopNum = 1;
}

sessionStorage.setItem("exerciseNum", exerciseNum.toString());
sessionStorage.setItem("loopNum", loopNum.toString());

$(window).load(function() {


  $( '#menuScreen' ).on("tap", function()
  {
    console.log("menuScreen.onclick");

    window.location.assign('/menu/')

  })


  $( '#backScreen' ).on("tap", function()
  {
    console.log("backScreen.onclick");

    window.location.assign('/videoExercise/')

  })

});
