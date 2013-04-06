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
        var templateObject = this.model.toJSON();
        templateObject.imageURL = this.model.getImageURL();
        return templateObject;
    };

    var CragOverviewView = Backbone.View.extend(spec);

    _this.create = function (instance) {
        return new CragOverviewView({'model': instance});
    };

    return _this;
});