---
title: ASNeG-DEMO
project: asnegdemo
description:  >-
  ASNeG-Demo is a demo OPC UA application showing how developers can use [OPC UA Stack](/projects/opcuastack)
layout: project_page
about: |
  ASNeG-Demo provides examples of all significant functions of the [ASNeG OPC UA Stack](/projects/opcuastack).

  You can found them in the following C++ classes:

  * [Alarm.cpp](https://github.com/ASNeG/ASNeG-Demo/blob/master/src/ASNeG-Demo/Library/Alarm.cpp)
    sends an alarm each 60 seconds
  * [Authentication.cpp](https://github.com/ASNeG/ASNeG-Demo/blob/master/src/ASNeG-Demo/Library/Authentication.cpp)
    provides user authentication and access control to several OPC UA nodes
  * [DemoLibrary.cpp](https://github.com/ASNeG/ASNeG-Demo/blob/master/src/ASNeG-Demo/Library/DemoLibrary.cpp)
    entry point of the application
  * [Event.cpp](https://github.com/ASNeG/ASNeG-Demo/blob/master/src/ASNeG-Demo/Library/Event.cpp)
    sends events of several types
  * [Function.cpp](https://github.com/ASNeG/ASNeG-Demo/blob/master/src/ASNeG-Demo/Library/Function.cpp)
    implements sever user methods witch different signatures that can be called with OPC UA Client
  * [HistoricalAccess.cpp](https://github.com/ASNeG/ASNeG-Demo/blob/master/src/ASNeG-Demo/Library/HistoricalAccess.cpp)
    shows how to get historical data of values and events
  * [TestFolderLib.cpp](https://github.com/ASNeG/ASNeG-Demo/blob/master/src/ASNeG-Demo/Library/TestFolderLib.cpp)
    represents a folder with variables of different types

  **Notice**: All the examples use low-level API. Since [OPC UA Stack 3.7.0](/news/2019/04/01/opcuastack-release-3.7.0.html) you
  can use a more friendly interface.

github_repo: ASNeG/ASNeG-Demo
rtd_name:
releases:
  - version: 3.3.3
    downloads:
---
