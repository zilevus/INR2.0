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

	// Because the first screen handles the getting of these variables in
	// session storage we can reuse them anywhere throughout the application
    var dat = new Date();
    var fulltime = dat.toJSON();
    //var retMsg = "{\"page\" : \"tasksetup\", \"access time\" : "+"\""+fulltime+"\""+ ", \"iteration\" : "+"\""+loopNum.toString()+"\""+"\"exercise\" : "+"\""+exerciseNum.toString()+"\""+"}";
    //    io().emit("json", retMsg);
    // sets the exercise picture equal to necessary number

		/*var patientHand =session.storage.getItem("patientHand");
		//sessionStorage.setItem("patientHand", patientHand.toString());

		if (patientHand == 1)
		{
			$('#firstSetup').attr("src", "../img/startingpos/left-diagram-start"+exerciseNum.toString()+".png");
		}
		else
		{
			$('#firstSetup').attr("src", "../img/startingpos/diagram-start"+exerciseNum.toString()+".png");
		}*/


	$('#firstSetup').attr("src", "../img/startingpos/diagram-start"+exerciseNum.toString()+".png");

	/** this for left handed patients **/
	//$('#firstSetup').attr("src", "../img/startingpos/left-diagram-start"+exerciseNum.toString()+".png");
	/** this is for left handed patients **/

	$( '#menuScreen' ).on("tap", function()
	{
		console.log("menuScreen.onclick");

		window.location.assign('/menu/')

});

$( '#backScreen' ).on("tap", function()
{
  console.log("backScreen.onclick");

  window.location.assign('/taskinit/')

});

});
