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

    spec.template = 'crags/cragList';
    spec.manage = true;

    var CragListView = Backbone.View.extend(spec);

    _this.create = function (instance) {
        return new CragListView({model: instance});
    };

    return _this;
});