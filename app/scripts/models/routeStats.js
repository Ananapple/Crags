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

    var calculateStats = function (id, callback){
        var fetchFrom = 'http://mikkelstaff.net/api/v1/crag/'+id+'/route';

        $.get(fetchFrom, function(data){
            var style = createGradeArray(data);
            callback(style);

        });
    }

    var spec = {}; 

    spec.getData = function (id, callback) {
        calculateStats(id, function(style){
        var keys = _.union(_.keys(style.mixed), _.keys(style.trad), _.keys(style.bolted));
        var min = parseInt(_.min(keys),10);
        var max = parseInt(_.max(keys),10);
        var i = 0;
        for(i=min; i<=(max); i++){
            if(typeof style.mixed[i] === 'undefined'){
                style.mixed[i] = 0;
            }
            if(typeof style.trad[i] === 'undefined'){
                style.trad[i] = 0;
            }
            if(typeof style.bolted[i] === 'undefined'){
                style.bolted[i] = 0;
            }
        }
        console.log(style.bolted);
        console.log(style.mixed);
        console.log(style.trad);
        callback({
            labels : _.union(_.keys(style.mixed), _.keys(style.trad), _.keys(style.bolted)),
            datasets : [
                {
                    fillColor : "rgba(254,87,161,0.5)",
                    strokeColor : "rgba(254,87,161,1)",
                    pointColor : "rgba(254,87,161,1)",
                    pointStrokeColor : "#fff",
                    data : _.toArray(style.bolted)

                },
                {
                    fillColor : "rgba(60,163,51,0.5)",
                    strokeColor : "rgba(60,163,51,1)",
                    pointColor : "rgba(60,163,51,1)",
                    pointStrokeColor : "#fff",
                    data : _.toArray(style.trad)
                },
                {
                    fillColor : "rgba(117,81,61,0.5)",
                    strokeColor : "rgba(117,81,61,1)",
                    pointColor : "rgba(117,81,61,1)",
                    pointStrokeColor : "#fff",
                    data : _.toArray(style.mixed)
                }
            ]

        });
    });
        

    };    

    var RouteStats = Backbone.Model.extend(spec);
    
    _this.create = function () {
        return new RouteStats();
    };

    return _this;
});