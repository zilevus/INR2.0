//var socket = io();
$(window).load(function() {
    /*var socket = io();
    if (socket == null) {
        socket = io();
    }*/
	// session storage?
	// sets the initial exercise


	var loopNum = sessionStorage.getItem("loopNum");
	var exerciseNum = sessionStorage.getItem("exerciseNum");
	function notify() {
	    var startTask="{\"type\" : \"startRecording\", \"task\" : "+exerciseNum.toString()+"}";
	    socket.emit("json", startTask);
	}
	// Because the first screen handles the getting of these variables in
	// session storage we can reuse them anywhere throughout the application
    var dat = new Date();
    var fulltime = dat.toJSON();
    //var retMsg = "{\"page\" : \"tasksetup\", \"access time\" : "+"\""+fulltime+"\""+ ", \"iteration\" : "+"\""+loopNum.toString()+"\""+"\"exercise\" : "+"\""+exerciseNum.toString()+"\""+"}";
    //    io().emit("json", retMsg);
    // sets the exercise picture equal to necessary number




	$( '#menuScreen' ).on("tap", function()
	{
		console.log("menuScreen.onclick");

		window.location.assign('/menu/')

});

});
