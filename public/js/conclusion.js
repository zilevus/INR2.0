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
				var s1 = scoreresponse.score1; //hand
				var s2 = scoreresponse.score2; //repeat


				var right = Math.round(s1);
				var repeat = Math.round(s2);

				if (right == 1)
				{
						$("#scoreContent").text("right!");
				}

				else if (repeat == 0 )
				{
					$("#scoreContent").text("repeat!");
				}

			var retVal = scoreToValues(right, repeat);
			$("#scoreContent").text(retVal.response);
			console.log(scoreresponse);

			function scoreToValues(right, repeat){
				console.log("scoreToValues");
				var hex="";
				var response="";
			if (right == 1 ){
					//excelent work
					response = "Excellent work!"
					}
			else if (right == 0)
					{
						response = "Good job!"
					}
			else if (repeat == 0 )
					{
						response = "Nice try!"
					}
			else if (repeat == 1)
					{
						//nice Try, check placement.
					response = "Nice tryyyy!";
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

				//if its rightHanded send 1
				// if left handed send 0
				//if repeatFlag send 1
				// if notRepeatFlag send 0
	// Because the first screen handles the getting of these variables in
	// session storage we can reuse them anywhere throughout the application
    var dat = new Date();
    var fulltime = dat.toJSON();
    //var retMsg = "{\"page\" : \"tasksetup\", \"access time\" : "+"\""+fulltime+"\""+ ", \"iteration\" : "+"\""+loopNum.toString()+"\""+"\"exercise\" : "+"\""+exerciseNum.toString()+"\""+"}";
    //    io().emit("json", retMsg);
    // sets the exercise picture equal to necessary number
	$('#firstSetup').attr("src", "../img/startingpos/diagrams-start"+".png");

});
