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

    spec.urlRoot = params('api').crag;

    spec.idAttribute = 'cragId';

    var Crag = Backbone.Model.extend(spec);

    _this.create = function (id) {

        if (typeof id === 'undefined') {
            var crag = new Crag();
        } else {
            var crag = new Crag({'cragId': id});
        }

        return crag;

    };

    return _this;
});