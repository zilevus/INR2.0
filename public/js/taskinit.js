var socket = io();

$(window).load(function() {

	// session storage?
	// sets the initial exercise
	var loopNum = sessionStorage.getItem("loopNum");
	var exerciseNum = sessionStorage.getItem("exerciseNum");
	if (loopNum == null) {
		loopNum = 0;
	} loopNum++;

	if (exerciseNum == null) {
		exerciseNum = 1;
	} if (loopNum == 5) {
		exerciseNum++;
		loopNum = 1;
	} // executes each cycle 4 times, two for the good runs, two for induced error.
    var dat = new Date();
    var fulltime = dat.toJSON();
    //var retMsg = "{\"page\" : \"taskinit\", \"access time\" : "+"\""+fulltime+"\""+ ", \"iteration\" : "+"\""+loopNum.toString()+"\""+"\"exercise\" : "+"\""+exerciseNum.toString()+"\""+"}";
    //if (socket != null) {
    //    socket.emit("json", retMsg);
    //}
	// sets the exercise picture equal to necessary number
	$('#objectsUsed').attr("src", "../img/empty/Ex"+exerciseNum.toString()+".png");

	sessionStorage.setItem("exerciseNum", exerciseNum.toString());
	sessionStorage.setItem("loopNum", loopNum.toString());

	$( '#menuScreen' ).on("tap", function()
	{
		console.log("menuScreen.onclick");

		window.location.assign('/menu/')

});
});
