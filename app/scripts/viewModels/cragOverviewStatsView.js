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

    spec.template = 'crags/overviewStats';
    spec.manage = true;

    spec.serialize = function () {
        return {} ;
    };

    spec.displayStats = function () {
        //Get the context of the canvas element we want to select
        var ctx = document.getElementById("myChart").getContext("2d");
        var cragStatsChart = new Chart(ctx).Line(this.model.getData());
    }

    var CragOverviewStatsView = Backbone.View.extend(spec);

    _this.create = function (instance) {
        return new CragOverviewStatsView({'model': instance});
    };

    return _this;
});