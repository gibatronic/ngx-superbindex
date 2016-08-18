var helper = require('./helper');
var Item = require('./item');

var List = function(properties) {
  helper.bindContext(this);

  this.defineProperties();
  this.initialize(properties);
  this.bindEvents();
};

List.prototype = {
  $list: undefined,
  whitelistedLetters: '',

  bindEvents: function() {
    document.body.addEventListener('keyup', this.watchType);
  },

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

  filter: function(letter) {
    this.whitelistedLetters += letter;
    this.updateList();
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
  },

  unfilter: function() {
    this.whitelistedLetters = '';
    this.updateList();
  },

  updateItem: function(item) {
    item.highlight(this.whitelistedLetters);
  },

  updateList: function() {
    this.list.forEach(this.updateItem);
  },

  watchType: function(event) {
    var key = event.key.toLowerCase();

    if (key == 'escape') {
      return this.unfilter();
    }

    if (key.length != 1 || /[^a-z0-9]/.test(key)) {
      return;
    }

    this.filter(key);
  }
};

module.exports = List;
