/*global define, Backbone*/
/*jslint indent:4*/
define([
    'jquery',
    'lodash',
    'params',
    'models/crag'
], function ($, _, params, Crag) {
    
    'use strict';

    var _this = {};

    var spec = {};

    spec.model = Crag;

    spec.url = function () {
        var api = params('api');
        return api.base + '/' + api.crags;
    };

    var CragSet = Backbone.Collection.extend(spec);

    _this.create = function () {

        return new CragSet();

    };

    return _this;

});