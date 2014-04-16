@echo off

REM Windows script for running e2e tests
REM You have to run server first
REM
REM Requirements:
REM - NodeJS (http://nodejs.org/)
REM - Protractor (npm install -g protractor)

REM set BASE_DIR=%~dp0
REM webdriver-manager update
protractor "..\..\config\protractor-conf.js" %*
