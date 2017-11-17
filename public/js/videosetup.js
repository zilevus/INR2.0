var cont = false;
$(window).load(function() {
    var socket = io();

	var popup=document.getElementById("popupBoxOnePosition");
	// session storage?
	// sets the initial exercise
	var loopNum = sessionStorage.getItem("loopNum");
	var exerciseNum = sessionStorage.getItem("exerciseNum");
    var taskSetupReq="{\"type\" : \"taskSetup\",\"task\" : ";
    socket.emit("json", taskSetupReq +exerciseNum.toString()+"}")


    var dat = new Date();
    var fulltime = dat.toJSON();
    //var retMsg = "{\"page\" : \"videosetup\", \"access time\" : "+"\""+fulltime+"\""+ ", \"iteration\" : "+"\""+loopNum.toString()+"\""+"\"exercise\" : "+"\""+exerciseNum.toString()+"\""+"}";
    //socket.emit("json", retMsg);
    // Because the first screen handles the getting of these variables in
	// session storage we can reuse them anywhere throughout the application
	$('#exerciseTitle').text("Exercise " + exerciseNum.toString());
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
