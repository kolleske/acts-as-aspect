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

  setNewBackground: function(event) {
    var element = Event.element(event);
    element.setStyle({
      background: 'rgba(' + this.options.bg() + ',' + this.options.bg() + ',' + this.options.bg() + ',0.4)'
    });
  }
});



