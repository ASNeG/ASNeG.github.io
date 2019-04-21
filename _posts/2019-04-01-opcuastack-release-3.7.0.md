---
layout: post
title:  OPC UA Stack 3.7.0
description: OPC UA Stack 3.7.0 released with new application API and faster Information Model
date:   2019-04-01 17:22:22 +0500
categories: news
github_comments_issueid: 1
tags: release, opcuastack
---

Hi everyone,

we are happy to announce that our OPC UA Stack 3.7.0 has been released.

### New user application API

Probably you have already noticed that when you're developing your application with the Stack,
you are forced to type a lot of code to do simple things. Now we've fixed it and
provided a new much more friendly API. For a instance, the write operation in a node
from a user application looked so:

```cpp
ServiceTransactionGetNodeReference::SPtr trx = constructSPtr<ServiceTransactionGetNodeReference>();
GetNodeReferenceRequest::SPtr req = trx->request();
GetNodeReferenceResponse::SPtr res = trx->response();

OpcUaNodeIdArray::SPtr nodeIds = constructSPtr<OpcUaNodeIdArray>();
nodeIds->resize(1);
OpcUaNodeId::SPtr greetingStringNodeId = constructSPtr<OpcUaNodeId>();
greetingStringNodeId->set(222, 1);

nodeIds->push_back(greetingStringNodeId);
req->nodes(nodeIds);

this->service().sendSync(trx);
if (trx->statusCode() != Success) {
    Log(Error, "response error");
    return false;
}

NodeReference::SPtr greetingStringRef;
trx->response()->nodeReferenceArray()->get(0, greetingStringRef);
if (greetingStringRef->statusCode() != Success) {
    Log(Error, "reference error");
    return false;
}

auto greetingStringApplicationRef = boost::static_pointer_cast<NodeReferenceApplication>(greetingStringRef);
BaseNodeClass::WPtr greetingStringNode = greetingStringApplicationRef->baseNodeClass();

VariableNodeClass::SPtr greetingStringVar = boost::static_pointer_cast<VariableNodeClass>(greetingStringNode.lock());
if (!greetingStringVar) {
  Log(Error, "pointer error");
  return false;
}

OpcUaDataValue dataValue;
dataValue.statusCode(Success);
dataValue.sourceTimestamp(OpcUaDateTime(boost::posix_time::microsec_clock::universal_time()));
dataValue.serverTimestamp(OpcUaDateTime(boost::posix_time::microsec_clock::universal_time()));
dataValue.variant()->setValue(OpcUaString("Hello, World!"));
greetingStringVar->setValue(dataValue);
```

Now you should do so:

```cpp
GetNodeReference getNodeReference(OpcUaNodeId(222,1));
if (!getNodeReference.query(&this->service())) {
    Log(Error, "response error");
    return false;
}

if (getNodeReference.statuses()[0] != Success) {
    Error, "node reference error");
    return false;
}

auto ptr = getNodeReference.nodeReferences()[0].lock();
if (!ptr) {
    Log(Error, "node no longer exist");
    return false;
}

OpcUaDataValue dataValue(OpcUaString("Hello, world!"));
ptr->setValueSync(dataValue);
```

The code looks a bit shorter. Unfortunately, we haven't documented all the new classes,
however, you can find some examples in the related issues [#59](https://github.com/ASNeG/OpcUaStack/issues/59)
and [#65](https://github.com/ASNeG/OpcUaStack/issues/65)

### Performance of Information Model

One of our applications had a problem with the performance at the starting. When the
size of the information model became more than 200 thousand nodes, it was
starting several minutes. It was unacceptable, and we refactored the information model.
Now the application starts with several seconds.

See issue [#120](https://github.com/ASNeG/OpcUaStack/pull/120) for more information.    

### Documentation

The [OPC UA Stack](projects/opcuastack) is a mature project with many installations but has almost no documentation. We're doing our best to fix it. In this release
we have published some tutorials that are useful for developers without deep
knowledge of OPC UA technology:

 * [Discovery Process](https://opcuastack.readthedocs.io/en/3.7.0/3_development/discovery_process.html)
 * [Session and Access Control](https://opcuastack.readthedocs.io/en/3.7.0/3_development/session_and_access_control.html)
 * [Data Access](https://opcuastack.readthedocs.io/en/3.7.0/3_development/data_access.html)

Our progress in documentation could be better, but we have no English
native speaker on the team. If your native language is English and you see mistakes or
ambiguous sentences, please, let us know about it. We want your documentation to help
other people but not irritate them.
