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
    spec.tagName = "ul";

    var addOne = function (crag) {
        var cragView = CragView.create(crag);
        cragView.zrender();
        this.$el.append(cragView.el);
    };

    spec.initialize = function () {
        this.collection.bind("reset", _.bind(spec.render, this));
        this.collection.fetch();
    };

    spec.render = function () {
        this.collection.forEach(addOne, this);
    };

    var CragListView = Backbone.View.extend(spec);

    _this.create = function (instances) {
        return new CragListView({collection: instances});
    };

    _this.alphaSort = function(){
        var sortAZ = function sortAlpha(a,b){  
            return a.innerHTML.toLowerCase() > b.innerHTML.toLowerCase() ? 1 : -1;  
        };  
  
        $(".AZ").click(function(){
            alert("oy");
            $('#cragList li').sort(sortAlpha).appendTo('#cragList ul');
        });
    };
    
        
    return _this;
});