/*global define, require, window, document*/
/*jslint indent:4*/
define([
    'jquery',
    'lodash',
    'params',
    'models/crag'
], function ($, _, params, Crag) {
    "use strict";

    var _this = {};

    var spec = {};

    spec.template = 'crags/cragItem';
    spec.manage = true;
    spec.el = 'li';

    spec.serialize = function () {
        return this.model.toJSON();
    };

    var CragView = Backbone.View.extend(spec);

    _this.create = function (instance) {
        return new CragView({'model': instance});
    };

    return _this;
});