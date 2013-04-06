/*global define, require, window, document*/
/*jslint indent:4*/
define([
    'jquery',
    'lodash',
    'params'
], function ($, _, params) {
    "use strict";

    var _this = {};

    var createGradeArray = function(data){
        var style = {};
            style.bolted = {};
            style.trad = {};
            style.mixed = {};

        _.each(data, function(datum){
            var grade = datum.grade.slice("/");
            grade = grade[0];
            grade = grade.replace("+", "");
            grade = grade.replace("-", "");
            if(typeof style[datum.routeStyle][grade] === 'undefined'){
                style[datum.routeStyle][grade] = 1;
            } else  {
                style[datum.routeStyle][grade]++;    
            }
            
        });
        return style;   
    };

    _this.calculateStats = function (id){
        var fetchFrom = 'http://mikkelstaff.net/api/v1/crag/'+id+'/route';

        $.get(fetchFrom, function(data){
            
            var style = createGradeArray(data);
            console.log(style);
        });
    }

    var spec = {}; 

    spec.getData = function () {
        return{
        labels : ["January","February","March","April","May","June","July"],
        datasets : [
            {
                fillColor : "rgba(220,220,220,0.5)",
                strokeColor : "rgba(220,220,220,1)",
                pointColor : "rgba(220,220,220,1)",
                pointStrokeColor : "#fff",
                data : [65,59,90,81,56,55,40]
            },
            {
                fillColor : "rgba(151,187,205,0.5)",
                strokeColor : "rgba(151,187,205,1)",
                pointColor : "rgba(151,187,205,1)",
                pointStrokeColor : "#fff",
                data : [28,48,40,19,96,27,100]
            },
            {
                fillColor : "rgba(151,187,205,0.5)",
                strokeColor : "rgba(151,187,205,1)",
                pointColor : "rgba(151,187,205,1)",
                pointStrokeColor : "#fff",
                data : [28,48,40,19,96,27,100]
            }
        ]
    }

    };    

    var RouteStats = Backbone.Model.extend(spec);
    
    _this.create = function () {
        return new RouteStats();
    };

    return _this;
});