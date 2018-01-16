var express = require('express')
  , routes = require('./routes');
var stormpath = require('express-stormpath');
const Console = require('console').Console;
var app = express();
var http=require('http').Server(app);
var socket = require('socket.io')(http);
var net = require('net');
var client=new net.Socket();
var curTaskID=-1;
// Creates a universal logger that shows up in the terminal
const logger = new Console(process.stdout, process.stderr);
//var ak='128.237.208.246';
/*var client = net.connect(8888,'128.237.166.175',function(){
  console.log('Connected');
});*/
var HOST='localhost'; //Change this back to localhost

//var HOST='128.173.21.172'; //Change this to whomever is hosting
var PORT=8888;
client.connect(PORT,HOST,function(){
  console.log('Connected');
});
var io = require('socket.io').listen(app.listen(3001));
client.on('data', function(data) {
  console.log(data.toString());
  io.emit('message', { message: data.toString() });
});
// attempts to reaqcuire the host if connection is not established
client.on('error',function(err){
  if(err.code == 'ECONNREFUSED'||'ECONNRESET'){
    // sets the timeout to 1 seconds
    client.setTimeout(1000,function(){
      client.connect(PORT,HOST,function(){
      });
    });
  }
  // disabling this stops the socket from disconnecting for some reason
  //setTimeout(setupConnection,10000);
});

client.on('disconnect', function(err) {
    client.setTimeout(500, function(){
        client.connect(PORT, HOST, function(){
          logger.log("disconnected server retrying");
        });
    });
});

app.use(express.static(__dirname+"/public"));
app.set('views', './views');
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);
app.get('/', function(req, res) {
  res.render('home', {
    title: 'Welcome'
  });
});
app.get('/taskinit/', routes.taskinit);
app.get('/tasksetup/', routes.tasksetup);
app.get('/survey/', routes.survey);
app.get('/home/', routes.home);
app.get('/videosetup/', routes.videosetup);
app.get('/armprep/', routes.armprep);
app.get('/preactivity/', routes.preactivity);
app.get('/activitystarted/', routes.activitystarted);
app.get('/thanks/', routes.thanks);
app.get('/workspace/', routes.workspace);
app.get('/instructions/', routes.instructions);
app.get('/conclusion/', routes.conclusion);
app.get('/activityObject/', routes.activityObject);
app.get('/setupInstructions/', routes.setupInstructions);
app.get('/recordInstructions/', routes.recordInstructions);
app.get('/videoExercise/', routes.videoExercise);
app.get('/sitBack/', routes.sitBack);
app.get('/exerciseScreen/', routes.exerciseScreen);
app.get('/studyend/', routes.studyend);
app.get('/demoScreen/', routes.demoScreen);
app.get('/demoTaskInit/', routes.demoTaskInit);
app.get('/demoTaskSetup/', routes.demoTaskSetup);
app.get('/demoVideoExercise/', routes.demoVideoExercise);
app.get('/demoSitBack/', routes.demoSitBack);
app.get('/demoPreActivity/', routes.demoPreActivity);
app.get('/demoActivityStarted/', routes.demoActivityStarted);
app.get('/demoThanks/', routes.demoThanks);
app.get('/menu/', routes.menu);

var startTask="{\"type\" : \"startTask\"}";
var resetTask="{\"type\" : \"resetTask\"}";
var endTask="{\"type\" : \"endTask\"}";
var enable="{\"type\" : \"request\",\"enableEvent\": true}";
var quit="{\"type\" : \"quit\"}";
var disable="{\"type\" : \"request\",\"enableEvent\": false}";
var caseConnect="{\"type\" : \"CaseConnected\"}";
var objectplaced="{\"type\" : \"ObjectsPlaced\"}";
var beginTask="{\"type\" : \"BeginTask\"}";
var startRecording="{\"type\" : \"startRecording\"}";

io.on('connection', function (socket) {
  //console.log("CONNECTIONS");
  socket.on('enableJSON',function(){
    console.log("enable");
    client.write(enable);

  });

  socket.on('json',function(data){
    console.log(data);
    client.write(data);
  });

    socket.on('startTask',function(){
    client.write(startTask);
    console.log(startTask);

  });
    socket.on('startRecording',function(){
    client.write(startRecording);
    console.log(startRecording);

  });
  socket.on('resetTask',function(){
    client.write(resetTask);
    console.log(resetTask);

  });
  socket.on('endTask',function(){
    client.write(endTask);
    console.log(endTask);

  });
  socket.on('quit',function(){
    client.write(quit);
    console.log(quit);

  });




});
/*function myIP(){ var vi="uses java to get the users local ip number"
    var yip2=java.net.InetAddress.getLocalHost();
    var yip=yip2.getHostAddress();
  return yip;
}//end myIP
*/
/*var mysql      = require('mysql');
var connection = mysql.createConnection({
  user     : 'root',
  password : 'root',
  host     : 'localhost:3306',
  database: 'Regrasp',
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

connection.connect(function(err) {
 if(err){
  console.log('db_connection_err',err);
  return;
 }
  console.log("HI");
});
var post  = "select * from TestTable";
var query = connection.query(post, function(err, result) {
  if(err){
    console.log('db_connection_err',err);
  }else{
    console.log("this is result ",result);
  }
  // Neat!
});
//console.log(query.sql);
console.log("worked"); // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'
*/

//app.listen(3001); //changed this because of interference coming from somewhere...
