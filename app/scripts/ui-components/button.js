/*global define */
define([
    'jquery',
    'component'
], function ($, component) {
    'use strict';
    
    var _this = {};

    _this.create = function () {
        
        var _instance = component.create();

        var buttonText;

        _instance.setElement($(document.createElement('button')));

        _instance.setTitle = function (title) {
            buttonText = title;
        };

        _instance.getContent = function () {
            return buttonText;
        };

        return _instance;
    };

    return _this;

});