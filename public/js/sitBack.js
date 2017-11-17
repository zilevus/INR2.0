var socket = io();
var loopNum = sessionStorage.getItem("loopNum");
var exerciseNum = sessionStorage.getItem("exerciseNum");
function notify() {
    var startTask="{\"type\" : \"startRecording\", \"task\" : "+exerciseNum.toString()+"}";
    socket.emit("json", startTask);
}





	$( '#menuScreen' ).on("tap", function()
	{
		console.log("menuScreen.onclick");

		window.location.assign('/menu/')

});

});
