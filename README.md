# XML Object

[![NPM version](https://badge.fury.io/js/xml-object.png)](http://badge.fury.io/js/xml-object)
[![Dependency Status](https://gemnasium.com/hugowetterberg/node-xml-object.png)](https://gemnasium.com/hugowetterberg/node-xml-object)
[![Build Status](https://travis-ci.org/hugowetterberg/node-xml-object.png?branch=master)](https://travis-ci.org/hugowetterberg/node-xml-object)

Maps normal objects/values to xml. Most XML libraries require a special object "syntax" to support xml features like attributes, which is necessary if you want to be able to output all kinds of xml. `xml-object` isn't as flexible, but just concerns itself with outputting an xml representation of javascript data.

Sample usage:

    var lib = {xml: require('xml-object')};
    var xml = lib.xml({a:"Submarine"}, {declaration:true, indent:true});
    console.log(xml);

Result:

    <?xml version="1.0" encoding="UTF-8"?>
    <a>Submarine</a>

The options object is optional, and `true` can be passed as a short-hand for `{indent:true}`.

The test cases probably describe the mapping behaviour best:

    {
      name: "simple element",
      value: {a:"Submarine"},
      result: '<a>Submarine</a>'
    },
    {
      name: "simple value",
      value: "Submarine",
      result: '<item>Submarine</item>'
    },
    {
      name: "top level array",
      value: [1,2,3],
      result: '<items type="array"><item>1</item><item>2</item><item>3</item></items>'
    },
    {
      name: "multiple elements",
      value: {a:1,b:2},
      result: '<a>1</a><b>2</b>'
    },
    {
      name: "nested elements",
      value: {a:{b:1,c:2}},
      result: '<a><b>1</b><c>2</c></a>'
    },
    {
      name: "nested arrays",
      value: {a:[[1,2],[3,4]]},
      result: '<a type="array"><item type="array"><item>1</item><item>2</item></item><item type="array"><item>3</item><item>4</item></item></a>'
    }
