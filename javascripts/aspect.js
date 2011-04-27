/*
 *  superbox-aspects.js
 *
 *  Created by Thomas Duerr on 2006-12-05.
 *  Copyright (c) 2006. All rights reserved.
 */

actsAsAspect(SuperBox.prototype);

SuperBox.prototype.after('onClick', function() {
	new Effect.Pulsate(this.element, {
		duration: 1.0
	});
});


