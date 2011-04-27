console.log(new Box(new Element('div')));

var ExtendedBox = Class.create(Box, {

  initialize: function($super, element, options){
    $super($(element), options);
  }

	// onClick: function(event) {
	//   var element = Event.element(event);
  //   element.setStyle({
  //     background: 'rgb(100,100,100)'
  //   });
	// }
});



