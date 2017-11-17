var socket = io();
var loopNum = sessionStorage.getItem("loopNum");
var exerciseNum = sessionStorage.getItem("exerciseNum");
function notify() {
    var startTask="{\"type\" : \"startTask\", \"task\" : "+exerciseNum.toString()+"}";
    socket.emit("json", startTask);
}
