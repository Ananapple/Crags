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

    spec.template = 'crags/overview';
    spec.manage = true;

    spec.serialize = function () {
        return this.model.toJSON();
    };

    var CragOverviewView = Backbone.View.extend(spec);

    _this.create = function (instance) {
        return new CragOverviewView({'model': instance});
    };

    return _this;
});