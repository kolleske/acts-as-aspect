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

	setNewPosition: function(event) {
		var element = Event.element(event);
		element.setStyle({
			top: this.options.top(100) + 'px',
			left: this.options.left(100) + 'px'
		});
	}
}


