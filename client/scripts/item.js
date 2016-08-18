var helper = require('./helper');

var Item = function(properties) {
  helper.bindContext(this);

  this.defineProperties();
  this.initialize(properties);
  this.bindEvents();
};

Item.prototype = {
  $item: undefined,
  $link: undefined,
  highlighted: false,

  activate: function() {
    this.active = true;
  },

  bindEvents: function() {
    this.$link.addEventListener('focusin', this.activate);
    this.$link.addEventListener('focusout', this.deactivate);
    this.$link.addEventListener('mouseenter', this.activate);
    this.$link.addEventListener('mouseleave', this.deactivate);
  },

  deactivate: function() {
    this.active = false;
  },

  defineProperties: function() {
    var active = false;
    var name;
    var type;

    Object.defineProperties(this, {
      'active': {
        get: function() {
          return active;
        },

        set: function(value) {
          if (active == value) {
            return;
          }

          active = value;

          this.$link.classList.toggle('list__link--active', active);
        }
      },

      'name': {
        get: function() {
          return name;
        },

        set: function(value) {
          if (name == value) {
            return;
          }

          name = value;

          this.$link.setAttribute('href', name);
          this.$link.textContent = name;
        }
      },

      'type': {
        get: function() {
          return type;
        },

        set: function(value) {
          if (type == value) {
            return;
          }

          type = value;

          this.$item.classList.add('list__item--' + type);
          this.$link.classList.add('list__link--' + type);
        }
      }
    });

    return this;
  },

  highlight: function(letters) {
    this.highlighted = letters.length != 0 && this.name.toLowerCase().indexOf(letters) == 0;

    if (this.highlighted) {
      var regExp = new RegExp('^(' + letters + ')', 'i');
      var template = '<mark class="list__highlight">$1</mark>';

      this.$link.innerHTML = this.name.replace(regExp, template);
      this.$link.focus();
    } else {
      this.$link.textContent = this.name;
    }
  },

  initialize: function(properties) {
    this.$link = document.createElement('a');
    this.$link.classList.add('list__link');

    this.$item = document.createElement('li');
    this.$item.classList.add('list__item');
    this.$item.appendChild(this.$link);

    helper.extendProperties(this, properties);

    return this;
  }
};

module.exports = Item;
