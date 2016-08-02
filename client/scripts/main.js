!function() {
  'use strict';

  var $list;
  var list;

  var Item = function(data) {
    this.name = data.name;
    this.type = data.type;

    this.render();
    this.bind();
  };

  Item.prototype = {
    $item: null,
    name: null,
    type: null,

    activate: function() {
      this.$link.classList.add('list__link--active');
    },

    bind: function() {
      this.$link.addEventListener('focusin', this.activate.bind(this));
      this.$link.addEventListener('focusout', this.deactivate.bind(this));
      this.$link.addEventListener('mouseenter', this.activate.bind(this));
      this.$link.addEventListener('mouseleave', this.deactivate.bind(this));
    },

    deactivate: function() {
      this.$link.classList.remove('list__link--active');
    },

    render: function() {
      this.$item = document.createElement('li');
      this.$item.classList.add('list__item');
      this.$item.classList.add('list__item--' + this.type);

      this.$link = document.createElement('a');
      this.$link.classList.add('list__link');
      this.$link.classList.add('list__link--' + this.type);
      this.$link.setAttribute('href', this.name);
      this.$link.textContent = this.name;
      this.$item.appendChild(this.$link);

      return this;
    }
  };

  var main = function() {
    parse();
    render();
  };

  var parse = function() {
    var instantiate = function(item) {
      return new Item(item);
    };

    list = JSON.parse(
      document.getElementById('data')
              .textContent
    ).map(instantiate);
  };

  var render = function() {
    $list = document.createElement('ol');

    $list.classList.add('list');

    var appendChild = function(item) {
      $list.appendChild(item.$item);
    };

    list.forEach(appendChild);
    document.body.appendChild($list);
  };

  document.addEventListener('DOMContentLoaded', main);
}();
