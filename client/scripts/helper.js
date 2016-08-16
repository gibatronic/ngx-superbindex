exports.bindContext = function(context) {
  var property;

  for (property in context) {
    if (context[property] instanceof Function) {
      context[property] = context[property].bind(context);
    }
  }
};

exports.extendProperties = function(context, properties) {
  var property;

  for (property in properties) {
    context[property] = properties[property];
  }
};
