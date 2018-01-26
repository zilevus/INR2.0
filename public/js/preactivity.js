var socket = io();
var loopNum = sessionStorage.getItem("loopNum");
var exerciseNum = sessionStorage.getItem("exerciseNum");
function notify() {
    var startTask="{\"type\" : \"startTask\", \"task\" : "+exerciseNum.toString()+"}";
    socket.emit("json", startTask);
}

/*function notify() {
    var startTask="{\"type\" : \"startTask\", \"task\" : "+exerciseNum.toString()+"}";
    socket.emit("json", startTask);
    socket.on("json", function(data){
      console.console.log(data);
    });
}*/
