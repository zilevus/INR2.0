//var socket = io();
/*$(window).load(function() {
    /*var socket = io();
    if (socket == null) {
        socket = io();
    }*/
	// session storage?
	// sets the initial exercise

	var loopNum = sessionStorage.getItem("loopNum");
	var exerciseNum = sessionStorage.getItem("exerciseNum");

	var patientHand = 1;
	var repeatPatient = 0;





	// Because the first screen handles the getting of these variables in
	// session storage we can reuse them anywhere throughout the application
    var dat = new Date();
    var fulltime = dat.toJSON();
    //var retMsg = "{\"page\" : \"tasksetup\", \"access time\" : "+"\""+fulltime+"\""+ ", \"iteration\" : "+"\""+loopNum.toString()+"\""+"\"exercise\" : "+"\""+exerciseNum.toString()+"\""+"}";
    //    io().emit("json", retMsg);
    // sets the exercise picture equal to necessary number
	$('#firstSetup').attr("src", "../img/startingpos/diagrams-start"+".png");

});


/*
$(window).load(function() {
    var socket = io();
    	console.log("HERE first");
    	var taskLoad=false;
    	var socket=io();
			var loopNum = sessionStorage.getItem("loopNum");
			var exerciseNum = sessionStorage.getItem("exerciseNum");
    	var taskname=document.getElementById("taskName");
      var endTask="{\"type\" : \"endTask\"}";
      socket.emit("json", endTask);
    	socket.on('message',function(data){
    		console.log("HERE");
    		var html="";
    		if(data.message!=null){
    			var scoreresponse=JSON.parse(data.message);
          var s1 = scoreresponse.score1; //hand placement
          var s2 = scoreresponse.score2; //repeat




          if (handPlacement == 0)
          {
            //excelent work
            $("#scoreContent").text("Right");
          }

          else if (handPlacement == 1)
          {
            //good
            $("#scoreContent").text("Left");
          }

          if (repeatMovement == 0)
          {
            $("#scoreContent").text("Repeat");
          }

          else if (repeatMovement == 1)
          {
            //nice Try, check placement.
            $("#scoreContent").text("Not repeat!");
          }




          // Returns the success message on how the patient did and sets
          // the background color accordingly.
          var retVal = scoreToValues(handPlacement, repeatMovement);
          $("#scoreContent").text(retVal.response);
          //$("#scoreContentDiv").css("background-color", retVal.hex);

          //$("#prep").text(scoreresponse.toString());
          //$('#noticeContent').text(scoreresponse);


          console.log(scoreresponse);
    			//console.log(obj);
    			//alert(scoreresponse);
    		}else{
    			console.log("Problem",data);
    		}

    	});
      // for the error runs we want to only display feedback for the incorrect run, not total
      function scoreToValues(handPlacement, repeatMovement){
    		console.log("scoreToValues");
    		var hex="";
    		var response="";
			socket.emit(handPlacement);
			socket.emit(repeatMovement);
      if (handPlacement == 0){
          //excelent work
          response = "Right!"
          }
      else if (handPlacement == 1)
          {
            response = "Left!"
          }
      if (repeatMovement == 1 )
          {
            response = "Repeat"
          }
      else if (repeatMovement == 0 )
          {
            //nice Try, check placement.
          response = "not repeat";
          }
      else {
    			response="No score available";
    			hex="#ffffff";
    		}
    		return {
    			hex: hex,
    			response: response
    		};
	}

    /*  document.getElementById("tg-i4").innerHTML = scoreresponse.score4;
      document.getElementById("tg-i5").innerHTML = scoreresponse.score5;
      document.getElementById("tg-i6").innerHTML = scoreresponse.score6;*/
      /*var scoreSets = ["speed", "placement", "task", "compensation", "drop", "path"];
      for (var i = 1; i <=6; i++) {
          var j = document.getElementById("tg-s"+i.toString());
          var k = document.getElementById("tg-i"+i.toString());
          j.innerHTML = scoreSets[i - 1];
          k.innerHTML = scoreresponse.scoreSets;
      }*/
      // speed, placement, task, compensation, drop, path
/*

	var loopNum = sessionStorage.getItem("loopNum");
	var exerciseNum = sessionStorage.getItem("exerciseNum");
    // Thanks and then warns about induced error.
    var dat = new Date();
    var fulltime = dat.toJSON();
    //var retMsg = "{\"page\" : \"thanks\", \"access time\" : "+"\""+fulltime+"\""+ ", \"iteration\" : "+"\""+loopNum.toString()+"\""+"\"exercise\" : "+"\""+exerciseNum.toString()+"\""+"}";
    //socket.emit("json", retMsg);
    if (loopNum == "3") {
        $('#noticeContent').text("You will now repeat this activity again");
        //$('#noticeContent').text("Good job!");
    } else if (loopNum == "2") {
        $('#noticeContent').text("You will now repeat this activity again");
        //$('#noticeContent').text("Good job!");
    } else if (loopNum == "4"){
        $('#noticeContent').text("You will now complete a short survey about these tasks");
        $('#start').css('visibility', 'hidden');
        setTimeout(function(){
            window.location.assign('/survey');}, 3000);
    } else {
        $('#noticeContent').text("You will now repeat this activity again");
    }

	// Take the user to a survey, then renavigate
	// back to the initial page
	$('#start').on('click', function() {
		if (parseInt(loopNum) >= 4) {
			window.location.assign('/survey/');
		} else {
			window.location.assign('/exerciseScreen'); //it was taskinit orginally
		}
	});


});

*/
