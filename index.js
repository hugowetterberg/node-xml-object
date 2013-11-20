var lib = {
  traverse: require('traverse'),
  xml: require('xml')
};

function prepareXmlObject(value) {
  if (typeof value != 'object') {
    value = {item:value};
  }
  return lib.traverse(value).map(setUpPostProcessing);
}

function setUpPostProcessing(value) {
  this.after(transformXmlObject);
}

function transformXmlObject(value) {
  var type = typeof value;

  if (type == 'object') {
    if (Array.isArray(value)) {
      var items = [{_attr:{type:'array'}}];
      items = items.concat(value.map(function(item) {
        return {item:item};
      }));
      if (!this.parent) {
        this.update({items:items});
      }
      else {
        this.update(items);
      }
    }
    else {
      var elements = [];
      for (var key in value) {
        var element = {};
        element[key] = value[key];
        elements.push(element);
      }
      this.update(elements);
    }
  }
}

module.exports = function xml(value, options) {
  return lib.xml(prepareXmlObject(value), options);
};
