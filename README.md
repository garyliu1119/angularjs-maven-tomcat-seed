#Intro
#####This is a seed for developing a single page application using  [angular.js](http://www.angularjs.org/) as client framework and a jee compliant (capable to deploy a war) web server as front service server (e.g [tomcat](http://http://tomcat.apache.org/)). 
##Usage
#####The project uses grunt for managing the angularjs client app and maven for managing the server side app.
#####Use `grunt develop` to start the development session on the files under the angularjs-client directory. Whenever you'll change a file grunt will copy the changed file under src/main/webapp directory. Hence you could use `mvn tomcat7:run` to run the embedded maven tomcat 7 server and to navigate the app under [http://localhost:8080/angularjs-maven-tomcat-seed/app/index.html](http://localhost:8080/angularjs-maven-tomcat-seed/app/index.html)   