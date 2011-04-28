
// plain box
var Box = Class.create();

Box.prototype = {
	initialize: function(element, options) {
		this.element = $(element);
		this.options = Object.extend({
			top: function(offset) { return Math.round(Math.random() * offset); },
			left: function(offset) { return Math.round(Math.random() * offset); }
		}, options || {});
		this.setObservers();
	},

	setObservers: function() {
		Event.observe(this.element, 'click', this.setNewPosition.bindAsEventListener(this));
	},

	setNewPosition: function() {
		this.element.setStyle({
			top: this.options.top(100) + 'px',
			left: this.options.left(100) + 'px'
		});
	}
}


// extended box
var ExtendedBox = Class.create(Box, {

  initialize: function($super, element, options){
    this.element = $(element);
    $super(element, Object.extend({
      bg: function(){ return Math.round(Math.random() * 255); }
    }, options || {}));
  },

  setObservers: function($super){
    $super();
    Event.observe(this.element, 'click', this.setNewBackground.bindAsEventListener(this));
  },

  setNewBackground: function() {
    this.element.setStyle({
      background: 'rgba(' + this.options.bg() + ',' + this.options.bg() + ',' + this.options.bg() + ',0.4)'
    });
  }
});

