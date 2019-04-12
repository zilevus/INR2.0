var socket = io();
var loopNum = sessionStorage.getItem("loopNum");
var exerciseNum = sessionStorage.getItem("exerciseNum");

function sendresponse() {
    var cont = false;
    var taskSetupReq="{\"type\" : \"taskSetup\",\"task\" : " + exerciseNum.toString() +"}";
    socket.emit("json", taskSetupReq);
    socket.on('message',function(data){
        console.log("HERE");
        var html="";
        if(data.message!=null){
            var ready=JSON.parse(data.message);
            if (ready.error1 == "1") {
              var systemReady="{\"type\" : \"SystemReady\",\"task\" : " +exerciseNum.toString()+"}";
              socket.emit("json", systemReady);
              window.location.assign('/preactivity/')
            } else if (ready.error1 == 1) {
              var systemReady="{\"type\" : \"SystemReady\",\"task\" : " +exerciseNum.toString()+"}";
              socket.emit("json", systemReady);
              window.location.assign('/preactivity/')
            }
            //console.log(obj);
            //alert(scoreresponse);
        }else{
            console.log("Problem",data);
        }

    });

    window.location.assign('/preactivity/')

}
