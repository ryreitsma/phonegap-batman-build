// Generated by CoffeeScript 1.6.3
(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  PhonegapApp.RestStorage = (function(_super) {
    __extends(RestStorage, _super);

    function RestStorage() {
      _ref = RestStorage.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    RestStorage.prototype.serializeAsForm = false;

    return RestStorage;

  })(Batman.RestStorage);

}).call(this);
