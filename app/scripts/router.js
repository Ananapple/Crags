define([
  // Application.
  'app',
  'collections/cragSet',
  'models/crag',
  'viewModels/cragOverviewView',
  'models/route',
  'models/routeStats',
  'viewModels/cragOverviewStatsView'
],

function(app, CragSet, Crag, CragOverviewView, Route, RouteStats, CragOverviewStatsView) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    
    routes: {
      '': 'indexAction',
      'crags/:id': 'cragAction',
      'stats/:id': 'statsAction'
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
                cragOverviewView.render();
                $('#main').html(cragOverviewView.el);

                var routeStats = RouteStats.create();
                var cragOverviewStatsView = CragOverviewStatsView.create(routeStats);
                cragOverviewStatsView.render().then(function () {
                    $('#main').append(cragOverviewStatsView.el);
                    cragOverviewStatsView.displayStats();    
                });
                
            }
        });
    },

    statsAction: function(id){
      Route.calculateStats(id);
    }

  });

  return Router;

});