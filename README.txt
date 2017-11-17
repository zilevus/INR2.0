**GITHUB REPOSITORY**
https://github.com/mephan/INR.git


Currently we do not implement a 'demo mode', every run is done as if the user
is participating in a full study.

Running the application is as easy as tapping on its icon.

** Important things to keep in mind **
Back buttons have been disabled and full screen has been forced. Double tapping
still causes a zoom affect which has not been disabled. If for any reason the
user exits the application through the home button, the ipad sleeping or the
power button. They will be required to start over as the local storage used
for running the application will reset. This is important as they cannot switch
between the application and another app without having the start over. Each
new user will need to access the application from the ipad main screen for
consistency.

Should the application icon get deleted the following steps will restore it.
  1. Run the server (bash-4.2 ~$ node app.js) in the directory of the
      application.
  2. Open safari on the iPad.
  3. Type in the IP address of the server, followed by ':3001' into the address
      bar of the safari window.
          3.5. The IP of the server can be found by typing (bash-4.2~$ ifconfig)
                on a linux machine and (cmd> ipconfig)
  4. Click on the square icon with arrow pointing out (should be upper right corner)
  5. Tap the 'add to homescreen' option
  6. Name it - and launch it as normal.


Basic Modules
-------------------------------------------------------------------------------
The INR application uses NodeJS as its backbone. It is supported using the
ExpressJS framework as well as components of Socket.io and stormpath.


Templating Engine
-------------------------------------------------------------------------------
We are using Jade as the templating engine for the rendering of HTML as it
allows for fast prototyping, easy reusability, cleaner looking code and
the integrating of javascript.


Use of Socket.io
-------------------------------------------------------------------------------
Sockets are currently being used as the main source of communication between
the user and those monitoring the users interaction. Currently the sockets
monitor the current page of the user, the exercise that is being performed,
which iteration of the exercise is being performed, the time of day and any
interaction with the page that the user inputs.

HOST : The CV server maintained by Jin-Woo (the gigabyte)
PORT : 8888
Local port is 3001

Use of NativeScript
--------------------------------------------------------------------------------
The application should easily port to NativeScript but at the time of writing does
not employ it. The underlying idea was to keep this code platform agnostic in
the hopes that users could make it work with anything available to them.
The current understanding is that NativeScript will allow us to create new
files on the iPad (Or other mobile device) filesystem which we will later be
able to access. This is a feature that we are looking to get working soon as we
would like to move towards a system that is not reliant on a network connection.

We would like to implement this as soon as possible. Currently images and video
are being hosted from the CV server and this is causing immense amounts of lag
if we are able to keep these files client side using the NativeScript wrapper
and storing them on the ipad, it should be much faster than if we are serving
them from the server.


Induced Errors for Patients
--------------------------------------------------------------------------------
Currently we are undergoing a period where we would like the users to perform
certain induced errors to help us train the system. In order to do this we are
instructing them to perform certain errors. The application - upon startup -
currently attempts to read a file from the serving computer, parses it, and
loads it into session storage as a JSON string where it can later be parsed
back into JSON and accessed as an array to be used for errors.

The idea behind this is that the serving computer supplies a file with a new
induced error on each line, and that they are in the order that we would like
them to appear during application runtime.

** This is contained in the readfileforerrors.js file **

Scoring is currently done as an average of all scores returned, and converted
into a text string that can be read by the patient. 


Instructions for Convenience --

Adding a new screen to the application --
-------------------------------------------------------------------------------
Adding a new screen is a six step process.
    1. Create a new .jade file and structure the html in the manner of how you
    would like it to look.
    2. Add the route to 'index.js' in the routes directory
    3. Add the route to 'app.js'
    4. Connect the new page to the system by way of a redirect of some sort
    (see home.jade for redirect idea)
    5. Include the following jade macro --
        meta(name='apple-mobile-web-app-capable', content='yes')
    as this will allow the screen to remain in full screen mode when renavigating.
    6. Any and all screen redirects need to be made using the following command;
        window.location.assing('<new screen location>');
        using an ordinary html replacement will cause the page to reload and
        full screen capability will be lost
            -- you will also risk a socket disconnect which can cause the
            terminal output to look a little buggy.

        ** All communications back to the server have been disabled except for
         the JSON that was requested by Jin-Woo hence, commented out, all stubs
         contain the screen being accessed, the time of access and any
         additional information that may be necessary. Currently the parser
         used on the gigabyte will fault if it attempts to parse anything
         that is not the responses being sent to it in the current version
         of the code, move to change the parser if it proves useful to pass
         back further information. **
