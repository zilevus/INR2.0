var cont = false;
$(window).load(function() {
    var socket = io();

	var popup=document.getElementById("popupBoxOnePosition");
	// session storage?
	// sets the initial exercise
	var loopNum = sessionStorage.getItem("loopNum");
	var exerciseNum = sessionStorage.getItem("exerciseNum");
  //var taskSetupReq="{\"type\" : \"taskSetup\",\"task\" : ";
  //socket.emit("json", taskSetupReq +exerciseNum.toString()+"}")


    var dat = new Date();
    var fulltime = dat.toJSON();
    //var retMsg = "{\"page\" : \"videosetup\", \"access time\" : "+"\""+fulltime+"\""+ ", \"iteration\" : "+"\""+loopNum.toString()+"\""+"\"exercise\" : "+"\""+exerciseNum.toString()+"\""+"}";
    //socket.emit("json", retMsg);
    // Because the first screen handles the getting of these variables in
	// session storage we can reuse them anywhere throughout the application


  loopNum = parseInt(loopNum);
  exerciseNum = parseInt(exerciseNum);
  loopNum = loopNum+1;

  if (exerciseNum.toString() == "NaN") /// good dont change
  {
    exerciseNum = 1;
    loopNum = 1;
  }

  sessionStorage.setItem("exerciseNum", exerciseNum.toString());
  sessionStorage.setItem("loopNum", loopNum.toString());

  if (loopNum > 4) //good dont change
  {
    //exerciseNum = 1;
    loopNum = 1;
    exerciseNum++;

  }
  if (loopNum > 2)
  {
      setTimeout(function(){
      window.location.assign('/videoExercise/');}, 3000);
  }
  else if (loopNum <= 2 )
  {
    setTimeout(function(){
      window.location.assign('/taskinit/');}, 3000);
  }
  else {
  setTimeout(function(){
    window.location.assign('/taskinit/');}, 3000);
}

  if (loopNum > 4) //good dont change
  {
    //exerciseNum = 1;
    loopNum = 1;
    exerciseNum++;

  }



  if (loopNum == 1 && exerciseNum == 13)
  {
    window.location.assign('/studyend/');
  }
	$('#exerciseTitle').text("Exercise " + exerciseNum.toString());

  $( '#menuScreen' ).on("tap", function()
  {
    console.log("menuScreen.onclick");

    window.location.assign('/menu/')

});

$( '#backScreen' ).on("tap", function()
{
  console.log("backScreen.onclick");

  window.location.assign('/conclusion/')

});
  //exerciseNum++;
  //loopNum = parseInt(loopNum);
  //exerciseNum = parseInt(exerciseNum);
  //loopNum = loopNum+1;
  //exerciseNum = exerciseNum+1;
  /*if (loopNum > 4)
  {
    loopNum = 1;
    exerciseNum++;
  }*/


  $('#taskTitle').text("Repetition " + loopNum.toString());



    //#diagIMG(src="../img/icons-all/diagrams-ex1.png")
  $('#diagIMG').attr("src", "../img/instructions/diagrams-ex"+exerciseNum.toString()+".png")
	// sets the exercise picture equal to necessary number
	$('#videodiag').attr("src", "../img/movies/INR-Exercise"+exerciseNum.toString()+".MOV");
    $( '#video' ).on("tap", function() {
		console.log("video.onclick");
		var video = document.getElementById('videodiag');
        //video.webkitRequestFullscreen();
    setTimeout(function(){
      video.currentTime=0;
  		video.play();
  		popup.style.display="block";
  		$('#video').css('visibility', 'hidden');
    }, 500);

	})


	$( '#exit' ).on("tap", function() {
    setTimeout(function(){
      $('#video').css('visibility', 'visible');
  		console.log("exit.onclick");
  		console.log("");
  		popup.style.display="none";
    }, 500);

	});

});
