function actsAsAspect(obj) {
  obj.result = null;
  obj.retVal = {};

  obj.before = function(method, fn){
    var original = this[method];
    this[method] = function(){
      fn.apply(this, arguments);
      return original.apply(this, arguments);
    };
  };

  obj.after = function(method, fn){
    var original = this[method];
    this[method] = function(){
      this.retVal[method] = original.apply(this, arguments);
      return fn.apply(this, arguments);
    };
  };

  obj.around  = function(method, fn){
    var original = this[method];
    this[method] = function(){
      this.result = original;
      return fn.apply(this, arguments);
    };
  };
}
