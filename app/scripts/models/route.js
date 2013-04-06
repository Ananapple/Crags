/*global define, require, window, document*/
/*jslint indent:4*/
define([
    'jquery',
    'lodash',
    'params'
], function ($, _, params) {
    "use strict";

    var _this = {};

    var spec = {};

    spec.urlRoot = params('api').route;

    spec.idAttribute = 'routeId';

    var Route = Backbone.Model.extend(spec);

    _this.create = function (id) {

        if (typeof id === 'undefined') {
            var route = new Route();
        } else {
            var route = new Route({'routeId': id});
        }

        return route;

    };
    return _this;
});