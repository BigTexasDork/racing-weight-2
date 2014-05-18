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
git clone git@github.com:BigTexasDork/racing-weight-2.git
```
else
```shell
git clone https://github.com/BigTexasDork/racing-weight-2.git
```

* start STS
* switch to workspace {WorkspaceDir}
* File -> Import -> Maven -> Existing maven projects
* navigate to pom.xml
* Run -> Run As -> Run on Server
* TEST IN BROWSER [http://localhost:8080/racing-weight-2](http://localhost:8080/racing-weight-2)


Notes
=====
There's an init bean commented out in spring-data.xml that will delete, then populate default data
