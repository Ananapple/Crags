define([
  // Application.
  'app',
  'collections/cragSet',
  'models/crag',
  'viewModels/cragOverviewView',
  'models/route',
  'models/routeStats',
  'viewModels/cragOverviewStatsView',
  'viewModels/mapLayoutView',
  'viewModels/cragListView'
],

function(app, CragSet, Crag, CragOverviewView, Route, RouteStats, CragOverviewStatsView, MapLayoutView, CragListView) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    
    routes: {
      '': 'indexAction',
      'crags/:id': 'cragAction',
      'stats/:id': 'statsAction',
      'map': 'map'
    },

    indexAction: function() {
        
        // var crags = CragSet.create();
        // crags.fetch();

    },

    cragAction: function (id) {
        var crag = Crag.create(id);
        crag.fetch({
            success: function () {
                var cragOverviewView = CragOverviewView.create(crag);
                cragOverviewView.render().then(function () {
                    $('#main').html(cragOverviewView.el);
                    var routeStats = RouteStats.create();
                    var cragOverviewStatsView = CragOverviewStatsView.create(routeStats);
                    cragOverviewStatsView.render().then(function () {
                        $('#stats').html(cragOverviewStatsView.el);
                        cragOverviewStatsView.displayStats(id);    
                    });
                });
            }
        });
    },

    map: function () {

        var cragSet = CragSet.create();
        var mapLayout = MapLayoutView.create();
        var cragListView = CragListView.create(cragSet);
        mapLayout.render().then(function () {
            $('#map-container').html(mapLayout.el);
            mapLayout.drawMap();
            $('#craglist').html(cragListView.el);
        });
    }

  });

  return Router;

});