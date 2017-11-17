$(window).load(function() {
    var socket = io();
    	console.log("HERE first");
    	var taskLoad=false;
    	var socket=io();
    	var taskname=document.getElementById("taskName");
      var endTask="{\"type\" : \"endTask\"}";
      socket.emit("json", endTask);
    	socket.on('message',function(data){
    		console.log("HERE");
    		var html="";
    		if(data.message!=null){
    			var scoreresponse=JSON.parse(data.message);
          var s1 = scoreresponse.score1; //speed
          var s2 = scoreresponse.score2; //placement
          var s3 = scoreresponse.score3; //task
          var s4 = scoreresponse.score4; //compensation
          var s5 = scoreresponse.score5; //drop
          var s6 = scoreresponse.score6; //path

          var speedScore = Math.round(s1);
          var placScore = Math.round(s2);
          var taskScore = Math.round(s3);
          var compScore = Math.round(s4);

           var avgSC;
           avgSC = (speedScore+compScore)/2;
           avgSC = Math.round(avgSC);
          var avg = Math.round((s1 + s2 + s3 + s4 + s5 + s6) / 6);



          if (placScore >= 4 && taskScore >= 4 && avgSC >=4)
          {
            //excelent work
            $("#scoreContent").text("Excellent work!");
          }

          else if (placScore >= 4 && taskScore >= 4 && avgSC < 4)
          {
            //good
            $("#scoreContent").text("Good job!");
          }

          else if (taskScore < 4 )
          {
            //nice try!
            $("#scoreContent").text("Nice try!");
          }

          else if (placScore < 4)
          {
            //nice Try, check placement.
            $("#scoreContent").text("Nice try! Check placement.");
          }




          // Returns the success message on how the patient did and sets
          // the background color accordingly.
          var retVal = scoreToValues(placScore, taskScore, avgSC);
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
      function scoreToValues(placScore, taskScore, avgSC){
    		console.log("scoreToValues");
    		var hex="";
    		var response="";
      if (placScore >= 4 && taskScore >= 4 && avgSC >=4){
          //excelent work
          response = "Excellent work!"
          }
      else if (placScore >= 4 && taskScore >= 4 && avgSC < 4)
          {
            response = "Good job!"
          }
      else if (taskScore < 4 )
          {
            response = "Nice try!"
          }
      else if (placScore < 4)
          {
            //nice Try, check placement.
          response = "Nice try! Check placement.";
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
		if (parseInt(loopNum) == 4) {
			window.location.assign('/survey/');
		} else {
			window.location.assign('/exerciseScreen'); //it was taskinit orginally
		}
	});


});
