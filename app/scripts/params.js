/*global define*/
/*jslint indent:4*/
define([
    'jquery',
    'lodash',
    'backbone'
], function ($, _) {
    
    'use strict';

    var params = {

        'baseUrl': 'localhost:3501',
        'appName': 'Crags',

        'api': {
            'crag': 'http://api.crags.app:8888/index.php/v1/crag'
        }

    };

    var get = function (key) {
        return params[key];
    };

    return get;

});