Description
===========
Racing Weight Meal Database using MongoDB - NOT READY FOR PRIME TIME


Building
========
prerequisites: Spring Tool Suite, MongoDB

Create a workspace:
```shell
mkdir {WorkspaceDir}
cd {WorkspaceDir}
```
if using SSH
```shell
git clone git@github.com:BigTexasDork/racing-weight-1.git
```
else
```shell
git clone https://github.com/BigTexasDork/racing-weight-1.git
```
initial build
```shell
cd racing-weight-1/
mvn tomcat:run
```
TEST IN BROWSER [http://localhost:8080/racing-weight-1](http://localhost:8080/racing-weight-1) 

stop Tomcat
```shell
ctl-c
```
create Tomcat project
```shell
mvn eclipse:eclipse -Dwtpversion=2.0
```
* start STS
* switch to workspace {WorkspaceDir}
* File -> Import -> General -> Existing projects into workspace
* select project in Package Explorer
* Run -> Run As -> Run on Server
* TEST IN BROWSER [http://localhost:8080/racing-weight-1](http://localhost:8080/racing-weight-1)


Notes
=====
There's an init bean commented out in spring-data.xml that will delete, then populate default data
