/*global define, require, window, document*/
/*jslint indent:4*/
define([
    'jquery',
    'lodash',
    'params',
    'models/crag',
    'leaflet'
], function ($, _, params, Crag) {
    "use strict";

    var _this = {};

    var spec = {};

    spec.template = 'layouts/mapLayout';
    spec.manage = true;

    spec.drawMap = function () {
        var map = L.map('map', {
            center: [51.505, -0.09],
            zoom: 13
        });

        var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        var osmAttrib='Map data © OpenStreetMap contributors';
        var osm = new L.TileLayer(osmUrl, {attribution: osmAttrib});       

        map.addLayer(osm);

        //get geoposition
        navigator.geolocation.getCurrentPosition(function (position) {
            map.setView(new L.LatLng(position.coords.latitude, position.coords.longitude),12);
        });
        
    };

    var MapLayoutView = Backbone.View.extend(spec);

    _this.create = function () {
        return new MapLayoutView();
    };

    return _this;
});