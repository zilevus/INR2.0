exports.taskinit=function(req,res){
	res.render('taskinit',{title:"Task Init"});
}
exports.survey=function(req, res){
	res.render('survey', {title:"survey"});
}
exports.tasksetup=function(req, res) {
  res.render('tasksetup', {title:"Task Setup"});
}
exports.home=function(req, res) {
	res.render('home', {title:"Home"});
}
exports.videosetup=function(req, res) {
	res.render('videosetup', {title:"Video"});
}
exports.armprep=function(req, res) {
	res.render('armprep', {title:"Prep Arm"});
}
exports.preactivity=function(req, res) {
	res.render('preactivity', {title:"Push To Start"});
}
exports.activitystarted=function(req, res) {
	res.render('activitystarted', {title:"Activity In Progress"});
}
exports.thanks=function(req, res) {
	res.render('thanks', {title:"Thank You"});
}
exports.studyend=function(req, res) {
    res.render('studyend', {title:"Study Concluded"});
}
exports.workspace=function(req, res) {
		res.render('workspace', {title:"Workspace"});
}
exports.instructions=function(req, res){
		res.render('instructions', {title:"Instructions"});
}
exports.conclusion=function(req, res){
	 res.render('conclusion', {title:"Conclusion"});
}
exports.activityObject=function(req,res){
	res.render('activityObject', {title:"Activity Object"});
}
exports.setupInstructions=function(req,res){
	res.render('setupInstructions', {title: "Setup Instructions"});
}
exports.recordInstructions=function(req,res){
	res.render('recordInstructions', {title: "Record Instructions"});
}
exports.videoExercise=function(req,res){
	res.render('videoExercise', {title: "Video Exercise"});
}
exports.sitBack=function(req,res){
	res.render('sitBack', {title: "Sit Back"});
}
exports.exerciseScreen=function(req,res){
	res.render('exerciseScreen', {title: "Exercise Screen"});
}
exports.demoScreen=function(req,res){
	res.render('demoScreen', {title: "Demo Screen"});
}
exports.demoTaskInit=function(req,res){
	res.render('demoTaskInit', {title: "Demo TaskInit"});
}
exports.demoTaskSetup=function(req,res){
	res.render('demoTaskSetup', {title: "Demo TaskSetup"});
}
exports.demoVideoExercise=function(req,res){
	res.render('demoVideoExercise', {title: "Demo videoExercise"});
}
exports.demoSitBack=function(req,res){
	res.render('demoSitBack', {title: "Demo SitBack"});
}
exports.demoPreActivity=function(req,res){
	res.render('demoPreActivity', {title: "Demo PreActivity"});
}
exports.demoActivityStarted=function(req,res){
	res.render('demoActivityStarted', {title: "Demo ActivityStarted"});
}
exports.demoThanks=function(req,res){
	res.render('demoThanks', {title: "Demo Thanks"});
}
exports.menu=function(req,res){
	res.render('menu', {title: "Menu"});
}
