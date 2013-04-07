/*global define, require, window, document*/
/*jslint indent:4*/
define([
    'jquery',
    'lodash',
    'params',
    'models/crag',
    'text!../../templates/crags/cragItem.html'
], function ($, _, params, Crag, cragItemHtml) {
    "use strict";

    var _this = {};

    var template = Handlebars.compile(cragItemHtml);

    var spec = {};

    spec.template = 'crags/cragItem';
    spec.manage = true;
    spec.el = 'li';

    spec.serialize = function () {
        return this.model.toJSON();
    };

    spec.zrender = function () {
        var html = template(this.serialize());
        this.el = '<li>' + html + '</li>';
    };

    var CragView = Backbone.View.extend(spec);

    _this.create = function (instance) {
        return new CragView({'model': instance});
    };

    return _this;
});