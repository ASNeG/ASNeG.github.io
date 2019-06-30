---
layout: post
title:  Development Diary N1
description: OPC UA Stack's roadmap, OPC UA Web Server
date:   2019-06-29 17:22:22 +0500
categories: news
github_comments_issueid: 3
tags: [opcuastack, opcuawebserver, diary]
---

Hi everyone,

we haven't been writing anything new for two months and have decided to let you know about
our development progress and plans without waiting for some new release or event.

### OPC UA Stack's Project Roadmap

Currently, we are focused on developing the 4th version of the stack and all the new features
will be added there. It means release 3.8.0 is the last minor release. The reason is a
huge difference between the two branches. Version 4 uses code generation for OPC UA standard types
that saves much time but makes hard to maintain the two branches. Of course, we keep on
fixing bugs and supporting our users, who use the 3rd version.

Information about the future releases 4.0.0 and 4.1.0 you can find
[here](https://opcuastack.readthedocs.io/en/release4/#project-roadmap).

### OPC UA Web Server

OPC UA is a powerful technology but isn't so good at the Internet. SOAP specification is deprecated, 
and HTTP\HTTPS isn't used as an OPC UA transport layer widely. Nowadays, we don't know any Javasctipt library that
allows you to communicate with an OPC UA server from a web browser. We're trying to fix it!

For this purpose, we started [a new open source project](https://github.com/ASNeG/OpcUaWebServer) based on
the [ASNeG's stack](/projects/opcuastack). The work isn't done, and we're in the development stage 
and have no documentation yet. However, you can find some information about it [here](/projects/opcuawebserver).

### Continuous Integration with Jenkins

We had a problem with CI in Travis and Appveyor because of the stack's huge code base. They just broke the compilation
by timeout. So we moved on our own Jenkins server where the builds and tests worked much better and more stable.

Thanks [Blue Ocean Plugin](https://plugins.jenkins.io/blueocean) it was easy, and we saved checks on GitHub.

