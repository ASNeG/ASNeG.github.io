---
title: OPC UA Web Server
project: opcuawebserver
description:  >-
    ASNeG OPC UA Web Server is a Web application which provides access to OPC UA data via the Internet.
layout: project_page
about: |

  ASNeG OPC UA Web Server is an open source OP UA-Web application based on [ASNeG's OPC UA Stack](/projects/opcuastack). 
  It provides a simple way to connect modern Web applications with the OPC UA technology. Any process data can be displayed 
  in realtime in Web applications using the ASNeG OPC UA Web Server.

  ## Structure

  In general, the Web Server is an OPC UA client which has JSON API to translate OPC UA data via WebSocket protocol.
  It provides data through two WebSocket endpoints:

  * **Web Sokcet Servers** provides data via simplified JSON API and needs that the all OPC UA variables are 
  discribed in XML configuration
  * **Web Socket Gateway** provides data via OPC UA JSON mapping. In other words you must form requests and parse
  response according OPC UA Specification. This mode is the best for people are familiar to OPC UA technology and it
  needs no additional XML configuration.

  ![OPC UA Web Server Structure](/images/opcuawebserver_structure.png)

  In additional, the Web Server provides **Web Panel** for visualisation of the process data. **Web Panel** uses 
  a Java Script library of visual components which can be bound with OPC UA variables. You can use it like a very 
  simple SCADA system configured by XML files.


  ## Development Status

  ASNeG OPC UA Web Server is in development stage. It means, we need to add some features (like SSL for HTTP and WebSocket),
  make tests and write some minimum of the documentation. See [issues](https://github.com/ASNeG/OpcUaWebServer/issues) for
  more information.

github_repo: ASNeG/OpcUaWebServer
rtd_name: opcuawebserver
releases:
---