var t0 = performance.now();
var t1 = 0;

var socket = io();
// session storage?
// sets the initial exercise
var loopNum = sessionStorage.getItem("loopNum");
var exerciseNum = sessionStorage.getItem("exerciseNum");
var dat = new Date();
var fulltime = dat.toJSON();

$(window).load(function() {

	// sets the exercise picture equal to necessary number
	$('#objectsUsed').attr("src", "../img/empty/Ex"+exerciseNum.toString()+".png");

	sessionStorage.setItem("exerciseNum", exerciseNum.toString());
	sessionStorage.setItem("loopNum", loopNum.toString());
});
function grabTime() {
    t1 = performance.now();
    var timeOn = t1 - t0;
    //var retMsg = "{\"page\" : \"activitystarted\", \"access time\" : "+"\""+fulltime+"\""+ ", \"iteration\" : "+"\""+loopNum.toString()+"\""+"\"exercise\" : "+"\""+exerciseNum.toString()+"\""+ ", \"time spent\" : "+"\""+timeOn +"\""+ "}";
    //socket.emit("json", retMsg);
}
