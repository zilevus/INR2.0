var cont = false;
$(window).load(function() {
    var socket = io();

	var popup=document.getElementById("popupBoxOnePosition");
	// session storage?

  //socket.emit("json", taskSetupReq +exerciseNum.toString()+"}")



  $( '#instructClick' ).on("tap", function()
  {
  console.log("instructClick.onclick");
  window.location.assign('/conclusion/');

  });

  $( '#button1Click' ).on("tap", function()
  {
  console.log("button1Click.onclick");

  var loopNum = sessionStorage.getItem("loopNum");
  loopNum  = 1;
  var exerciseNum = sessionStorage.getItem("exerciseNum");
  exerciseNum = 1;
  var taskSetupReq="{\"type\" : \"taskSetup\",\"task\" : ";
  socket.emit("json", taskSetupReq +"1"+"}")
  sessionStorage.setItem("exerciseNum", exerciseNum.toString());
	sessionStorage.setItem("loopNum", "0");
  window.location.assign('/exerciseScreen/')

});

  $( '#button2Click' ).on("tap", function()
  {
    console.log("button2Click.onclick");

  var loopNum = sessionStorage.getItem("loopNum");
  loopNum  = 2;
  var exerciseNum = sessionStorage.getItem("exerciseNum");
  exerciseNum = 2;
  var taskSetupReq="{\"type\" : \"taskSetup\",\"task\" : ";
  socket.emit("json", taskSetupReq +"2"+"}")
  sessionStorage.setItem("exerciseNum", exerciseNum.toString());
  sessionStorage.setItem("loopNum", "0");
  window.location.assign('/exerciseScreen/')

});

$( '#button3Click' ).on("tap", function()
{
  console.log("button3Click.onclick");

  var loopNum = sessionStorage.getItem("loopNum");
  loopNum  = 3;
  var exerciseNum = sessionStorage.getItem("exerciseNum");
  exerciseNum = 3;
  var taskSetupReq="{\"type\" : \"taskSetup\",\"task\" : ";
  socket.emit("json", taskSetupReq +"3"+"}")
  sessionStorage.setItem("exerciseNum", exerciseNum.toString());
  sessionStorage.setItem("loopNum", "0");
  window.location.assign('/exerciseScreen/')

});

$( '#button4Click' ).on("tap", function()
{
  console.log("button4Click.onclick");

  var loopNum = sessionStorage.getItem("loopNum");
  loopNum  = 4;
  var exerciseNum = sessionStorage.getItem("exerciseNum");
  exerciseNum = 4;
  var taskSetupReq="{\"type\" : \"taskSetup\",\"task\" : ";
  socket.emit("json", taskSetupReq +"4"+"}")
  sessionStorage.setItem("exerciseNum", exerciseNum.toString());
  sessionStorage.setItem("loopNum", "0");
  window.location.assign('/exerciseScreen/')

});

$( '#button5Click' ).on("tap", function()
{
  console.log("button5Click.onclick");

  var loopNum = sessionStorage.getItem("loopNum");
  loopNum  = 5;
  var exerciseNum = sessionStorage.getItem("exerciseNum");
  exerciseNum = 5;
  var taskSetupReq="{\"type\" : \"taskSetup\",\"task\" : ";
  socket.emit("json", taskSetupReq +"5"+"}")
  sessionStorage.setItem("exerciseNum", exerciseNum.toString());
  sessionStorage.setItem("loopNum", "0");
  window.location.assign('/exerciseScreen/')

});

$( '#button6Click' ).on("tap", function()
{
  console.log("button6Click.onclick");

  var loopNum = sessionStorage.getItem("loopNum");
  loopNum  = 6;
  var exerciseNum = sessionStorage.getItem("exerciseNum");
  exerciseNum = 6;
  var taskSetupReq="{\"type\" : \"taskSetup\",\"task\" : ";
  socket.emit("json", taskSetupReq +"6"+"}")
  sessionStorage.setItem("exerciseNum", exerciseNum.toString());
  sessionStorage.setItem("loopNum", "0");
  window.location.assign('/exerciseScreen/')

});



//part 2

$( '#button7Click' ).on("tap", function()
{
  console.log("button7Click.onclick");

  var loopNum = sessionStorage.getItem("loopNum");
  loopNum  = 7;
  var exerciseNum = sessionStorage.getItem("exerciseNum");
  exerciseNum = 7;
  var taskSetupReq="{\"type\" : \"taskSetup\",\"task\" : ";
  socket.emit("json", taskSetupReq +"7"+"}")
  sessionStorage.setItem("exerciseNum", exerciseNum.toString());
  sessionStorage.setItem("loopNum", "0");
  window.location.assign('/exerciseScreen/')

});

$( '#button8Click' ).on("tap", function()
{
  console.log("button8Click.onclick");

var loopNum = sessionStorage.getItem("loopNum");
loopNum  = 8;
var exerciseNum = sessionStorage.getItem("exerciseNum");
exerciseNum = 8;
var taskSetupReq="{\"type\" : \"taskSetup\",\"task\" : ";
socket.emit("json", taskSetupReq +"8"+"}")
sessionStorage.setItem("exerciseNum", exerciseNum.toString());
sessionStorage.setItem("loopNum", "0");
window.location.assign('/exerciseScreen/')

});

$( '#button9Click' ).on("tap", function()
{
console.log("button9Click.onclick");

var loopNum = sessionStorage.getItem("loopNum");
loopNum  = 9;
var exerciseNum = sessionStorage.getItem("exerciseNum");
exerciseNum = 9;
var taskSetupReq="{\"type\" : \"taskSetup\",\"task\" : ";
socket.emit("json", taskSetupReq +"9"+"}")
sessionStorage.setItem("exerciseNum", exerciseNum.toString());
sessionStorage.setItem("loopNum", "0");
window.location.assign('/exerciseScreen/')

});

$( '#button10Click' ).on("tap", function()
{
console.log("button10Click.onclick");

var loopNum = sessionStorage.getItem("loopNum");
loopNum  = 10;
var exerciseNum = sessionStorage.getItem("exerciseNum");
exerciseNum = 10;
var taskSetupReq="{\"type\" : \"taskSetup\",\"task\" : ";
socket.emit("json", taskSetupReq +"10"+"}")
sessionStorage.setItem("exerciseNum", exerciseNum.toString());
sessionStorage.setItem("loopNum", "0");
window.location.assign('/exerciseScreen/')

});

$( '#button11Click' ).on("tap", function()
{
console.log("button11Click.onclick");

var loopNum = sessionStorage.getItem("loopNum");
loopNum  = 11;
var exerciseNum = sessionStorage.getItem("exerciseNum");
exerciseNum = 11;
var taskSetupReq="{\"type\" : \"taskSetup\",\"task\" : ";
socket.emit("json", taskSetupReq +"11"+"}")
sessionStorage.setItem("exerciseNum", exerciseNum.toString());
sessionStorage.setItem("loopNum", "0");
window.location.assign('/exerciseScreen/')

});

$( '#button12Click' ).on("tap", function()
{
console.log("button12Click.onclick");

var loopNum = sessionStorage.getItem("loopNum");
loopNum  = 12;
var exerciseNum = sessionStorage.getItem("exerciseNum");
exerciseNum = 12;
var taskSetupReq="{\"type\" : \"taskSetup\",\"task\" : ";
socket.emit("json", taskSetupReq +"12"+"}")
sessionStorage.setItem("exerciseNum", exerciseNum.toString());
sessionStorage.setItem("loopNum", "0");
window.location.assign('/exerciseScreen/')

});



    var dat = new Date();
    var fulltime = dat.toJSON();




	$( '#exit' ).on("tap", function() {
    setTimeout(function(){
      $('#video').css('visibility', 'visible');
  		console.log("exit.onclick");
  		console.log("");
  		popup.style.display="none";
    }, 500);

	});

});
