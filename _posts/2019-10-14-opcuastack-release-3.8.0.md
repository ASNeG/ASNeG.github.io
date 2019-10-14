---
layout: post
title:  OPC UA Stack 3.8.0
description: OPC UA Stack 3.8.0 released with MinGW support
date:   2019-10-14 10:22:22 +0500
categories: news
github_comments_issueid: 4
tags: [opcuastack, release]
---

Hi everyone,

We are glad to announce that our OPC UA Stack 3.8.0 has been released. We've fixed some critical bugs
and added support of MinGW. It is not automated with our build scripts yet, but you can compile your
project with the following commands:

```shell
  $ mkdir build_mingw
  $ cd build_mingw
  $ cmake -G"MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release ..\src
  $ set DESTDIR=C:\ASNeG
  $ cmake --build . --target install

```

As we announced before, 3.8.0 is the last minor release of version 3. We continue fixing bugs and supporting our
users for this version, but all new features are added in version 4.

For more details about the release [see](https://github.com/ASNeG/OpcUaStack/releases/tag/3.8.0).
