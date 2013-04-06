/*global define, require, window, document*/
/*jslint indent:4*/
define([
    'jquery',
    'lodash',
    'params',
    'models/crag',
    'viewModels/cragView'
], function ($, _, params, Crag, CragView) {
    "use strict";

    var _this = {};

    var spec = {};

    spec.template = 'crags/cragList';
    spec.manage = true;
    spec.el = 'ul';

    var addOne = function (crag) {
        var cragView = CragView.create(crag);
        this.$el.append(cragView.render().el);
    };

    spec.render = function () {
        this.collection.forEach(addOne, this);
    };

    var CragListView = Backbone.View.extend(spec);

    _this.create = function (instances) {
        return new CragListView({collection: instances});
    };

    return _this;
});