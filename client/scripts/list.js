var helper = require('./helper');
var Item = require('./item');

var List = function(properties) {
  helper.bindContext(this);

  this.defineProperties();
  this.initialize(properties);
};

List.prototype = {
  $list: undefined,

  defineProperties: function() {
    var list;

    Object.defineProperties(this, {
      'list': {
        get: function() {
          return list;
        },

        set: function(value) {
          list = value.map(this.setup);
        }
      }
    });

    return this;
  },

  initialize: function(properties) {
    this.$list = document.createElement('ol');
    this.$list.classList.add('list');

    helper.extendProperties(this, properties);

    return this;
  },

  setup: function(item) {
    item = new Item(item);

    this.$list.appendChild(item.$item);

    return item;
  }
};

module.exports = List;
